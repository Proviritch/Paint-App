const canvas1 = document.getElementById('draws_displayed');
const ctx = canvas1.getContext('2d');

export class Eraser {

    draw(e) {
        ctx.clearRect(e.changedTouches[0].clientX-25,e.changedTouches[0].clientY-25,50,50);
    }

    drawEnd() {
            ctx.beginPath();
    }

    drawStart(ev) {

    }

}