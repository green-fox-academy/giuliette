'use strict';
export{};

// -  Create variable named `name` and assign the value `Greenfox` to it
let name: string = "Greenfox";

// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

function greet(Hello:string = "whatevs") {
    if(Hello === void 0){
        console.log(greet + Hello);
    }
}

greet(name);
