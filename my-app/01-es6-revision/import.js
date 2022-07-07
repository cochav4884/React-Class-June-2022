import data, {sayHello, read} from './util.js';

const updatedData = data;
updatedData.push(4);

console.log(data);
console.log(updatedData);

// let x = 5;
// let y = x;
// y=7;

// let data = 'reference'
// [1, 2, 3] ---> 'reference'

// updatedData = data = 'reference'
// updatedData.push(4) = [1, 2, 3, 4] ---> 'reference'

//non primative values have a reference
//primative values have no reference
//research non primative and primative differences!


sayHello('Hellooooo!');
read('Learning JavaScript...');

const importantFunc = () => {
    console.log('Very useful function');
}

export default importantFunc;