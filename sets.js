function jsSet(){
    this.set = {}; //initialise an empty object
    this.size = 0; //initialise the size starting at 0
}

jsSet.prototype.add = function(data){
    if (!(this.set.hasOwnProperty(data))){
        this.set[data] = 'true';
        this.size++;
    }
}

jsSet.prototype.remove = function(data){
    if (this.set.hasOwnProperty(data)){
        delete this.set[data];
        this.size--;
    }
}

var testMySet = new jsSet();
testMySet.add(1);
testMySet.add(2);
testMySet.add(3);
console.log('print testMySet ',testMySet);
console.log('removing 2');
testMySet.remove(2);
console.log('print testMySet ',testMySet);


jsSet.prototype.exists = function(data){
    if (this.set.hasOwnProperty(data)){
        return true;
    } else {
        return false;
    }
}

// testMySet.exists(1);
console.log('check is set with valie 1 exists ',testMySet.exists(1));
//true

var setTwoData = {'12': 'true'};

jsSet.prototype.union = function(setTwo){
    var unionSet = new jsSet();
    for (var key in this.set){
        if (this.set.hasOwnProperty(key)){
            unionSet.add(key);
        }
    }
    for (var key in setTwo.set){
        if (!unionSet.set.hasOwnProperty(key)){
            unionSet.add(key);
        }
    }
    console.log('unionSet is ',unionSet);
    return unionSet;
}


// testMySet.union(12);
console.log('checking union of setTwo ',testMySet.union(setTwoData));

jsSet.prototype.intesect = function(setTwo){
    var interSet = new jsSet();
    for (var key in this.set){
        if (setTwo.set.hasOwnProperty(key)){
            interSet.add(key);
        }
    }
    return interSet;
}

testMySet.intesect(112);
console.log('print testMySet ',testMySet);








