const findTheOldest = function(people) {
for(let i=0;i<people.length;i++){
  if('yearOfDeath' in people[i]===true){
    people[i].age=people[i].yearOfDeath-people[i].yearOfBirth
  }else{
    people[i].yearOfDeath=(new Date()).getFullYear()
    people[i].age=people[i].yearOfDeath-people[i].yearOfBirth
  }
}
let theOldest=people[0]
for(let i=1;i<people.length;i++){
  if(theOldest.age<people[i].age){
    theOldest=people[i]
  }
}
return theOldest
};

// Do not edit below this line
module.exports = findTheOldest;
