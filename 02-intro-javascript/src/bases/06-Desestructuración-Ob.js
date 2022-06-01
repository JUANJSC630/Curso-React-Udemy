//Desestructruración de objectos
//Assignation destructuring


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango : 'Marinero'
};

const {
    nombre,
    edad,
    clave
} = persona;

// console.log(nombre);  
// console.log(edad);  
// console.log(clave);  
// console.log(persona.edad);
// console.log(persona2.clave);

// const ReturnPerson = (usuario ) =>{
//     const {nombre , edad , clave} = usuario;

//     console.log(edad, clave, nombre)
// };
const UseContext = ({
    nombre,
    edad,
    clave,
    rango = 'Capitan'
}) => {

    // console.log(nombre, edad , rango);
    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.45245,
            lng: -74.258
        }
    };
};
const avenger = UseContext(persona);

console.log(avenger);

const {
    nombreClave,
    años,
    latlng: {
        lat,
        lng
    }
} = UseContext(persona);

console.log(nombreClave, años);
console.log(lat, lng);