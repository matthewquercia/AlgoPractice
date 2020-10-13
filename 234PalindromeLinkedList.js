/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function List(){
    this.head = null;
}

function ListNode(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

List.prototype.insertNode = function(val){
    var node = new ListNode(val);
    var current;
    if(this.head === null) {
        this.head = node;
    } else {
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
}

List.prototype.viewList = function(){
    var current = this.head;
    while(current.next){
        console.log(current.val);
        current = current.next;
    }
    console.log(current.val);
}

var isPalindrome = function(head) {
    var result = [];
    var current = head;
    if(!current){
        return true;
    }
    while(current.next){
        result.push(current.val);
        current = current.next;
    }
    result.push(current.val);
    return (result.join('') === result.reverse().join('')) ? true : false;
};