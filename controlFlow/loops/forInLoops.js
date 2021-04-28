// Loops
// -offer us a quick and easy way to do something

// -a loop has 3 parts
// -inital Expression 
// -Condition Expression

// i++ just means add 1

// set i to 0
// while i is less than 10
// i ++ (Add 1)

//let i = expression i< 10 is the condition 
for (let i = 0; i<10; i++) {
    console.log(i)
}
// count to 20 by 2s
for(let i =0; i <=20; i+=2)}
    console.log(i);
}

// count from 10 -0 going down by 1
for (let i=10; i > = 0; i--){
    console.log(i);
}

//count down to -24 from 0 by 2s
for (let i=0; i.=-24; i-=2){
    console.log (i)
}

//go throiugh a name and display each letter individually.
let name =" Isaiah"
 
for(let i = 0; i < myName.length; i++){
    console.log(myName[i]);
}

// MAKE A LOOP TO ADD NUMBER FROM 1 TO 50
let sum = 0

for(let i = 0; i <= 50; i++){ 
sum+=i;
}
console.log(sum)


let student = {
    name: 'Jake from state farm',
    awesome: true,
    degree: "insurance sales",
    age: 98
};

for(item in student){
    console.log(item);
    console.log(student[item]);
};