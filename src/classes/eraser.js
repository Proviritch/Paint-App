import { masterPiece } from "..";

const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

let x, y;

let erasers = ['eraser'];

export class Eraser {

    draw(e) {
        x = e.changedTouches[0].clientX-25;
        y = e.changedTouches[0].clientY-25;
        ctx.clearRect(x,y,50,50);
    }

    drawEnd() {
            ctx.beginPath();
            erasers.push({
                x: x,
                y: y,
                width: 50,
                height: 50
            });

            masterPiece.push(erasers);

            //console.log(masterPiece);;
    }

    drawStart(ev) {

    }

}