import r = require('raylib');
import { Square } from './components/square';

export class Game
{
    //* Your global variables should go here.
    screenWidth: number;
    screenHeight: number;
    title: string;
    targetFPS: number;

    //! Called in main.js when game starts
    constructor(screenWidth: number, screenHeight: number , title: string, targetFPS: number) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.title = title;
        this.targetFPS = targetFPS;

        r.InitWindow(screenWidth, screenHeight, title);
        r.SetTargetFPS(targetFPS);
    }

    //* Your game logic should go here. Don't do any rendering in this function!
    Tick = (): void => {
        if(r.IsKeyPressed(r.KEY_SPACE)) {
            Square.entityList.push(new Square(this.xCenter() - 40, this.yCenter() - 40, Square.randColour(), Square.randAngle()));
        }

        Square.entityList.forEach((element) => {
            //* make each square move in their random direction.
            element.xSpeed = ((5 * element.xBounce) * Math.sin(element.angle));
            element.ySpeed = ((5 * element.yBounce) * Math.cos(element.angle));

            element.position[0] += element.xSpeed;
            element.doXCollision();
            element.position[1] += element.ySpeed;
            element.doYCollision();
        })
    }

    //* This is where you should interact with Raylib's drawing functions.
    Render = (): void => {
        r.BeginDrawing();
        r.ClearBackground(r.WHITE);

        r.DrawFPS(0, 0)
        Square.entityList.forEach((element) => {
            r.DrawRectangle(element.position[0], element.position[1], 40, 40, element.colour)
        })

        r.EndDrawing();
    }

    //* Convenience function.
    isRunning = (): boolean => { return !r.WindowShouldClose(); }

    //* Convenience function. Returns horizontal centre.
    xCenter = (): number => { return (r.GetScreenWidth() / 2); } 

    //* Convenience function. Returns vertical centre.
    yCenter = (): number => { return (r.GetScreenHeight() / 2); }

    //* Handle all your destructions here e.g unloading textures.
    Exit = (): void => {
        Square.entityList.forEach(() => {
            Square.entityList.pop();
        });
        r.CloseWindow();
    }
}