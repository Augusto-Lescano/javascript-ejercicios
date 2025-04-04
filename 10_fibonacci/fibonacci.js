const fibonacci = function(position) {
  position=parseInt(position,10)
  if(position===0){
    return 0
  }else if(position<0){
    return 'OOPS'
  }else{
    let fiboNumbers=[1,1]
    for(let i=0;i<position-2;i++)
      fiboNumbers.push(fiboNumbers[i]+fiboNumbers[i+1])
    return fiboNumbers[position-1]
  }
};

// Do not edit below this line
module.exports = fibonacci;
