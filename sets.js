function jsSet(){
    this.set = {}; 
    this.size = 0; //initialise the size starting at 0
    var items = {};
}

jsSet.prototype.add = function(data){
    if (!(this.set.hasOwnProperty(data))) {
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

var testMy1stSet = new jsSet();
testMy1stSet.add(1);
testMy1stSet.add(2);
testMy1stSet.add(3);
console.log('print testMy1stSet ',testMy1stSet);
console.log('removing 2');
testMy1stSet.remove(2);
console.log('print testMy1stSet ',testMy1stSet);



var testMy2ndSet = new jsSet();
console.log('ading data to testMy2ndSet ');
testMy2ndSet.add(11);
testMy2ndSet.add(3);
testMy2ndSet.add(13);
console.log('print testMy2ndSet ',testMy2ndSet);

jsSet.prototype.exists = function(data){
    if (this.set.hasOwnProperty(data)){
        return true;
    } else {
        return false;
    }
}

// testMySet.exists(1);
// console.log('check is set with valie 1 exists for first set',testMySet.exists(1));
//true
// console.log('check is set with valie 13 exists for 2nd set',testMy2ndSet.exists(13));
//true

// var setTwoData = {12: 'true'};

jsSet.prototype.union = function(setTwo){
    var unionSet = new jsSet();
    for (var key in this.set){
        if (this.set.hasOwnProperty(key)){
            console.log('1st testMy2ndSet  is ', this.set, 'testMy2ndSet.key',key);
            unionSet.add(key);
        }
    }
    for (var key in setTwo){
        if (!unionSet.set.hasOwnProperty(key)){
            console.log('testMy1stSet is ', setTwo, 'testMy1stSet key is ', key);
            unionSet.add(key);
        }
    }
    console.log('result unionSet is ',unionSet);
    return unionSet;

}





 // testMySet.
 testMy2ndSet.union(testMy1stSet);
// console.log('checking union of setTwo ',testMySet.union(testMy2ndSet));

// jsSet.prototype.intesect = function(setTwo){
//     var interSet = new jsSet();
//     for (var key in this.set){
//         if (setTwo.set.hasOwnProperty(key)){
//             interSet.add(key);
//         }
//     }
//     return interSet;
// }

testMySet.intesect(112);
console.log('print testMySet ',testMySet);

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


