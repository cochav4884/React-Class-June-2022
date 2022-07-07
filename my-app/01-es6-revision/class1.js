import { Animal, Dog} from './class';

const cat = new Animal('Cat', 4);

console.log(cat,type);
console.log(cat,legs);

cat.makeNoise('Meow');

console.log(Animal.returnTen());

console.log(cat.meatData);

const doggy = new Dog('Dog', 4);
console.log(doggy.type, doggy.legs);
doggy.makeNoise();