import { Tree } from './tree';
import { Flower } from './flower';
import { Garden } from './garden';

//garden watering method 

let mainGarden = new Garden('big Garden', 0);

let sunflower = new Flower('yellow', 0, 9);
//console.log(sunflower.whatType());
let forgetMeNot = new Flower('blue', 0, 4);

let monkeyBreadTree = new Tree('orange', 4, 5);
let tree = new Tree('blue', 2, 23);

//console.log(sunflower.getState() + ' szomjas');
mainGarden.add(sunflower);
mainGarden.add(forgetMeNot);
mainGarden.add(monkeyBreadTree);
mainGarden.add(tree);
//console.log(mainGarden);

mainGarden.watering();
