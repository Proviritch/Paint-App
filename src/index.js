//import { saludar } from './js/componentes';
/* import { Pencil } from './classes/pencil';
import { Square } from './classes/square'; */
import { Pencil, Square, Circle, Line } from '/src/classes/export_classes.js'
import './styles.css'
//import { Circle } from './classes/circle';

let canvas = document.getElementsByTagName('canvas');
for(let i = 0; i < canvas.length; i++) {
    canvas[i].width = window.innerWidth;
    canvas[i].height = window.innerHeight;
}
const playground = canvas[1];



let strategies = [new Pencil(), new Square(), new Circle(), new Line()];

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

}

const draw = new Draw();

let section = document.querySelector('section');

const selectOption = (option) => {

    section.children[option].addEventListener('click', e => {
        draw.changeStrategy(strategies[e.target.attributes[0].nodeValue]);

        playground.addEventListener('touchstart', ev => {
            draw.drawStart(ev);
            playground.addEventListener('touchmove', e => {
                draw.draw(e);
            })
        })

        playground.addEventListener('touchend', e => {
            draw.drawEnd();
        })

        
    })
}


section.addEventListener('click', (e) => {
    //console.log(!e.target.hasAttribute('value'))
    if(!e.target.hasAttribute('value')) return

    //Free drawing
    selectOption(0);
    //Square drawing
    selectOption(1);
    //Circle drawing
    selectOption(2);
    //Line drawing
    selectOption(3);
    //Eraser
    selectOption(4);

})




