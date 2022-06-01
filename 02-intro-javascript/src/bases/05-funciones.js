const saludar = function (nombre) {
    return `hola ${nombre}`;
};

const saludar2 = (nombre) => {
    return `hola ${nombre}`;
};

const saludar3 = (nombre) => `hola ${nombre}`;

const saludar4 = () => `hola mundo`;
// console.log(saludar('Goku'));

const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'El_tramas'
    });
//tarea 
//1. Transformar a funcion de flecha
//2. tiene que retornar un objeto implisito
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC123456',
        username: 'Juan123'
    }
};

//Resultado
const GetUsuarioActivo = (nombre) => ({
    uid: 'ABC123456',
    username: nombre
});





const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
console.log(saludar('goku'));
console.log(saludar2('vegeta'));
console.log(saludar3('broly'));
console.log(saludar4());

console.log(getUser());
console.log(GetUsuarioActivo('Mario'));