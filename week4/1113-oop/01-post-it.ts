// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class postIt {
  backgroundColor: string;
  text: string;
  textcolor: string;
  constructor(bgC: string, txt: string, txtC: string){
    this.backgroundColor = bgC;
    this.text = txt;
    this.textcolor = txtC;
  }
}

 //var object_name = new class_name([ arguments ])
var postItNoteOne = new postIt ('orange','Idea 1','blue');
var postItNoteTwo = new postIt ('pink', 'awesome', 'black');
var postItNoteThree = new postIt ('yellow', 'Superb!', 'green')

console.log(postItNoteOne);
console.log(postItNoteTwo);
console.log(postItNoteThree);