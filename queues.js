function function queueOfShoppers{
    this.head = 0; //Initialised to 0 to indicate the position of the first item, assuming the array contains 1 item.  
    this.data = []; //Initialised as an empty array.
}

//building the enqueue function
queueOfShoppers.prototype.enqueue = function(data){
    this.data.push(data);
}

//building the dequeue function - there will be some memory leak associated with this function, we will discuss this shortly.  
queueOfShoppers.prototype.dequeue = function(){
    if (this.head < 0 || this.head >= this.data.length){
        return null;
    }
    var dequeuedItem = this.data[this.head];
    this.head++;

    return dequeuedItem;
}

//Having a look at which is the item at the front of the queue, similar to the dequeue function but the head doesn't move to the enxt item.  
queueOfShoppers.prototype.look = function(){
    if (this.head < 0 || this.head >= this.data.length){
        return null;
    }
    return this.data[this.head];
}

//testing the above functions
var queue = new queueOfShoppers();
console.log("enqueue 100");
queue.enqueue(100);

console.log("enqueue 200");
queue.enqueue(200);

console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());
console.log('Dequeue: ' + queue.dequeue());

//We are rewriting the dequeue function as the original code leaks memeory.  
//The above funtion never releases the array despite it being removed, the array still holds a reference to the item.  
//All the elements in the array at indexes less than the head are garbage.  
//To fix this we cleanup the array, we do not have to slow down for each dequeue, we cleanup at a certain preset threshhold.  

queue.prototype.dequeue = function(){
    if (this.head < 0 || this.head >= this.data.length){
        return null;
    }

    var dequeuedItem = this.data[this.head];
    this.head++;
    //clean out the garbage at 100 items
    if (this.head === 100){
        this.data.splice(0,100);

        //reset the head
        this.head = 0;
    }
    return dequeuedItem;
};


//We are rewriting the dequeue function as the original code leaks memeory.  
//The above funtion never releases the array despite it being removed, the array still holds a reference to the item.  
//All the elements in the array at indexes less than the head are garbage.  
//To fix this we cleanup the array, we do not have to slow down for each dequeue, we cleanup at a certain preset threshhold.  



