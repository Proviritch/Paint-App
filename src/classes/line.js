import { masterPiece } from "..";

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

    shape() {
        ctx.beginPath(); 
        ctx.moveTo(this.xI,this.yI);
        ctx.lineTo(this.xF,this.yF);
        ctx.stroke();
    }

    draw(e) {
        hasMoved = true;
        xF = e.changedTouches[0].clientX;
        yF = e.changedTouches[0].clientY;

        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        ctx2.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
        ctx.lineCap = 'butt';
        ctx2.lineWidth = 10;
        ctx2.moveTo(xI,yI);
        ctx2.lineTo(xF,yF);
        ctx2.stroke();

        /* lines.forEach(x => {
            x.shape();
        }) */
    }

    drawEnd() {
        if(hasMoved) {
            hasMoved = false;
            ctx2.clearRect(0,0,canvas1.width,canvas1.height);
            //lines.push(new Line(xI,yI,xF,yF));
            ctx.beginPath();
            ctx.lineCap = 'butt';
            ctx.lineWidth = 10;
            ctx.moveTo(xI,yI);
            ctx.lineTo(xF,yF);
            ctx.stroke();
            ctx.beginPath();
    
            rectLine.push({
                xI: xI,
                yI: yI,
                xF: xF,
                yF: yF 
            });
    
            masterPiece.push([...rectLine]);
    
            rectLine = ['rectLine'];
        }

    }

    drawStart(ev) {
        xI = ev.changedTouches[0].clientX;
        yI = ev.changedTouches[0].clientY;
    }

    drawCtrlZ(i) {
        ctx.beginPath();
        ctx.lineCap = 'butt';
        ctx.lineWidth = 10;
        ctx.moveTo(masterPiece[i][1].xI,masterPiece[i][1].yI);
        ctx.lineTo(masterPiece[i][1].xF,masterPiece[i][1].yF);
        ctx.stroke();
        ctx.beginPath();
    }

}
