import r = require('raylib');

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
        
    }

    //* This is where you should interact with Raylib's drawing functions.
    Render = (): void => {
        r.BeginDrawing();
        r.ClearBackground(r.RAYWHITE);

        r.DrawFPS(0, 0)
        r.DrawText("Congrats! You created your first rayframe window!", 135, 200, 20, r.LIGHTGRAY)

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
        r.CloseWindow();
    }
}