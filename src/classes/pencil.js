import { masterPiece, color, colorSection, moreToolsSection, drawToolsSection, mineLineWidth } from "..";
const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

const playground = document.getElementById('playground');

let line = ['pencil'];

export class Pencil {

    draw(eX, eY) {

        ctx.lineWidth = mineLineWidth;
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
    
        line.push({
            x: eX-drawToolsSection.offsetWidth,
            y: eY-moreToolsSection.offsetHeight,
            strokeStyle: color,
            lineWidth: mineLineWidth
        });
                
        ctx.lineTo(eX-drawToolsSection.offsetWidth,eY-moreToolsSection.offsetHeight);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(eX-drawToolsSection.offsetWidth,eY-moreToolsSection.offsetHeight);

    }

    drawEnd() {
        masterPiece.push([...line]);
        line = ['pencil'];
        ctx.closePath();
    }

    drawStart(evX, evY) {
        ctx.beginPath();
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

        ctx.closePath();
    }

}
