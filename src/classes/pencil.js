import { masterPiece, color, colorSection, moreToolsSection, drawToolsSection, mineLineWidth } from "..";
const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');

let line = ['pencil'];

export class Pencil {

    draw(e) {

        ctx.lineWidth = mineLineWidth;
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
    
        line.push({
            x: e.changedTouches[0].clientX-drawToolsSection.offsetWidth,
            y: e.changedTouches[0].clientY-moreToolsSection.offsetHeight,
            strokeStyle: color,
            lineWidth: mineLineWidth
        });
                
        ctx.lineTo(e.changedTouches[0].clientX-drawToolsSection.offsetWidth,e.changedTouches[0].clientY-moreToolsSection.offsetHeight);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.changedTouches[0].clientX-drawToolsSection.offsetWidth,e.changedTouches[0].clientY-moreToolsSection.offsetHeight);

    }

    drawEnd() {
        //console.log('FIIIN')
        masterPiece.push([...line]);
        line = ['pencil'];
        ctx.closePath();
        //console.log(masterPiece);
    }

    drawStart(ev) {
        //console.log(ev);
        ctx.beginPath();
        //console.log('ahhhh')
    }

    drawCtrlZ(i) {
        ctx.beginPath();
        for(let k = 0; k < masterPiece[i].length; k++) {
            //
            ctx.lineWidth = masterPiece[i][k].lineWidth;
            ctx.strokeStyle = masterPiece[i][k].strokeStyle;
            ctx.lineCap = 'round';
            ctx.lineTo(masterPiece[i][k].x,masterPiece[i][k].y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(masterPiece[i][k].x,masterPiece[i][k].y);
            
        }

        //ctx.beginPath();
        ctx.closePath();
    }

}
