const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(sumandos) {
  if(sumandos.length===0){
    return 0
  }else{
  let total=sumandos.reduce((contador,elemento)=>{
    return contador+elemento},0)
	return total
  }
};

const multiply = function(factores) {
  return factores.reduce((acumulador, elemento)=>{
    return acumulador*elemento
  },1)

};

const power = function(a,b) {
	let acumulador=1
  for(let i=0;i<b;i++){
    acumulador=acumulador*a
  }
  return acumulador
};

const factorial = function(f) {
	if(f===0){
    return 1
  }else{
    let acumulador=1
    for(let i=1;i<=f;i++){
      acumulador=acumulador*i
    }
    return acumulador
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
