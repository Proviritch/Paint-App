import { masterPiece, colorSection, moreToolsSection, drawToolsSection } from "..";

const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

let x, y;

let erasers = ['eraser'];
let erasersAux = [];

export class Eraser {

    draw(e) {
        x = e.changedTouches[0].clientX-drawToolsSection.offsetWidth-25;
        y = e.changedTouches[0].clientY-moreToolsSection.offsetHeight-25;
        ctx.clearRect(x,y,50,50);
        erasersAux.push({
            x: x,
            y: y,
            width: 50,
            height: 50
        });
        //masterPiece.push([...erasers]);

        //erasers = ['eraser'];
    }

    drawEnd() {
        ctx.beginPath();
        erasers.push([...erasersAux]);
        masterPiece.push([...erasers]);
            
        erasersAux = [];
        erasers = ['eraser'];
            //console.log(masterPiece);;
    }

    drawStart(ev) {

    }

    drawCtrlZ(i) {
        for(let k = 0; k < masterPiece[i][1].length; k++) {
            ctx.clearRect(masterPiece[i][1][k].x,masterPiece[i][1][k].y,50,50);
        }
    }

}