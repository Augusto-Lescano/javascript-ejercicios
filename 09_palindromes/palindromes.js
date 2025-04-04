const palindromes = function (string) {
  let original=string.split('')
  let originalFiltered=original.filter(
    (item)=>{
      if((item!=='!'&& item!=='¡'&& item!==',' && item!==' ' && item!==';' && item!=='.' && item!=='?' && item!=='¿')===true){
        return true;
      }else{
        return false;
      }
  })


  let compare=[]
  let indice=0
  for(let i=originalFiltered.length-1;i>=0;i--){
    compare[indice]=originalFiltered[i]
    indice++
  }

  compare=compare.join()
  originalFiltered=originalFiltered.join()

  if(originalFiltered.toLowerCase()===compare.toLowerCase()){
    return true
  }else{
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
