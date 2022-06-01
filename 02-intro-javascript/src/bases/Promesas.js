import {
    getHeroById,
    getHeroesByOwner
} from './bases/08-importaciones-exportaciones'
import {
    heroes
} from './data/heroes';

// // const promesa2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {

// //         const hero = getHeroesByOwner('Marvel');
// //         resolve(hero);
// //     }, 3000);
// // });



// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve();
//         const hero = getHeroById(1);
//         resolve(hero);
//         // reject('No se pudo encontrar el hero');
//     }, 1000);
// });

// promesa.then((hero) => {
//     console.log(hero);
// })
// .catch(e => console.error(e));



const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve();
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject('No se pudo encontrar el hero');
            }

        }, 1000);
    });

}

getHeroByIdAsync(2)
    .then(console.log)
    .catch(console.warn);