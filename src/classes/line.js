
const canvas4 = document.getElementById('canvas4');
const ctx = canvas4.getContext('2d');

let xI, xF;
let yI, yF;

let lines = [];

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

    drawLineModel(e) {
        xF = e.changedTouches[0].clientX;
        yF = e.changedTouches[0].clientY;

        ctx.clearRect(0,0,canvas4.width,canvas4.height);
        ctx.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
        ctx.lineWidth = 10;
        ctx.moveTo(xI,yI);
        ctx.lineTo(xF,yF);
        ctx.stroke();

        lines.forEach(x => {
            x.shape();
        })
    }

    draw() {
        canvas4.addEventListener('touchstart', e => {
            xI = e.changedTouches[0].clientX;
            yI = e. changedTouches[0].clientY;

            canvas4.addEventListener('touchmove', this.drawLineModel);
        })

        canvas4.addEventListener('touchend', () => {
            lines.push(new Line(xI,yI,xF,yF));
            ctx.beginPath();
        })
    }

}
