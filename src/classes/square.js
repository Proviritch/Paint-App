import { masterPiece, color, colorSection, moreToolsSection, drawToolsSection, mineLineWidth, isFilled } from '../index.js';
const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');
const ctx2 = playground.getContext('2d');

let x;
let y;
let width;
let height;

let rectangles = ['rectangle'];

export class Square {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(e) {
            width = e.changedTouches[0].clientX-drawToolsSection.offsetWidth-x;
            height = e.changedTouches[0].clientY-moreToolsSection.offsetHeight-y;
            ctx2.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
            ctx2.lineWidth = mineLineWidth;
            ctx2.strokeStyle = color;
            ctx2.clearRect(0,0,canvas1.width,canvas1.height);
            ctx2.rect(x,y,width,height);
            ctx2.stroke();
    }

    drawEnd() {
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        //rectangles.push(new Square(x,y,width,height));
        ctx.beginPath();
        ctx.lineWidth = mineLineWidth;
        ctx.strokeStyle = color;
        ctx.rect(x,y,width,height);
        ctx.stroke();
        //ctx.beginPath();

        rectangles.push({
            x: x,
            y: y,
            width: width,
            height: height,
            strokeStyle: color,
            lineWidth: mineLineWidth
        });
        
        masterPiece.push([...rectangles]);

        rectangles = ['rectangle'];

        //console.log(masterPiece);
    }

    drawStart(ev) {
/*      x=e.offsetX;
        y=e.offsetY; */
        x = ev.changedTouches[0].clientX-drawToolsSection.offsetWidth;
        y = ev. changedTouches[0].clientY-moreToolsSection.offsetHeight;
        //ctx.beginPath();
    }

    drawCtrlZ(i) {
        ctx.beginPath();
        ctx.lineWidth = masterPiece[i][1].lineWidth;
        ctx.strokeStyle = masterPiece[i][1].strokeStyle;
        ctx.rect(masterPiece[i][1].x,masterPiece[i][1].y,masterPiece[i][1].width,masterPiece[i][1].height);
        if(masterPiece[i][1].fillStyle) {
            console.warn(masterPiece[i][1].fillStyle)
            ctx.fillStyle = masterPiece[i][1].fillStyle;
            ctx.fill();
        }
        ctx.stroke();
        ctx.closePath();
        //ctx.beginPath();
    }

    fillColor() {
        masterPiece[masterPiece.length-1][1].fillStyle = color;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
}