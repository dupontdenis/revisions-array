const { data } = require("./data");

// nb films
// console.log(data.length)

// Ajout box "nombre.toLocaleString()""

// data.forEach((film) => film.gain = film.box.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }))
//  console.log(data)

// films ordre alphab
const sort = data.sort((filmA, filmB) => filmA.nom > filmB.nom ? 1 : -1);
// console.log(sort);

// les films de dir 1
const filmsDir1 = data.filter(({ dir }) => dir.toLowerCase() == "dir 1")
// console.log(filmsDir1);

//en parametre PAS DE F(X) FLECHEE
const dir = { dir : "dir 3" }

const filmsDir3 = data.filter( function({ dir }) {
  return (dir.toLowerCase() == this.dir.toLowerCase()) }, dir)
// console.table(filmsDir3)

const gain = data.reduce( (acc, {box}) => acc+box,0 );
// console.log(`les gains = ${gain.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}`)

// les catégories
dirs = data.reduce((acc, { dir }) => {
    if (!acc.includes(dir)) acc.push(dir)
    return acc
}, []);
// console.log(`les dirs = ${dirs.join( ", ")} `)

// nb de films / dir
const nbFilmsByDir = data.reduce((a, { dir }) => {
    ( !a[dir] ) ? a[dir] = 1 : a[dir] += 1
    return a;
}, {});
// console.table(nbFilmsByDir);

// nb de films / dir
const nbFilmsByDir_V2 = data.reduce((a, { dir }) => {
    a[dir] = (a[dir] || 0 ) + 1
    return a;
}, {});
// console.table(nbFilmsByDir_V2);

// trie
const max = Object.entries(nbFilmsByDir).sort( (dirA,dirB) => dirA[1] > dirB[1] ? -1 : 1)[0];
//console.log(max);

// films / catégorie
const filmsOfDir = data.reduce((a, { dir, nom }) => {
    if (!a[dir]) a[dir] = [];
    a[dir].push(nom)
    return a;
}, {});
// console.table(filmsOfDir);

 // films / box
const prixByDir = data.reduce((a, { dir, box }) => {
    if (!a[dir]) a[dir] = [];
    a[dir].push(box)
    return a;
}, {});

// console.table(prixByDir)

const addition = Object.entries(prixByDir).map(([dir, box]) => {
    return {
        director: dir,
        total: box.reduce( (acc,cur) => acc+cur )
    }
})
//  console.table(addition)

// film/total
//version direct
const totalByDir = data.reduce((a, { dir, box }) => {
    a[dir] = (a[dir] || 0) + box;
    return a;
}, {} );
console.table(totalByDir)
// console.log(Object.keys(totalByDir))
// console.log(Object.values(totalByDir))
// console.log(Object.entries(totalByDir))
// console.log(`total = ${Object.values(totalByDir).reduce( (acc, v) => acc+v,0 )} `)