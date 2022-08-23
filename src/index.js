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



let strategies = [new Pencil(), new Square(), new Circle(), new Line()];

class Draw {
    constructor(strategy) {
        this.strategy = strategy;
    }

    changeStrategy(strategy) {
        this.strategy = strategy;
    }

    draw() {
        return this.strategy.draw();
    }

}

const draw = new Draw();

let section = document.querySelector('section');

const selectOption = (option) => {
    section.children[option].addEventListener('click', e => {
        draw.changeStrategy(strategies[e.target.attributes[0].nodeValue]);
        draw.draw();
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

/*     //Free drawing
    section.children[0].addEventListener('click', e => {
        //console.log('grrrrrrrrrrrrr')
        for(let i = 0; i < canvas.length; i++) {
            //canvas[i].classList.remove('selected');
            canvas[i].classList.add('notSelected');
        } 
        canvas[0].classList.remove('notSelected');
        //canvas[0].classList.add('selected');
    
        draw.changeStrategy(strategies[e.target.attributes[0].nodeValue]);
        draw.draw();
    })
    
    //Squares drawing
    section.children[1].addEventListener('click', e => {
        //console.log('brrrrrrrrrrrrr')
        for(let i = 0; i < canvas.length; i++) {
            //canvas[i].classList.remove('selected');
            canvas[i].classList.add('notSelected');
        } 
        canvas[1].classList.remove('notSelected');
        //canvas[1].classList.add('selected');
    
        draw.changeStrategy(strategies[e.target.attributes[0].nodeValue]);
        //console.log(strategies[e.target.attributes[0].nodeValue]);
        draw.draw();
    })

    //Circles drawing
    section.children[2].addEventListener('click', e => {
        for(let i = 0; i < canvas.length; i++) {
            //canvas[i].classList.remove('selected');
            canvas[i].classList.add('notSelected');
        } 
        canvas[2].classList.remove('notSelected');
        //canvas[1].classList.add('selected');
    
        draw.changeStrategy(strategies[e.target.attributes[0].nodeValue]);
        //console.log(strategies[e.target.attributes[0].nodeValue]);
        draw.draw();
    })

    //Lines drawing
    section.children[3].addEventListener('click', e => {
        for(let i = 0; i < canvas.length; i++) {
            //canvas[i].classList.remove('selected');
            canvas[i].classList.add('notSelected');
        } 
        canvas[3].classList.remove('notSelected');
        //canvas[1].classList.add('selected');
    
        draw.changeStrategy(strategies[e.target.attributes[0].nodeValue]);
        //console.log(strategies[e.target.attributes[0].nodeValue]);
        draw.draw();
    }) */



})




