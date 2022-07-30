//! THE ONLY THING YOU SHOULD REALLY CHANGE HERE IS THE CONSTRUCTOR.
//! OTHERWISE, LEAVE THIS FILE BE!

// Importing all the main functions from game.js.
import G = require("./game");

/*
* Instantiating new game object. 
* ARG 1 -  SCREEN WDITH
* ARG 2 -  SCREEN HEIGHT
* ARG 3 -  WINDOW TITLE
* ARG 4 -  TARGET FPS
*/
const g = new G.Game(800, 450, "Rayframe Demo", 60);

// Main game loop. The functions here are explained more in game.js.
while(g.isRunning()) {
    g.Tick();
    g.Render();
}

g.Exit();

