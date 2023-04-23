function parimp(n) {
  if(n % 2 == 0) {
    return "par!"
  } else{
    return "impar!"
  }
} 
const result = parimp(11 - 1)


function soma(n1, n2){
  return n1 + n2
}

const res = soma(18,18)


const v = (x) => {
  return x * 5
}


function fatorial(n) {
  let fat = 1

  for(let c = n; c > 1; c--) {
    fat *= c
  }
  return fat
}

//RECURSIVIDADE
function fatorial(n) {
  if (n == 1){
    return 1
  } else {
    return n * fatorial(n-1)
  }
}
console.log(fatorial(5))

/* 

5! = 5 X 4 X 3 X 2 X 1
5! = 5 X 4!

n! = n x (n-1)
1! = 1

*/