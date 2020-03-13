// const readLine = require('readline');

// const reader = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function teaAndBiscuits(){
//     let first, second;

//     reader.question("Would you like some tea? ", (firstRes) => {
//         console.log(`I'll take that as a ${firstRes}`);

//         reader.question("How about some biscuits?", (secondRes) => {
//             console.log(`I'll take that as a ${secondRes}`);
//             first = firstRes;
//             second = secondRes;
//             const first = (first === 'yes') ? 'do' : 'don\'t';
//             const second = (second === 'yes') ? 'do' : 'don\'t';
//         });
//     });

//     console.log(`So you ${first} want some tea, and ${second} want some biscuits`);
//     reader.close();
// }

// teaAndBiscuits();

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {
  reader.question("Would you like some tea?", function(res) {

    console.log(`You replied ${res}.`);

    reader.question("Would you like some biscuits?", function(res2) {

      console.log(`You replied ${res2}.`);
      const first = res === "yes" ? "do" : "don't";
      const second = res2 === "yes" ? "do" : "don't";

      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();
    });
  });
}

// teaAndBiscuits(); 

function Cat() {
  this.name = "Markov";
  this.age = 3;
}

function Dog() {
  this.name = "Noodles";
  this.age = 4;
}

Dog.prototype.chase = function(cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const Markov = new Cat();
const Noodles = new Dog();

Noodles.chase(Markov);
Noodles.chase.call(Noodles, Markov);
Noodles.chase.apply(Markov, [Noodles]);