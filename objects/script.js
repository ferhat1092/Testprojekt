let myObject = {
    'name': 'Flo',
    'age': 45,
    'job': 'dev-mentor',
    'good_guy': true
};


console.log(Object.keys(myObject));

let objKeys = Object.keys(myObject);
let ourArr = [];

for (let i = 0; i < objKeys.length; i++) {
    ourArr.push(objKeys[i]); 
};

console.log(ourArr);






console.log(myObject.good_guy);

let objKey = 'name';

console.log(myObject[objKey]);


