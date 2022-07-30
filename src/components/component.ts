/* 
 * This file has an example component for you to use.
 * To use this component, simply create a new .ts file
 * with a class that extends the class below.
 * You don't have to use this if you don't want to, however.
 * Feel free to use Rayframe however you'd like!
 * If you're gonna use an extension of this, however...
 ! Make sure to export the component!
 */ 

export class Component {
    position: [number, number] = [0, 0]
    constructor(x: number, y: number) {
        this.position[0] = x;
        this.position[1] = y;
    }
}