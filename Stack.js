class Stack {
  storage = {};
  count = 0;

  push(item) {
    this.storage[this.count] = item;
    this.count++;

    return this.count;
  }

  pop() {
    if(this.count === 0) {
      return;
    }

    const removedItem = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return removedItem;
  }

  peek() {
    return this.storage[this.count - 1];
  }

  length() {
    return this.count;
  }

}

const letsGo = new Stack();

console.log(letsGo.push(1));
console.log(letsGo.push(2));
console.log(letsGo.push(3));
console.log(letsGo.pop());
console.log(letsGo.length());
console.log(letsGo.peek());

