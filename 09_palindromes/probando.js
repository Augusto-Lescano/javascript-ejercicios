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
  let compare=originalFiltered.reverse()
  compare=compare.join()
  originalFiltered=originalFiltered.join()
  if(originalFiltered.toLowerCase()===compare.toLowerCase()){
    return true
  }else{
    return false
  }
};

console.log('ZZZZ car, a man, a maracaz.')



