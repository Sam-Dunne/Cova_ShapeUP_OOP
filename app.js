

$("#btn-add-rectangle").click(() => {
    let height = $("#rectangle-height-input-field").val();
    let width = $("#rectangle-width-input-field").val();
    new Rectangle(height, width);
});

$("#btn-add-square").click(() => {
    let height = $("#square-side-length-input-field").val();
    let width = $("#square-side-length-input-field").val();
    new Square(height, width);
});

$("#btn-add-circle").click(() => {
    let height = $("#circle-radius-input-field").val();
    let width = $("#circle-radius-input-field").val();
    new Circle(height, width);
});
$("#btn-add-triangle").click(() => {
    let height = $("#triangle-height-input-field");
    let width = $("#triangle-height-input-field");
    new Triangle(height, width);
});
// parent Class: extended by children: Triangle, Rectangle, Circle, Square
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.render();
        this.style();
        this.clearMeasurements();
        this.offsetPosition();
    }
    // appends empty div inside #shapes-container
    render() {
        this.div = $('<div></div>');        
        $('#shapes-container').append(this.div);
    }
    //  binds double click listener to object
    //  removes shape object from DOM 
    //  resets measurements to page load state
    clearMeasurements() {
        this.div.dblclick(() => {
            this.div.remove()
            $("#param-header-width").text('Width');
            $("#param-header-perimeter").text('Perimeter')
            $("#rtn-param-shape").text('');
            $("#rtn-param-height").text(``);
            $("#rtn-param-width").text(``);
            $("#rtn-param-area").text(``);
            $("#rtn-param-perimeter").text(``);
            $("#rtn-param-radius").text(``);
        });
    }
    //  positions the shape inside #shapes-container by using offset value
    offsetPosition() {
        this.div.css({
            top : `${Math.floor(Math.random() * (590 - this.height))}px`,
            left : `${Math.floor(Math.random() * (590 - this.height))}px`,
            
        })
    }
    //  adds height and width styles to object
    style() {
        this.div.css({
            height: `${this.height}px`,
            width: `${this.width}px`
        });
    }
}

class Triangle extends Shape {
    constructor(height, width) {
        // passes height and width arguments up to parent: Shape
        super(height, width);
        this.style();
        this.handleEventGetMeasurements();
    }
    //  adds css to div
    style() {
        this.div.addClass('triangle');
        this.value = `${this.height.val()}`
        $('.triangle').css({
            top : `${Math.floor(Math.random() * (590 - this.value))}px`,
            left : `${Math.floor(Math.random() * (590 - this.value))}px`,
            borderTopWidth :  `${this.value}px`,
            borderTopStyle : 'solid',
            borderTopColor : 'transparent',
            borderRightWidth : `${this.value}px`,
            borderRightStyle : 'solid',
            borderRightColor : 'yellow'
        });
    }
    //  binds single click to div, which adds measurements to DOM
    handleEventGetMeasurements() {
        this.div.click(() => {
            $("#param-header-width").text('Hypotenus');     //  in measurements section, changes "Width" to "Hypotenus"
            $("#rtn-param-shape").text('Triangle');
            $("#rtn-param-height").text(`${this.value}px`);
            // Width becomes Hypotenus on Triangles
            $("#rtn-param-width").text(`~${Math.floor(this.value * Math.sqrt(2))}px`);
            $("#rtn-param-area").text(`${0.5 * this.value * this.value}px`);
            $("#rtn-param-perimeter").text(`N/A`);
            $("#rtn-param-radius").text(`N/A`);
        });
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        // passes height and width arguments up to parent: Shape
        super(height, width);
        this.div.addClass('rectangle');
        this.handleEventGetMeasurements();
    }
    //  binds single click to div, which adds measurements to DOM
    handleEventGetMeasurements() {
        this.div.click(() => {
            $("#param-header-width").text('Width');
            $("#rtn-param-shape").text('Rectangle');
            $("#rtn-param-height").text(`${this.height}px`);
            $("#rtn-param-width").text(`${this.width}px`);
            $("#rtn-param-area").text(`${this.height * this.width}px`);
            $("#rtn-param-perimeter").text(`${this.height * 2 + this.width * 2}px`);
            $("#rtn-param-radius").text(`N/A`);
        });
    }
}


class Circle extends Shape {
    constructor(height, width) {
        // passes height and width arguments up to parent: Shape
        super(height, width);
        this.div.addClass('circle');
        this.handleEventGetMeasurements()
    }
    //  binds single click to div, which adds measurements to DOM
    handleEventGetMeasurements() {
        this.div.click(() => {
            $("#param-header-perimeter").text('Circumference');     //  in measurements section, changes "Perimeter" to "Circumference"
            $("#rtn-param-shape").text('Circle');
            $("#rtn-param-height").text(`${this.height}px`);
            $("#rtn-param-width").text(`${this.height}px`);
            $("#rtn-param-area").text('~ ' + Math.floor(Math.PI * Math.pow(this.height, 2)) + 'px');   //Circle area = pi times radius squared');
            $("#rtn-param-perimeter").text('~ ' + Math.floor(2 * Math.PI * this.height) + 'px');       //Circle perimeter2PI * radius
            $("#rtn-param-radius").text(`${this.height}px`);
        });
    }
}

class Square extends Shape {
    constructor(height, width) {
        // passes height and width arguments up to parent: Shape
        super(height, width);
        this.div.addClass('square');
        this.handleEventGetMeasurements();
    }
    //  binds single click to div, which adds measurements to DOM
    handleEventGetMeasurements() {
        this.div.click(() => {
            $("#param-header-width").text('Width');
            $("#rtn-param-shape").text('Square');
            $("#rtn-param-height").text(`${this.height}px`);
            $("#rtn-param-width").text(`${this.height}px`);
            $("#rtn-param-area").text(`${Math.pow(this.height, 2)}px`);
            $("#rtn-param-perimeter").text(`${this.height * 4}px`);
            $("#rtn-param-radius").text(`N/A`);
        });
    }
};

// ****references shape input fields
// $("#rectangle-height-input-field");
// $("#rectangle-width-input-field");
// $("#square-side-length-input-field");
// $("#circle-radius-input-field");
// $("#triangle-height-input-field");

// ****references h5 to hold calculated measurement values
// $("#rtn-param-shape");
// $("#rtn-param-height");
// $("#rtn-param-width");
// $("#rtn-param-area");
// $("#rtn-param-perimeter");
// $("#rtn-param-radius");
// // references div#shapes-container
// $("#shapes-container");
// //references h4#param-header-width
// $("#param-header-width");

//****references make shape submit buttons from DOM
// $("#btn-add-rectangle")
// $("#btn-add-square")
// $("#btn-add-circle")
// $("#btn-add-triangle")