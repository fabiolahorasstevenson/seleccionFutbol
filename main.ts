import {Persona} from "./Persona";
import {Futbolista} from "./Futbolista";
import {Masajista} from "./Masajista";
import {Entrenador} from "./Entrenador";

let futbolista1: Futbolista = new Futbolista("Juan","Perez",30202647,"Boca");
let masajista1: Masajista = new Masajista("Jose","Perales",22233445,"Shiatsu");
let entrenado1: Entrenador = new Entrenador("Francisco","Torres",2233445,"Occidental","20 años");

console.log("El apellido del futbolista 1 es: "+futbolista1.getApellido());
console.log("El equipo simpatizante del futbolista 1 es: "+futbolista1.getEquipoSimpatizante());
console.log("Hacer masajes a: "+masajista1.HacerMasajeA(futbolista1));