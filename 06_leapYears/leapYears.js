const leapYears = function(anio) {
  if(anio%4===0){
    if(anio%100 !== 0){
      return true
    }else if(anio%400===0){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
};

// Do not edit below this line
module.exports = leapYears;
