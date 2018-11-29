import { Tree } from './tree';
import { Flower } from './flower';
import { Garden } from './garden';

//garden watering method 

let mainGarden = new Garden('big Garden');

let sunflower = new Flower('yellow');
let forgetMeNot = new Flower('purple');
let monkeyBreadTree = new Tree('orange');
let tree = new Tree('blue');

mainGarden.add(sunflower); // itt is letrehozhatom
mainGarden.add(forgetMeNot);
mainGarden.add(monkeyBreadTree);
mainGarden.add(tree);

mainGarden.show();
mainGarden.watering(40);
mainGarden.show();
mainGarden.watering(70);
mainGarden.show();