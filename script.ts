let squareLength,
    circleRadius,
    triangleHeight,
    rectangleHeight,
    rectangleWidth,
    field;

document.addEventListener('DOMContentLoaded', () => {
    buttonContainer = document.getElementById('button-container');
//Created Buttons//
    const squareLength: HTMLElement = document.getElementById('input');
    const SQUARE_BUTTON: HTMLElement = document.getElementById('button');
    const TRIANGLE_INPUT: HTMLElement = document.getElementById('input');
    const TRIANGLE_BUTTON: HTMLElement = document.getElementById('button');
    const RECTANGLE_WIDTH: HTMLElement = document.getElementById('input');
    const RECTANGLE_HEIGHT: HTMLElement = document.getElementById('input');
    const RECTANGLE_BUTTON: HTMLElement = document.getElementById('button');
    const CIRCLE_INPUT: HTMLElement = document.getElementById('input');
    const CIRCLE_BUTTON: HTMLElement = document.getElementById('button');

// Constructor Bullshit 

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
});