import { masterPiece } from "..";
const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');
const ctx2 = playground.getContext('2d');

let x;
let y;
let radiusX;
let radiusY;

let circles = ['circle'];


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

    draw(e) {
        radiusX = Math.abs(e.changedTouches[0].clientX-x);
        radiusY = Math.abs(e.changedTouches[0].clientY-y);
        ctx2.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
        ctx2.lineWidth = 10;
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        ctx2.ellipse(x,y,radiusX,radiusY,0,0,Math.PI*2,false);
        ctx2.stroke();

/*         circles.forEach(x => {
            x.shape();
        }) */
    }

    drawEnd() {
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        //circles.push(new Circle(x,y,radiusX,radiusY));
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.ellipse(x,y,radiusX,radiusY,0,0,Math.PI*2,false);
        ctx.stroke();
        ctx.beginPath();

        circles.push({
            x: x,
            y: y,
            radiusX: radiusX,
            radiusY: radiusY,
        });

        masterPiece.push([...circles]);
        circles = ['circle']

        //console.log(masterPiece);
    }

    drawStart(ev) {
        x = ev.changedTouches[0].clientX;
        y = ev. changedTouches[0].clientY;
    }

}