let item0 = document.getElementById("yellow")
let item1 = document.getElementById("red")
let item2 = document.getElementById("blue")
let item3 = document.getElementById("green")
let item4 = document.getElementById("purple")
let item5 = document.getElementById("orange")

const myArray = [item0, item1, item2, item3, item4, item5]

const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
};


const shuffledArray = [];
// shuffling the array upon button click
const button = document.querySelector(".button");
button.addEventListener("click", () => {
console.log("Button clicked");
const shuffledArray = shuffle(myArray); 
console.log(shuffledArray);
//console.log(shuffledArray[0].id);

let i = 0;
while (i < 6)
    {
        console.log(shuffledArray[i].id);
        document.querySelector('.item'+[i]).style.backgroundColor = shuffledArray[i].id;
        document.querySelector('.item'+[i]).innerText = shuffledArray[i].innerText;
    i++;
    }
    
});



// document.createElement('shuffledArray')

// const gamecard = document.getElementById("gamecard")
 

