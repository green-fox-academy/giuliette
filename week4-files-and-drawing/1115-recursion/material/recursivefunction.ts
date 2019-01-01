class Greeter {
  static fact: number;
  fact = 1;
  constructor() {
  }

  factorial(num: number): number {
    if (num > 0) {
      this.fact = this.fact * num;
      this.factorial(num - 1);
    }
    return this.fact;
  }
}

window.onload = () => {
  var fact: number, num: number;
  num = parseInt(prompt("Enter a number"));
  var greeter = new Greeter();
  fact = greeter.factorial(num);
  alert("Factorial of a number is->" + fact);
};