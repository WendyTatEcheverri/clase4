import { crearSeccion1 } from './seccion1.js';
import { crearSeccion2 } from './seccion2.js';
import { crearSeccion3 } from './seccion3.js';

const main = document.querySelector('main');

// Agregar secciones al DOM
main.appendChild(crearSeccion1());
main.appendChild(crearSeccion2());
main.appendChild(crearSeccion3());