function stackOfBooks(){
    this.top = -1; //Initialised to -1 to indicate no elements
    this.value = []; //Initialised as an empty array.
}

//not using the array push function yet
stackOfBooks.prototype.push = function(book){
    this.top++;
    this.value[this.top] = book;
}

//not using the array pop function yet
stackOfBooks.prototype.pop = function(){
    if (this.top < 0){
        return null;
    }
    var topBook = this.value[this.top];
    this.top--;

    this.value.length--;

    return topBook;
}

//Having a look at which is the top book
stackOfBooks.prototype.look = function(){
    if (this.top < 0){
        return null;
    }
    return this.value[this.top];
}

//testing the above functions
var stack = new stackOfBooks();

for (var i = 0; i <= 20; i+=5){
    console.log('Push ', i);
    stack.push(i);
}

//Looking looking looking...
console.log('Last book is ', stack.look());

//Poping last book added
console.log('Pop last book', stack.pop());

//Looking looking looking...
console.log('Last book is ', stack.look());

//Poping last book added
console.log('Pop last book', stack.pop());

//Looking looking looking...
console.log('Last book is ', stack.look());

//pushing another book
console.log('New book is 100 ', stack.push(100));

//Looking looking looking...
console.log('Last book is now ', stack.look());


