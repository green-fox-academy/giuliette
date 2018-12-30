'use strict';
export{};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)


function printParams(a: any, ... b:any[]) { 
    
    console.log(a + " " + b.join(",")); 
 }

printParams(1, "kiskutya", 0, "true");


 /*
function printParams(any):void {
    let a = "brainfart"; 
    let b = "kiscica";
  }
  
  console.log(printParams(a,b));
*/

/*
  var someObject = { str: "Some text", id: 5 };
  console.log(someObject);

  var index = [12, 5, 8, 130, 44].indexOf(8); 
console.log("index is : " + index );
*/