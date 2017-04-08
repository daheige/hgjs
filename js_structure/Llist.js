/**
 * [Llist js链表的实现,单向链表]
 * 数组添加元素和删除元素很麻烦，需要将数组向前或向后移动
 * 在js中数组被实现成了对象，和其他语言相比，效率很低
 *链表在开始有个节点，称为头节点，依次向后指向，链表的最后一个元素指向null
 */
function Node(ele){ //创一个节点，他的下一个节点是null
    this.ele = ele;
    this.next = null;
}
function Llist(ele){
    this.head = new Node(ele);//头节点
}
Llist.prototype.find = function (item){ //查找节点
    let currNode = this.head;
    while(currNode.ele != item){
        currNode = currNode.next;
    }
    return currNode;
}
Llist.prototype.insert = function (newEle,item){
    let newNode = new Node(newEle);//创建新节点，作为当前节点的指向
    let cur = this.find(item);
    newNode.next = cur.next; //当前节点的下一个节点
    cur.next= newNode;
}
Llist.prototype.findPrev= function(item){
    let currNode = this.head;
    //当前节点指向下一个节点不是null,当前节点下一个节点不是item
    while(!(currNode.next == null) && currNode.next.ele != item){
        currNode = currNode.next;
    }
    return currNode;
}
//删除一个节点
Llist.prototype.remove = function (item){
    let prevNode = this.findPrev(item);
    if(!(prevNode.next == null)){
        prevNode.next = prevNode.next.next;
        return true;
    }
    return false;
}
Llist.prototype.display = function(){
    let currNode = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.ele);
        currNode = currNode.next;
    }
}

let cities = new Llist('head');
cities.insert('conway','head');
cities.insert('daheige','conway');
cities.insert('gege','daheige');
cities.display();
//移除节点daheige
cities.remove('daheige');
cities.display();