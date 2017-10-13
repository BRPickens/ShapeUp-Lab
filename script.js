var buttonContainer;
var squareArray = [];
var triangleArray = [];
var rectangleArray = [];
var circleArray = [];
document.addEventListener('DOMContentLoaded', function () {
    buttonContainer = document.getElementById('button-container');
    //Created Buttons//
    var SQUARE_INPUT = document.getElementById('input');
    var SQUARE_BUTTON = document.getElementById('button');
    var TRIANGLE_INPUT = document.getElementById('input');
    var TRIANGLE_BUTTON = document.getElementById('button');
    var RECTANGLE_WIDTH = document.getElementById('input');
    var RECTANGLE_HEIGHT = document.getElementById('input');
    var RECTANGLE_BUTTON = document.getElementById('button');
    var CIRCLE_INPUT = document.getElementById('input');
    var CIRCLE_BUTTON = document.getElementById('button');

    class Shape {
        
    }

    //Button Functions//
    SQUARE_BUTTON.addEventListener('click', function () {
        squareArray.push(new Square());
    });
    TRIANGLE_BUTTON.addEventListener('click', function () {
        triangleArray.push(new Triangle());
    });
    RECTANGLE_BUTTON.addEventListener('click', function () {
        rectangleArray.push(new Rectangle());
    });
    CIRCLE_BUTTON.addEventListener('click', function () {
        circleArray.push(new Circle());
    });
});
