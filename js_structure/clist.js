const Clist = require(__dirname + '/listLib');
console.log(__dirname)
let clist = new Clist();
clist.append(1);
clist.append('fefe');
clist.append('333');
clist.append('44');
clist.append('55');
clist.append('66');
clist.append('77');
clist.append('88');
//移动到第一个位置，显示元素
clist.front();
console.log(clist.getValue());
//获取指定索引的值
console.log(clist.getValue(5));

clist.next();
clist.next();
console.log(clist.getValue());
console.log(clist.find(55));

clist.prev();
console.log(clist.getValue());

let flag = clist.contains('333');
console.log(flag);
console.log(clist.len());
clist.moveTo(clist.len() - 2);
console.log(clist.getValue());
clist.moveTo(-1);
console.log(clist.getValue());