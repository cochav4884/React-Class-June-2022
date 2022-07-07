const data = [1, 2, 3];
export default data;

export const sayHello = (greeting) => {
    print(greeting);
}

export const read = (text) => {
    print(text);
}

const print = (message) => {
 console.log(message);
}



// export default {
//     data : [1,2,3],
//     hello : () => console.log("Hello World"),
// };

// qualifying each export with export as well as export default {...obj} also worked for me and let me import without a namespace.
