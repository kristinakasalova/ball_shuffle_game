let item1 = document.getElementById("yellow")
let item2 = document.getElementById("red")
let item3 = document.getElementById("blue")
let item4 = document.getElementById("green")
let item5 = document.getElementById("purple")
let item6 = document.getElementById("orange")

const myArray = [item1, item2, item3, item4, item5, item6]

const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
};

const shuffledArray = [];

const button = document.querySelector(".button");
button.addEventListener("click", () => {
console.log('Button clicked');
const shuffledArray = shuffle(myArray); 
console.log(shuffledArray);
});

document.createElement('shuffledArray')

const gamecard = document.getElementById("gamecard")
 

document.replaceChild(shuffledArray, gamecard)