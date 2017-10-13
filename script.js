var buttonContainer;
var squareArray = [];
var triangleArray = [];
var rectangleArray = [];
var circleArray = [];
document.addEventListener('DOMContentLoaded', function () {
    buttonContainer = document.getElementById('button-container');
    //Created Buttons//
    var SQUARE_INPUT = document.createElement('input');
    var SQUARE_BUTTON = document.createElement('button');
    var TRIANGLE_INPUT = document.createElement('input');
    var TRIANGLE_BUTTON = document.createElement('button');
    var RECTANGLE_WIDTH = document.createElement('input');
    var RECTANGLE_HEIGHT = document.createElement('input');
    var RECTANGLE_BUTTON = document.createElement('button');
    var CIRCLE_INPUT = document.createElement('input');
    var CIRCLE_BUTTON = document.createElement('button');
    //Text In Buttons//
    SQUARE_BUTTON.innerText = 'Create Square';
    TRIANGLE_BUTTON.innerText = 'Create Triangle';
    RECTANGLE_BUTTON.innerText = 'Create Rectangle';
    CIRCLE_BUTTON.innerText = 'Create Circle';
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
    document.body.insertBefore(SQUARE_INPUT, buttonContainer);
    document.body.insertBefore(SQUARE_BUTTON, buttonContainer);
    document.body.insertBefore(TRIANGLE_INPUT, buttonContainer);
    document.body.insertBefore(TRIANGLE_BUTTON, buttonContainer);
    document.body.insertBefore(RECTANGLE_WIDTH, buttonContainer);
    document.body.insertBefore(RECTANGLE_HEIGHT, buttonContainer);
    document.body.insertBefore(RECTANGLE_BUTTON, buttonContainer);
    document.body.insertBefore(CIRCLE_INPUT, buttonContainer);
    document.body.insertBefore(CIRCLE_BUTTON, buttonContainer);
});
