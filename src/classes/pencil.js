import { masterPiece } from "..";
const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');

const line = ['pecil'];

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
        masterPiece.push(line);
        line[line.length-1].beginPath = true;
        ctx.beginPath();

        console.log(masterPiece);
    }

    drawStart(ev) {
        //console.log('ahhhh')
    }

}
