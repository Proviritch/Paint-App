import '../css/componentes.css'
//import webpack_image from '../assets/img/hayasaka.jpg' Esto es una forma de trabajar con imágenes(importándolas)
//La creación de la carpeta assetes en dist es otra forma
export const saludar = (name) => {

/*     let img = document.createElement('img');
    img.src = webpack_image;
    document.getElementsByTagName('body')[0].appendChild(img); */

    return `Hola, ${name}!!!`;
}