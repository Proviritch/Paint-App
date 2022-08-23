const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');

let isEraser;
export const line = [];

export class Pencil {
/*     shape(e) {
        console.log('EEHH')
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        line.push({
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
        })        
        
        ctx.lineTo(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
    } */

    start() {
        canvas1.addEventListener('touchmove', e => {
            console.warn(isEraser)
            if(isEraser) {
                console.log('borrar')
                ctx.clearRect(e.changedTouches[0].clientX,e.changedTouches[0].clientY,20,20);
            } else {
                ctx.lineWidth = 10;
                ctx.lineCap = 'round';
    
                line.push({
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                })
                
                ctx.lineTo(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
            }
            //console.log('EEHH')

    });
        //canvas.addEventListener('mousemove', this.shape);
        //console.log('UUUUUH')
    }

    end() {
        //console.log('FIIIN')
        if(isEraser) {
            return
        } else {
            line[line.length-1].beginPath = true;
            ctx.beginPath();
        }

    }

    draw(x) {
        isEraser = x;
        console.log(isEraser)
        //console.log('ahhhh')
        canvas1.addEventListener('touchstart', this.start);
        //canvas.addEventListener('mousedown', this.start);
        canvas1.addEventListener('touchend', this.end);
        //canvas.addEventListener('mouseup', this.end);
    }

}

/* const start = (e) => {
    canvas.addEventListener('touchmove', this.shape);
}

const end = () => {
    ctx.beginPath();
} */

/* const draw = (e) => {
   
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX,e.offsetY);
};

canvas.addEventListener('mousedown', e => {
    canvas.addEventListener('mousemove', draw);
});

canvas.addEventListener('mouseup', () => {
    ctx.beginPath();
    canvas.removeEventListener('mousemove',draw);
}) */