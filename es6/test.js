'use strict';

//es6功能：區塊範圍的"let"宣告
const sentences = [
  {subject: 'JavaScript', verb: 'is', object: 'great'},
  {subject: 'Elephants', verb: 'are', object: 'large'},
];

//es6功能：物件解構
function say({subject,verb,object}){
  //es6功能：範本字串
  console.log(`${subject} ${verb} ${object}`);
}

//es6功能：for..of
for (let s of sentences) {
  say(s)
}
