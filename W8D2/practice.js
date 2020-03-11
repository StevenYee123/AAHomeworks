function madLib(verb, adjective, noun){
    console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`);
}

// madLib("make", "best", "guac");

function isSubstring(string, subString){
    return string.includes(subString);
}

// console.log(isSubstring("time to program", "time")); //true  
// console.log(isSubstring("Jump for joy", "joys"));  //false 

arr = [1,2,3,4,5,6]
function fizzBuzz(arr){
    var return_arr = []
    arr.forEach(element => {
        if ((element % 3 === 0) ^ (element % 5 === 0)){
            return_arr.push(element)
        }
    });
    return return_arr
}

// console.log(fizzBuzz(arr));

function isPrime(num){
    if (num < 2) { return false; }
    for(let i = 2; i < num - 1; i++){
        if (num % i === 0) {return false;}
    }
    return true;
}

// console.log(isPrime(4));
// console.log(isPrime(13));

function firstNPrimes(n){
    const prime_nums = [];
    var i = 2;
    while (prime_nums.length < n){
        if (isPrime(i)) {
            prime_nums.push(i);
            i++;
        } else {
            i++;
        }
    }

    return prime_nums;
}

console.log(firstNPrimes(3));