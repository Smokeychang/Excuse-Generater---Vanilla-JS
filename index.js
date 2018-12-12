let generateExcuse =() => {
    
let who  = ['The dog ','My grandmother ','His turtle ','My bird '];
let what = ['ate ','pissed ','came ','cried '];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let whoInd  = Math.floor(Math.random()*who.length);
let whatInd = Math.floor(Math.random()*what.length);
let whenInd = Math.floor(Math.random()*when.length);

let fullExcuse = who[whoInd] + what[whatInd] + when[whenInd];

document.getElementById('excuse').innerHTML = fullExcuse;

var buttons = document.getElementById('excuse-btn');
};