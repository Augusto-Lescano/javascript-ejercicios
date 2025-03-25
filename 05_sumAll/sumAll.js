const sumAll = function(n1,n2) {
  let suma=0
  if(n1>=0 && n2>=0){
    if(Number.isInteger(n1)===true && Number.isInteger(n2)===true){
      if(n1>n2){
        let cambio
        cambio=n2
        n2=n1
        n1=cambio
      }
      for(let i=n1;i<=n2;i++){
        suma+=i
      }
      return suma
    }else{
      return 'ERROR'  
    }
  }else{
    return 'ERROR'
  }
};

// Do not edit below this line
module.exports = sumAll;
