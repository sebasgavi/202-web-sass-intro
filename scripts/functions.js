
function laFuncion () {
  console.log('dentro de laFuncion');
}

laFuncion();

function sum (a, b) {
  return a + b;
}

const equis = function () {
  console.log('equis');
}

equis();


const list = [ 1, 2, 5, 10, 300 ];

function handleForEach (value, index) {
  console.log('hola', value);
}

list.forEach(handleForEach);


function handleFilter (value, index) {
  if(value > 10){
    return true;
  } else {
    return false;
  }
}
let listFiltered = list.filter(handleFilter);
console.log(listFiltered);
console.log(list);



const persons = [
  {
    name: 'Sofi',
    age: 23,
  },
  {
    name: 'Jaime',
    age: 20,
  },
  {
    name: 'Juan',
    age: 19,
  },
];

let personFound = persons.find(function (value, index, arr) {
  if(value.age == 22) {
    return true;
  }
});

console.log(personFound);