console.log("this is tutorial 7");

function greet(name, greettext){
    // let name1 ="name1"; it is local variable. it only exists in the bracket.
     console.log(name + " is a good boy ");
     console.log(greettext + " " + name);
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never execute (unreachable code)
    // console.log("functioned is returned");
}
let name = "banti";
let name1 = "savindr";
let name2 = "abhay";
let name3 = "rahul";
let greettext = "good morning";
greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3, greettext);
// let returnval = greet(name3);
// console.log(returnval);


 let returnval = sum(1,2,3);
 console.log(returnval);


// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");