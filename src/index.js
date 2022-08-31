
import { Pencil, Square, Circle, Line, Eraser} from '/src/classes/export_classes.js'
import './styles.css'


export let masterPiece = [];

const colorSection = document.getElementsByClassName('colors_section')[0];

let canvas = document.getElementsByTagName('canvas');
for(let i = 0; i < canvas.length; i++) {
    canvas[i].width = window.innerWidth;
    canvas[i].height = window.innerHeight - colorSection.offsetHeight;
}
const playground = canvas[1];



const strategies = [new Pencil(), new Square(), new Circle(), new Line(), new Eraser()];

class Draw {
    constructor(strategy) {
        this.strategy = strategy;
    }

    changeStrategy(strategy) {
        this.strategy = strategy;
    }

    draw(e) {
        return this.strategy.draw(e);
    }

    drawEnd() {
        return this.strategy.drawEnd();
    }

    drawStart(ev) {
        return this.strategy.drawStart(ev);
    }

    drawCtrlZ(i) {
        return this.strategy.drawCtrlZ(i);
    }

}

const draw = new Draw();

let section = document.querySelector('section');

/* const selectOption = e => {
    
    //draw.changeStrategy(strategies[e]);
    console.log(e);

    playground.addEventListener('touchstart', ev => {
        draw.drawStart(ev);
    })

    playground.addEventListener('touchmove', e => {
        draw.draw(e);
    })

    playground.addEventListener('touchend', () => {
        draw.drawEnd();
        //masterPiece = [... new Set(masterPiece)];
        console.log('Holaaa')
        console.log(masterPiece);
        console.log(e);
    })

} */

let currentStrategy;

section.addEventListener('click', (e) => {

    if(!e.target.hasAttribute('value')) return

    draw.changeStrategy(strategies[e.target.attributes[0].nodeValue]);
    currentStrategy = strategies[e.target.attributes[0].nodeValue]

})

playground.addEventListener('touchstart', ev => {
    draw.drawStart(ev);
})

playground.addEventListener('touchmove', e => {
    draw.draw(e);
})

playground.addEventListener('touchend', () => {
    draw.drawEnd();
    //masterPiece = [... new Set(masterPiece)];
    console.log('Holaaa')
    console.log(masterPiece);
    //console.log(e);
})



const divCtrlZ = document.getElementById('ctrlZ');
const strategiesCtrlZ = [
    ['pencil', new Pencil()],
    ['rectangle', new Square()],
    ['circle', new Circle()],
    ['rectLine', new Line()],
    ['eraser', new Eraser()]
]

const ctx = canvas[0].getContext('2d');


divCtrlZ.addEventListener('click', e => {
    masterPiece.pop();
    ctx.clearRect(0,0,canvas[0].width,canvas[0].height);

    for(let i = 0; i < masterPiece.length; i++) {
        for(let j = 0; j < strategiesCtrlZ.length; j++) {
            if(masterPiece[i][0] === strategiesCtrlZ[j][0]) {
                draw.changeStrategy(strategiesCtrlZ[j][1]);
                draw.drawCtrlZ(i);
            }
        }
    }

    draw.changeStrategy(currentStrategy);
})






