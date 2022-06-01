//Desestructuración de arrays


const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);


const ReturnArray = () => {
    return ['ABC', 123];
}

const [Letras, numeros] = ReturnArray();

console.log(Letras, numeros);


//Tarea 
//1. el primer valor del arr se llamara nombre
//2. se llamara SetNombre
const UsarState = (valor) => {
    return [valor, () => {
        console.log('Hola mundo')
    }];
}

const [nombre, SetNombre] = UsarState('Goku');
console.log(nombre);
SetNombre();