import { masterPiece, color, colorSection, moreToolsSection, drawToolsSection, mineLineWidth } from "..";

const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');
const ctx2 = playground.getContext('2d');

let xI, xF;
let yI, yF;

let rectLine = ['rectLine'];

let hasMoved = false;

export class Line {

    constructor(xI,yI,xF,yF) {
        this.xI = xI;
        this.yI = yI;
        this.xF = xF;
        this.yF = yF;
    }

    draw(eX,eY) {
        hasMoved = true;
        xF = eX-drawToolsSection.offsetWidth;
        yF = eY-moreToolsSection.offsetHeight;

        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        ctx2.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
        ctx2.lineCap = 'round';
        ctx2.strokeStyle = color;
        ctx2.lineWidth = mineLineWidth;
        ctx2.moveTo(xI,yI);
        ctx2.lineTo(xF,yF);
        ctx2.stroke();
    }

    drawEnd() {
        if(hasMoved) {
            hasMoved = false;
            ctx2.clearRect(0,0,canvas1.width,canvas1.height);
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.strokeStyle = color;
            ctx.lineWidth = mineLineWidth;
            ctx.moveTo(xI,yI);
            ctx.lineTo(xF,yF);
            ctx.stroke();
            ctx.closePath();
    
            rectLine.push({
                xI: xI,
                yI: yI,
                xF: xF,
                yF: yF,
                strokeStyle: color ,
                lineWidth: mineLineWidth
            });
    
            masterPiece.push([...rectLine]);
    
            rectLine = ['rectLine'];
        }

    }

    drawStart(evX,evY) {
        xI = evX-drawToolsSection.offsetWidth;
        yI = evY-moreToolsSection.offsetHeight;
    }

    drawCtrlZ(i) {
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineWidth = masterPiece[i][1].lineWidth;
        ctx.strokeStyle = masterPiece[i][1].strokeStyle;
        ctx.moveTo(masterPiece[i][1].xI,masterPiece[i][1].yI);
        ctx.lineTo(masterPiece[i][1].xF,masterPiece[i][1].yF);
        ctx.stroke();
        ctx.closePath();
    }
}
