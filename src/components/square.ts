import * as r from "raylib";
import { Component } from "./component";

export class Square extends Component {

    colour: r.Color = r.WHITE;
    angle: number
    xSpeed: number = 0;
    ySpeed: number = 0;

    xBounce: number = 1;
    yBounce: number = 1;

    static entityList: Square[] = [];

    static colourList: r.Color[] = [r.LIGHTGRAY, r.GRAY, r.DARKGRAY, r.YELLOW, r.GOLD, r.ORANGE, r.PINK, r.RED, r.MAROON, r.GREEN, r.LIME,
    r.DARKGREEN, r.SKYBLUE, r.BLUE, r.DARKBLUE, r.PURPLE, r.VIOLET, r.DARKPURPLE, r.PURPLE, r.BEIGE, r.BROWN, r.DARKBROWN, r.MAGENTA, r.BLACK];

    constructor(x: number, y:number, colour: r.Color, angle: number) {
       super(x, y);
       this.angle = angle;
       this.colour = colour;
    }

    doXCollision = (): void => {
        if(this.position[0] >= 760 || this.position[0] <= 0) {
            this.xBounce *= -1;
        }
    }

    doYCollision = (): void => {
        if(this.position[1] >= 410 || this.position[1] <= 0) {
            this.yBounce *= -1;
        }
    }

    static randAngle = (): number => {
        return Math.floor(Math.random() * 360) + 1;
    }

    static randColour = (): r.Color => {
        const col = Math.floor(Math.random() * 23); // rand between 0 and 22
        
        return this.colourList[col];
    }
}