const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');


export const line = [];

export class Pencil {

    draw(e) {

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

    drawEnd() {
        //console.log('FIIIN')
            line[line.length-1].beginPath = true;
            ctx.beginPath();
    }

    drawStart(ev) {
        //console.log('ahhhh')
        //playground.addEventListener('touchstart', this.start);
        //canvas.addEventListener('mousedown', this.start);
        //playground.addEventListener('touchend', this.end);
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