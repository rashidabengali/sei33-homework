class Node{
    constructor(data, next = null){
        // a Node starts with a given data property
        this.data = data;
        // a Node also has a .next property initialized as null
        this.next = next;
    }
}

class LinkedList{
    constructor(linkList=null){
        // a Linked List starts with a "head" property intialized as null
        this.head = linkList;
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
        const newNode = new Node(data);
        if (this.head){
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = newNode;
        }else{
            this.head = newNode;
        }
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        this.head = new Node(data, this.head);
    }
    pop(){
        // removes the last node from the list and returns it
        if (this.head){
            if (this.head.next === null){
                const result = this.head;
                this.head = null;
                return result; 
            }

            const previous = this.head;
            const tail = this.head.next;
            while (tail.next !== null) {
                previous = tail;
                tail = tail.next;
            }
            previous.next = null;
            return tail;
        } else {
            return null;
        }
    }
    removeFromFront(){
        if (!this.head) {
            return null;
        } 

        // remove the head node from the list and return it
        const nextNode = this.head.next;
        this.head.next = null;

        const firstNode = this.head;
        // the next node in the list is the new head node
        this.head = nextNode;

        return firstNode;
    }
    getAt(index){
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
               return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        if (!this.head){
            this.head = new Node(data);
            return;
        }

        if (X === 0){
            this.prependNode(data);
        }else{
            const index = (X-1);
            const xNode = this.getAt(index);
            if (xNode){
                const newNode = new Node(data, xNode.next);
                xNode.next = newNode;
            }else{
                // if X exceeds the bounds of the list, put the node at the end
                this.appendNode(data);
            }
        }
        
    }
    removeAt(X){
        if (!this.head){
            return null;
        }

        // remove the Xth node from the list, considering 0 to be the first node
        let removeXth;
        if (X === 0){
            const nextHead = this.head.next;
            removeXth = this.head;
            this.head = nextHead;
        
        } else {
            const previousRemoveXth = this.getAt(X-1);
            removeXth = previousRemoveXth.next;
            previousRemoveXth.next = removeXth.next;
            removeXth.next = null;
        }
        // return the node that has been removed
        return removeXth;
    }
    search(data){
        if (!this.head){
            return false;
        }
        // searches the list for a node with the given data
        let node = this.head;
        let index = 0;
        let found = false;
        while (node) {
            // if it is found, return the "index" of the node, considering 0 to be the first node
            if (node.data === data){
                found = true;
                return index;
            }
            node = node.next;
            index++;
        }
        // if not, return false
        return found? index: found;
    }
    merge(l1, l2) {
        const head = new LinkedList();
        let current = head;
    
        while (l1 !== null && l2 !== null) {
            if (l1.data < l2.data) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            
            current = current.next;
        }

        current.next = (l1 === null) ? l2 : l1;
        
        return head.next;
    }
    sortList(head) {
        if (head === null || head.next === null) {
            return head;
        }
        
        let prev = null;
        let slow = head;
        let fast = head;
        
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
    
        // close first half list
        prev.next = null;
        
        const l1 = this.sortList(head);
        const l2 = this.sortList(slow);
        return this.merge(l1, l2);
    }
    sort(){
        this.head = this.sortList(this.head);
    }
}

module.exports = {
    Node,
    LinkedList
}