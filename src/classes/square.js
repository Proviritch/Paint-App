import { line } from './pencil.js'
const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');
const ctx2 = playground.getContext('2d');

let x;
let y;
let width;
let height;

let rectangles = [];

export class Square {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }


    shape() {

        ctx.beginPath(); 
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();
/*         ctx.beginPath(); 
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke(); */
    }

    draw(e) {
            //console.log(e.changedTouches[0].clientX);
            /* width=e.offsetX-x;
            height=e.offsetY-y; */
            width = e.changedTouches[0].clientX-x;
            height = e.changedTouches[0].clientY-y;
            //console.log(width, height);
            ctx2.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
            ctx2.lineWidth = 10;
            ctx2.clearRect(0,0,canvas1.width,canvas1.height);
            ctx2.rect(x,y,width,height);
            ctx2.stroke();
        
        /* rectangles.forEach(element => {
            //console.log(x)
                element.shape();
        }) */

    }

    drawEnd() {
        ctx2.clearRect(0,0,canvas1.width,canvas1.height);
        rectangles.push(new Square(x,y,width,height));
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.rect(x,y,width,height);
        ctx.stroke();
        ctx.beginPath();
    }

    drawStart(ev) {
/*      x=e.offsetX;
        y=e.offsetY; */
        x = ev.changedTouches[0].clientX;
        y = ev. changedTouches[0].clientY;
    }
}