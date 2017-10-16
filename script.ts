
document.addEventListener("DOMContentLoaded", function( ) {

const RECTANGLE_BTN = document.getElementById('rectangle-btn');
const SQUARE_BTN = document.getElementById('square-btn');
const CIRCLE_BTN = document.getElementById('circle-btn');
const TRIANGLE_BTN = document.getElementById('triangle-btn');

RECTANGLE_BTN.addEventListener('click', shapeCreator('rectangle'));
SQUARE_BTN.addEventListener('click', shapeCreator('square'));
CIRCLE_BTN.addEventListener('click', shapeCreator('circle'));
TRIANGLE_BTN.addEventListener('click',shapeCreator('triangle'))
});

class Shape {
    div: HTMLDivElement = document.createElement('div');
    type: string;

constructor(){
    this.draw();
    this.div.className = 'shape';  
    this.div.addEventListener('dblclick', () => {
        this.div.remove(); 
    });
    
}
draw(): void {
    this.div.style.top = `${randomNumberOne()}px`;
    this.div.style.left = `${randomNumberTwo()}px`;
    document.getElementById('container').appendChild(this.div); 
} 

}

class Rectangle extends Shape {


constructor(){
    super()
    this.div.id ='rectangle';
    
    this.size(((<HTMLInputElement>document.getElementById('r-width')).value), ((<HTMLInputElement>document.getElementById('r-height')).value)) ; 
}
size(width, height): void {
    this.div.style.width = `${width}px`;
    this.div.style.height = `${height}px`;
}
}

class Square extends Shape {

constructor(){
    super()
    this.div.id ='square';
    this.size((<HTMLInputElement>document.getElementById('square-input')).value);
}
size(sideLength): void {
    this.div.style.height = `${sideLength}px`;
    this.div.style.width = `${sideLength}px`; 
}
}    

class Circle extends Shape {

constructor(){
    super()
    this.div.id ='circle';
    this.size((<HTMLInputElement>document.getElementById('circle-input')).value);  
}
size(size): void {
    this.div.style.height = `${size}px`;
    this.div.style.width = `${size}px`;
    this.div.style.borderRadius = `${size/2}px`;
}
}

class Triangle extends Shape {

constructor(){
    super()
    this.div.id ='triangle-right'; 
    this.size((<HTMLInputElement>document.getElementById('triangle-input')).value)
}
size(size): void {
    this.div.style.borderBottom = `${size}px solid #f1c40f `;
    this.div.style.borderRight = `${size}px solid transparent`
}
}

//Functions

let shapeCreator = (type)=>{
return () => {
    switch(type) {
        case 'rectangle':
            new Rectangle();
            
            
            break;
        case 'square':
            new Square();
            break;
        case 'circle':
            new Circle();
            break;
        case 'triangle':
            new Triangle();
    }
}
}

let randomNumberOne = (): any => {
return Math.floor((Math.random() * 475) + 1);
}

let randomNumberTwo = (): any => {
return Math.floor((Math.random() * 916) + 453);
}