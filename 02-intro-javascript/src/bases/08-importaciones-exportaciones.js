// import {
//     heroes
// } from './data/heroes';
//imp

import {
    heroes,
    owners
} from "../data/heroes";
// console.log(owners)
//array.find 
const getHeroById = (id) => {
    return heroes.find(heroes => heroes.id === id);
}

// console.log(getHeroById(2));

//array.filter
const getHeroesByOwner = (owner) => {
    return heroes.filter(heroes => heroes.owner === owner);
}

// console.log(getHeroesByOwner('Marvel'));


export {
    getHeroById,
    getHeroesByOwner
}