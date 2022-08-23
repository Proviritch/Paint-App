
const canvas3 = document.getElementById('canvas3');
const ctx = canvas3.getContext('2d');

let x;
let y;
let radiusX;
let radiusY;

let circles = [];


export class Circle {

    constructor(x,y,radiusX,radiusY) {
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }

    shape() {
        ctx.beginPath(); 
        ctx.ellipse(this.x,this.y,this.radiusX,this.radiusY,0,0,Math.PI*2,false);
        ctx.stroke();
    }

    drawCircleModel(e) {
        radiusX = Math.abs(e.changedTouches[0].clientX-x);
        radiusY = Math.abs(e.changedTouches[0].clientY-y);
        ctx.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
        ctx.lineWidth = 10;
        ctx.clearRect(0,0,canvas3.width,canvas3.height);
        ctx.ellipse(x,y,radiusX,radiusY,0,0,Math.PI*2,false);
        ctx.stroke();

        circles.forEach(x => {
            x.shape();
        })
    }

    draw() {
        canvas3.addEventListener('touchstart', e => {
            x = e.changedTouches[0].clientX;
            y = e. changedTouches[0].clientY;
            canvas3.addEventListener('touchmove', this.drawCircleModel);
        })

        canvas3.addEventListener('touchend', () => {
            circles.push(new Circle(x,y,radiusX,radiusY));
            ctx.beginPath();
        })
    }

}