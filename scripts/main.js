console.log('hola');

var number = 10;
const word = 'hola';
let isTrue = true;

let person1 = {
  name: 'Nicolás',
  age: 20,
  cats: 10,
  birthday: function () {
    this.age++;
    console.log(this.age);
  },
};

person1.birthday();
window.setTimeout(person1.birthday, 1000);

function birthday (person) {
  person.age++;
}

birthday(person1);
birthday(person1);
birthday(person1);
birthday(person1);
birthday(person1);
person1.dogs = 1;

let person2 = {
  name: 'Maria Alejandra',
  age: 21,
  horses: 1,
}

birthday(person2);
console.log(person2)

let list = [ 10, 20, 'hola', true ];
list.push(100);

list[1] = 200;

console.log(list);


let students = [
  {
    name: 'adas',
  },
  {
    name: '1231das'
  }
];