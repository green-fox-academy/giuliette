class Pizza {
  static create(incomingParameter: {name: string, toppings: string[]}) {
    return {
      name: incomingParameter.name,
      toppings: incomingParameter.toppings,
    };
  }
}

const Pizza1 = nwe Pizza.create({
  name: 'Pepperoni',
  toppings: ['cheese', 'ketchup stuff'],
});

