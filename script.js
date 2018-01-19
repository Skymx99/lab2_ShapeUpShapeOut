const XY_MAX = 600;

let container = document.getElementById('container');
let rectWidth = document.getElementById('rectWidth');
let rectHeight = document.getElementById('rectHeight');
let sqLength = document.getElementById('sqLength')
let radius = document.getElementById('radius');
let triHeight = document.getElementById('triHeight');
let shapeName = document.getElementById('shapeName');


class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.div = document.createElement('div');
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
        this.updateLocation();
        container.appendChild(this.div);

        //$(this.div).dblclick(this.delete.bind(this));
        this.div.addEventListener('dblclick', this.delete.bind(this));
        this.div.addEventListener('click', () => {
            this.shapeData();
        });

    }
    updateLocation() {
        let xVal = randomVal(0, XY_MAX - this.width);
        let yVal = randomVal(0, XY_MAX - this.height);

        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }

    shapeData() {
        shapeName.innerHTML = this.div.classList;
        width.innerHTML = `${this.width}px`;
        height.innerHTML = `${this.height}px`;
        area.innerHTML = `${this.height * this.width}px`;
        perimeter.innerHTML = `${(this.height *2) + (this.width *2)}px`
        radiusCir.innerHTML = `${this.radius}`
        
    }

    delete() {
        this.div.remove()
        radiusCir.innerHTML = ``;
        shapeName.innerHTML = ``;
        width.innerHTML = ``;
        height.innerHTML = ``;
        area.innerHTML = ``;
        perimeter.innerHTML = ``;
    }
};

class Rectangle extends Shape {

    constructor(rectWidth, rectHeight) {
        super(rectWidth, rectHeight);
        this.div.classList.add('rectangle');
    };

};


class Square extends Shape {

    constructor(sqLength) {
        super(sqLength, sqLength);
        this.div.classList.add('square');
    };

};

class Circle extends Shape {

    constructor(radius) {
        super(radius*2, radius*2);
        this.div.classList.add('circle');

        this.div.style.borderRadius = `${radius}px`;
        this.radius = radius;
    };
    shapeData() {
        radiusCir.innerHTML = `${this.radius}px`;
        shapeName.innerHTML = this.div.classList;
        width.innerHTML = `${this.width}px`;
        height.innerHTML = `${this.height}px`;
        area.innerHTML = `${Math.PI *  Math.pow(this.radius, 2)}px`;
        perimeter.innerHTML = `${(Math.PI * 2) * this.radius}px`
    }
    

};

class Triangle extends Shape {

    constructor(triHeight) {
        super(triHeight, triHeight);

        this.div.classList.add('triangle');
        this.div.style.borderBottomWidth = `${triHeight}px`;
        this.div.style.borderRightWidth = `${triHeight}px`;

    };
    shapeData() {
        radiusCir.innerHTML = `${this.radius}`;
        shapeName.innerHTML = this.div.classList;
        width.innerHTML = `${this.width}px`;
        height.innerHTML = `${this.height}px`;
        area.innerHTML = `${(this.height * 2) / 2}px`;
        perimeter.innerHTML = `${2 * this.height + Math.sqrt(2) * this.height}px`
    }
};



let buttonRect = document.getElementById('rectInsert');
buttonRect.addEventListener('click', () => {
    console.log(`${rectWidth.value}`);
    console.log(`${rectHeight.value}`);
    let myRect = new Rectangle(rectWidth.value, rectHeight.value);
});

let buttonSq = document.getElementById('sqInsert');
buttonSq.addEventListener('click', () => {
    console.log(`${sqLength.value}`);
    let mySq = new Square(sqLength.value);
});

let buttonCir = document.getElementById('cirInsert');
buttonCir.addEventListener('click', () => {
    console.log(`${radius.value}`);
    let myCir = new Circle(radius.value);
});

let buttonTri = document.getElementById('triInsert');
buttonTri.addEventListener('click', () => {
    console.log(`${triHeight.value}`);
    let myTri = new Triangle(triHeight.value);
});




function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}