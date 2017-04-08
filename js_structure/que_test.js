const Queue = require(__dirname+'/queue');
let q = new Queue();
q.enter(1);
q.enter(23);
q.enter("fe");
q.enter("daheige");
q.enter("myhg");
console.log(q.toString());
console.log(q.outer()); //1
q.enter(12);
console.log(q.back());
console.log(q.front());//23