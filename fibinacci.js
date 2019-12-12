const fibseq = [1,1,2,3,5,8,13];

const fib = (num) => {
  if(num <= 1) return 1;
  
  console.log(num)

  return fib(num-1) + fib(num-2);

}

console.log(fib(6));