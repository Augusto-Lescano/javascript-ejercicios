const repeatString = function(str, num) {
  if(num<0){
    return 'ERROR'
  }else{

    let repeated=''
    for(let i=0;i<num;i++){
      repeated=repeated+str
    }
    return repeated
  }
};

// Do not edit below this line
module.exports = repeatString;
