import { masterPiece, color, colorSection, moreToolsSection, drawToolsSection, mineLineWidth } from "..";
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

    draw(eX,eY) {
        radiusX = Math.abs(eX-drawToolsSection.offsetWidth-x);
        radiusY = Math.abs(eY-moreToolsSection.offsetHeight-y);
        ctx2.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
        ctx2.strokeStyle = color;
        ctx2.lineWidth = mineLineWidth;
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        ctx2.ellipse(x,y,radiusX,radiusY,0,0,Math.PI*2,false);
        ctx2.stroke();

    }

    drawEnd() {
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        ctx.beginPath();
        ctx.lineWidth = mineLineWidth;
        ctx.strokeStyle = color;
        ctx.ellipse(x,y,radiusX,radiusY,0,0,Math.PI*2,false);
        ctx.stroke();

        circles.push({
            x: x,
            y: y,
            radiusX: radiusX,
            radiusY: radiusY,
            strokeStyle: color,
            lineWidth: mineLineWidth
        });

        masterPiece.push([...circles]);
        circles = ['circle']
    }

    drawStart(evX,evY) {
        x = evX-drawToolsSection.offsetWidth;
        y = evY-moreToolsSection.offsetHeight;
    }

    drawCtrlZ(i) {
        ctx.beginPath();
        ctx.lineWidth = masterPiece[i][1].lineWidth;
        ctx.strokeStyle = masterPiece[i][1].strokeStyle;
        ctx.ellipse(masterPiece[i][1].x,masterPiece[i][1].y,masterPiece[i][1].radiusX,masterPiece[i][1].radiusY,0,0,Math.PI*2,false);
        if(masterPiece[i][1].fillStyle) {
            ctx.fillStyle = masterPiece[i][1].fillStyle;
            ctx.fill();
        }
        ctx.stroke();
        ctx.closePath();
    }

    fillColor() {
        masterPiece[masterPiece.length-1][1].fillStyle = color;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

}