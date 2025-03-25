const removeFromArray = function(arr,...borrar) {
  let nuevoArr=[]
  let indice=0
  for(let i=0;i<arr.length;i++){
    let prueba=0
    for(let j=0;j<borrar.length;j++){
      if(arr[i]===borrar[j]){
        prueba+=1
      }
    }
    if(prueba===0){
      nuevoArr[indice]=arr[i]
      indice+=1
    }
  }
  return nuevoArr
};

console.log(removeFromArray([1,2,3,4],2,3))

// Do not edit below this line
module.exports = removeFromArray;
