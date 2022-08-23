import { line } from './pencil.js'
const canvas2 = document.getElementById('canvas2');
const ctx = canvas2.getContext('2d');

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

    drawRectModel(e) {
            //console.log(e.changedTouches[0].clientX);
            /* width=e.offsetX-x;
            height=e.offsetY-y; */
            width = e.changedTouches[0].clientX-x;
            height = e.changedTouches[0].clientY-y;
            //console.log(width, height);
            ctx.beginPath(); //IMPORTANTÍSIMO EL BEGINPATH
            ctx.lineWidth = 10;
            ctx.clearRect(0,0,canvas2.width,canvas2.height);
            ctx.rect(x,y,width,height);
            ctx.stroke();
        
        rectangles.forEach(element => {
            //console.log(x)
                element.shape();
        })

    }

    draw() {
        canvas2.addEventListener('touchstart', e => {
/*             x=e.offsetX;
            y=e.offsetY; */
            x = e.changedTouches[0].clientX;
            y = e. changedTouches[0].clientY;
            canvas2.addEventListener('touchmove', this.drawRectModel);
        });
        
        canvas2.addEventListener('touchend', () => {
            rectangles.push(new Square(x,y,width,height));
            ctx.beginPath();
        })
    }
}