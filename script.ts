let buttonContainer: HTMLElement;
let squareArray: Array<ISquare> = [];
let triangleArray: Array<ITriangle> = [];
let rectangleArray: Array<IRectangle> =[];
let circleArray: Array<ICircle> = [];

document.addEventListener('DOMContentLoaded', () => {
    buttonContainer = document.getElementById('button-container');
//Created Buttons//
    const SQUARE_INPUT: HTMLElement = document.createElement('input');
    const SQUARE_BUTTON: HTMLButtonElement = document.createElement('button');
    const TRIANGLE_INPUT: HTMLElement = document.createElement('input');
    const TRIANGLE_BUTTON: HTMLButtonElement = document.createElement('button');
    const RECTANGLE_WIDTH: HTMLElement = document.createElement('input');
    const RECTANGLE_HEIGHT: HTMLElement = document.createElement('input');
    const RECTANGLE_BUTTON: HTMLButtonElement = document.createElement('button');
    const CIRCLE_INPUT: HTMLElement = document.createElement('input');
    const CIRCLE_BUTTON: HTMLButtonElement = document.createElement('button');
//Text In Buttons//
    SQUARE_BUTTON.innerText = 'Create Square';
    TRIANGLE_BUTTON.innerText = 'Create Triangle';
    RECTANGLE_BUTTON.innerText = 'Create Rectangle';
    CIRCLE_BUTTON.innerText = 'Create Circle';
//Button Functions//
    SQUARE_BUTTON.addEventListener('click',() => {
        squareArray.push( new Square());
    });

    TRIANGLE_BUTTON.addEventListener('click', () => {
        triangleArray.push( new Triangle());
    });

    RECTANGLE_BUTTON.addEventListener('click', () => {
        rectangleArray.push( new Rectangle());
    });

    CIRCLE_BUTTON.addEventListener('click', () => {
        circleArray.push( new Circle());
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