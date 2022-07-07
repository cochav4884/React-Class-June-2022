//Non template literal
const word1 = 'Corinne';
const word2 = 'Padilla';

let fullName = word1 + '' + word2;
console.log('full name using none template literal: ', fullName);

let returnToNewLine = 'Learn \n React.js is \n really goooooood!';
console.log(returnToNewLine);

//Template Literal
fullName = `${word1} ${word2}`;
console.log('full name using none template literal: ', fullName);

returnToNewLine = `Learn React.js is really goood!`;
console.log('Return to the new line using template literal: ', returnToNewLine);
