
import { Pencil, Square, Circle, Line, Eraser} from '/src/classes/export_classes.js'
import './styles.css'


export let masterPiece = [];

export const colorSection = document.querySelector('.colorSection');
export const moreToolsSection = document.querySelector('.moreToolsSection');
export const drawToolsSection = document.querySelector('.drawToolsSection');


let canvas = document.getElementsByTagName('canvas');
for(let i = 0; i < canvas.length; i++) {
    canvas[i].width = window.innerWidth - drawToolsSection.offsetWidth;
    canvas[i].height = window.innerHeight - colorSection.offsetHeight - moreToolsSection.offsetHeight;
}
const playground = document.getElementById('playground');


//Drawing option section
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

let currentStrategy;

drawToolsSection.addEventListener('click', (e) => {

    if(!e.target.hasAttribute('value')) return
    console.log('asjkdaskjadhkas')
    draw.changeStrategy(strategies[e.target.attributes[0].nodeValue]);
    currentStrategy = strategies[e.target.attributes[0].nodeValue]

})

playground.addEventListener('touchstart', ev => {
    console.log('aaaaa')
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


//CtrlZ section
const divCtrlZ = document.getElementById('ctrlZ');
const strategiesCtrlZ = [
    ['pencil', new Pencil()],
    ['rectangle', new Square()],
    ['circle', new Circle()],
    ['rectLine', new Line()],
    ['eraser', new Eraser()]
]

const drawsDisplayed = document.getElementById('draws_displayed');
const ctx = drawsDisplayed.getContext('2d');


divCtrlZ.addEventListener('click', e => {
    masterPiece.pop();
    ctx.clearRect(0,0,drawsDisplayed.width,drawsDisplayed.height);

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

//Color section
export const colorObject = {
    black: 'black',
    gray: 'gray',
    white: 'white',
    crimson: 'crimson',
    red: 'red',
    orangered: 'orangered',
    orange: 'orange',
    gold: 'gold',
    yellow: 'yellow',
    lime: 'lime',
    limegreen: 'limegreen',
    green: 'green',
    springgreen: 'springgreen',
    cyan: 'cyan',
    deepskyblue: 'deepskyblue',
    blue: 'blue',
    mediumslateblue: 'mediumslateblue',
    magenta: 'magenta',
    hotpink: 'hotpink'
}

export let color = colorObject.black;

colorSection.addEventListener('click', e => {
    if(e.target.className !== 'color') return

    color = colorObject[e.target.id];
    console.log(color);
})


//Slide bar 

const slideBar = document.getElementById('slide_bar');
slideBar.width = 100;
slideBar.height = 20;
const ctxSB = slideBar.getContext('2d');

export let mineLineWidth = 10;

const drawSlideBar = (x) => {
    ctxSB.clearRect(0,0,slideBar.offsetWidth, slideBar.offsetHeight);
    ctxSB.lineWidth = 5;
    ctxSB.moveTo(0,slideBar.height/2);
    ctxSB.lineTo(x,slideBar.height/2);
    ctxSB.stroke();
    ctxSB.beginPath();
    ctxSB.ellipse(x,slideBar.height/2,10,10,0,Math.PI*2,false);
    ctxSB.fill();
    ctxSB.beginPath();
}

drawSlideBar(slideBar.width/2);


slideBar.addEventListener('touchstart', e => {
    //console.log(e.changedTouches[0].clientX);
    if(e.changedTouches[0].clientX-40 < 90 && e.changedTouches[0].clientX-40 > 10) {
        drawSlideBar(e.changedTouches[0].clientX-40);
        mineLineWidth = (e.changedTouches[0].clientX-40)/5;
    }
})

slideBar.addEventListener('touchmove', e => {
    //console.log(e.changedTouches[0].clientX-40);
    if(e.changedTouches[0].clientX-40 < 90 && e.changedTouches[0].clientX-40 > 10) {
        drawSlideBar(e.changedTouches[0].clientX-40);
    }
    /* mineLineWidth = mineLineWidth > 20 ? mineLineWidth = 20 : 
                    mineLineWidth < 0 ? mineLineWidth = 1 : 
                    (e.changedTouches[0].clientX-40)/5; */
    mineLineWidth = (e.changedTouches[0].clientX-40)/5;
    if(mineLineWidth > 20) mineLineWidth = 20;
    else if (mineLineWidth < 0) mineLineWidth = 1;
    console.log(mineLineWidth);
})

//console.log(mineLineWidth);







