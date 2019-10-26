class Queue {
    constructor(){
        this.queue = [];
    }
  
    enqueue(elem) {
        this.queue.unshift(elem)
    }

    dequeue() {
        if (this.queue.length === 0) {
            throw new Error("there nothing to dequeue in your queue!")
        }

        return this.queue.pop()
    }

    isEmpty() {
        return this.queue.length === 0
    }

    peek() {
        if (this.queue.length === 0) {
            throw new Error("there nothing inside your queue!")
        }

        return this.queue[this.queue.length - 1]
    }

    get length() {
        return this.queue.length
    }


}
  
  
const myQueue = new Queue(); 
  
myQueue.enqueue("Add 300gr of flour");
myQueue.enqueue("Add 3 eggs");
myQueue.enqueue("Add 60Cl of milk");
myQueue.enqueue("Add 50gr of melt butter");
myQueue.enqueue("Add two cups of sugar");
myQueue.enqueue("A little bit of rhum (because we are pirates!)");
myQueue.enqueue("Wait one hour");
myQueue.enqueue("Drink it! or bake it, like you want");
  
while(!myQueue.isEmpty()){
    console.log(myQueue.dequeue());
}