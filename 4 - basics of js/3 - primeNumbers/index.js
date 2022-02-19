function isPrime(number){
       for(let i = 2; i < number; ++i){
              if (number % i === 0){
                     return false;
              }
       }
       return true;
}

let input = readline();
let strNumbers = input.split(" ");
let array = strNumbers.map(number => parseInt(number));
array = array.filter(isPrime);
console.log(array.join(" "));