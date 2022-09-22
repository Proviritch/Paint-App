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

    draw(eX, eY) {
            width = eX-drawToolsSection.offsetWidth-x;
            height = eY-moreToolsSection.offsetHeight-y;
            ctx2.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
            ctx2.lineWidth = mineLineWidth;
            ctx2.strokeStyle = color;
            ctx2.clearRect(0,0,canvas1.width,canvas1.height);
            ctx2.rect(x,y,width,height);
            ctx2.stroke();
    }

    drawEnd() {
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        ctx.beginPath();
        ctx.lineWidth = mineLineWidth;
        ctx.strokeStyle = color;
        ctx.rect(x,y,width,height);
        ctx.stroke();

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
    }

    drawStart(evX, evY) {
        x = evX-drawToolsSection.offsetWidth;
        y = evY-moreToolsSection.offsetHeight;
    }

    drawCtrlZ(i) {
        ctx.beginPath();
        ctx.lineWidth = masterPiece[i][1].lineWidth;
        ctx.strokeStyle = masterPiece[i][1].strokeStyle;
        ctx.rect(masterPiece[i][1].x,masterPiece[i][1].y,masterPiece[i][1].width,masterPiece[i][1].height);
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