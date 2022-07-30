import * as r from "raylib";
import { Component } from "./component";

export class Square extends Component {
    colour: r.Color = r.WHITE;
    static entityList: Square[] = [];
    constructor(x: number, y:number, colour: r.Color ) {
       super(x, y);
       this.colour = colour;
    }

    static randColour = (): r.Color => {
        const col = Math.floor(Math.random() * 23) + 1 // rand between 1 and 23
        
        //* this code sucks, ik, but no other way to do it
        switch(col) {
            case 1:  return r.LIGHTGRAY;
            case 2:  return r.GRAY;
            case 3:  return r.DARKGRAY;
            case 4:  return r.YELLOW;
            case 5:  return r.GOLD;
            case 6:  return r.ORANGE;
            case 7:  return r.PINK;
            case 8:  return r.RED;
            case 9:  return r.MAROON;
            case 10: return r.GREEN;
            case 11: return r.LIME;
            case 12: return r.DARKGREEN;
            case 13: return r.SKYBLUE;
            case 14: return r.BLUE;
            case 15: return r.DARKBLUE;
            case 16: return r.PURPLE;
            case 17: return r.VIOLET;
            case 18: return r.DARKPURPLE;
            case 19: return r.BEIGE;
            case 20: return r.BROWN;
            case 21: return r.DARKBROWN;
            case 22: return r.MAGENTA;
            case 23: return r.BLACK;
            // we never want to return raywhite, white or transparent.
        }
    }
}