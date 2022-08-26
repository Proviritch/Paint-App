import { masterPiece } from "..";
const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');

let line = ['pecil'];

export class Pencil {

    draw(e) {

        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
    
        line.push({
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY
        });

        if(line[2]) {
            if((line[line.length-1].x === line[line.length-2].x) && (line[line.length-1].y === line[line.length-2].y)) line.pop();
        } 
                
        ctx.lineTo(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.changedTouches[0].clientX,e.changedTouches[0].clientY);

    }

    drawEnd() {
        //console.log('FIIIN')
        //line = [... new Set(line)];
        masterPiece.push(line);
/*         line = ['pencil'];
        if(line[line.length-1] === 'pencil') line.pop(); */
        //line[line.length-1].beginPath = true;
        ctx.beginPath();

        //console.log(masterPiece);
    }

    drawStart(ev) {
        //console.log('ahhhh')
    }

}
