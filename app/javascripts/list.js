var Node = require("./node.js");

function List(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

List.prototype.push = function(value){
	if(this.head === null){
		this.head = new Node(value);
		this.tail = this.head;
	} else {
		var oldTail = this.tail
		this.tail.next = new Node(value);
		this.tail = this.tail.next;
		this.tail.setPrevious(oldTail)
	}
	this.length += 1;
	return this;
};

List.prototype.pop = function(){
	if(this.head === null){
		return null;
	} else if (this.tail === this.head) {
			this.head = null;
			this.tail = null;
		} else {
		this.tail = this.tail.previous();
		this.tail.next = null;
		
	}
	
};

List.prototype.getIndex = function(index){

};

List.prototype.setIndex = function(index, value){
	if(this.head === null){
		this.head = new Node(value);
		this.tail = this.head;
	}

};

List.prototype.shift = function(){
	if(this.head === null){
		return null;
	} else if (this.tail === this.head) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.setPrevious(null);
	}
	
 };


List.prototype.unshift = function(value) {
	if (this.head === null) {
		this.head = new Node(value);
		this.tail = this.head;
	} else {
		var oldHead = list.head;
	}

};

List.prototype.insert = function(index, value) {
    if (this.head === null) {
        this.head = this.tail;
        this.value = value;
    } else {

        var currentNode = this.head;
        var newNode = new Node(value);
        if (index === 0) {
            this.head.next = this.head;
            this.head.next.setPrevious(newNode);
            this.head = newNode;
        }
        for (var i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        newNode.setPrevious(currentNode);
        newNode.next.setPrevious(newNode);

        if (index === this.length) {
            this.tail.setPrevious(this.tail);
            this.tail.next = newNode;
            this.tail = newNode;
            newNode.setPrevious(null);
        }
    }
};



try {
  module.exports = List;
} catch(e){

}
