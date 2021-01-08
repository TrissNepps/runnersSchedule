let raceNumber = Math.floor(Math.random()*1000);
let register = true;
let runnerAge = 9;

if (register === true && runnerAge >= 18 || register === false && runnerAge >= 18){
  console.log(raceNumber += 1000);
} else {console.log(raceNumber)};

if (register === true && runnerAge >= 18){
  console.log(`Your race number is ${raceNumber}. Your group will race at 930 am.`);
} else if (register === false && runnerAge >= 18){
  console.log(`Your race number is ${raceNumber}. Your group will race at 11 am.`);
} else if (runnerAge < 18){
  console.log(`Your race number is ${raceNumber}. Your group will race at 1230 pm.`);
} else {console.log('error')};
