function fibonacci(n){
       if ((n===1) || (n===0))
              return n;
       else
              return (fibonacci(n-1) + fibonacci(n-2));
}

const number = readline();
let i=0;
let fib = [];
while(i<number){
       fib.push(fibonacci(i));
       i++;
}

console.log(fib.join(", "));