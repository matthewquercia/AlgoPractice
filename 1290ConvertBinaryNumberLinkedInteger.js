/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    var result = "";

    var current = head;
    while(current.next !== null){
        result += current.val.toString();
        current = current.next;
    }
    result += current.val.toString();

    return parseInt(result, 2);
};


// Used to test code

// List.prototype.getDecimalValue = function() {
//     var result = "";

//     var current = this.head;
//     while(current.next !== null){
//         result += current.val.toString();
//         current = current.next;
//     }
//     result += current.val.toString();

//     return parseInt(result, 2);
// };

// function List(){
//     this.head = null;
// }

// function Node(val){
//     this.val = val;
//     this.next = null;
// }

// List.prototype.addNode = function(val){
//     var newNode = new Node(val);
//     if(this.head === null){
//         this.head = newNode;
//     } else {
//         let current = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }

//         current.next = newNode;
//     }
// }

// List.prototype.displayList = function(head){
//     let current = this.head;
//     console.log(current.val);
//     while(current.next !== null){
//         current = current.next;
//         console.log(current.val);
//     }
// }


