// For of Loops

// iterate over the values of an iterable Objects (string and arrays included
    
//     this does not work because the properties are not "iterable")
let student = {
    name: "Jake from state farm",
    awesome: true,
    degree: "insurance sales",
    age:98
    };

    // for(item of student{
    //     console.log(item);
    // }

    let soupArray =['potato','broccoli', 'carrot', 'chicken noodle', 'chili']
    for(soup of soupArray){
        console.log(soup);
    }
        // forIn loops work on objects and for of works on arrays
    