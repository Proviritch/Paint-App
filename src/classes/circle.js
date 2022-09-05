import { masterPiece, color, colorSection, moreToolsSection, drawToolsSection } from "..";
const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');
const ctx2 = playground.getContext('2d');

let x;
let y;
let radiusX;
let radiusY;

let circles = ['circle'];
//ctx.strokeStyle = color;
//ctx2.strokeStyle = color;


export class Circle {

    constructor(x,y,radiusX,radiusY) {
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }

    draw(e) {
        radiusX = Math.abs(e.changedTouches[0].clientX-drawToolsSection.offsetWidth-x);
        radiusY = Math.abs(e.changedTouches[0].clientY-moreToolsSection.offsetHeight-y);
        ctx2.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
        ctx2.strokeStyle = color;
        ctx2.lineWidth = 10;
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        ctx2.ellipse(x,y,radiusX,radiusY,0,0,Math.PI*2,false);
        ctx2.stroke();

    }

    drawEnd() {
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        //circles.push(new Circle(x,y,radiusX,radiusY));
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = color;
        ctx.ellipse(x,y,radiusX,radiusY,0,0,Math.PI*2,false);
        ctx.stroke();
        ctx.beginPath();

        circles.push({
            x: x,
            y: y,
            radiusX: radiusX,
            radiusY: radiusY,
            strokeStyle: color
        });

        masterPiece.push([...circles]);
        circles = ['circle']

        //console.log(masterPiece);
    }

    drawStart(ev) {
        //ctx.strokeStyle = color;
        x = ev.changedTouches[0].clientX-drawToolsSection.offsetWidth;
        y = ev. changedTouches[0].clientY-moreToolsSection.offsetHeight;
    }

    drawCtrlZ(i) {
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = masterPiece[i][1].strokeStyle;
        ctx.ellipse(masterPiece[i][1].x,masterPiece[i][1].y,masterPiece[i][1].radiusX,masterPiece[i][1].radiusY,0,0,Math.PI*2,false);
        ctx.stroke();
        ctx.beginPath();
    }

}