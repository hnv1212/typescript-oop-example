import { IAudible } from "../../../interfaces/IAudible";

export class CDPlayer implements IAudible {
    public isPlaying: boolean;

    constructor() {
        this.isPlaying = false;
    }

    public turnOn():void {
        console.log("cd player on");
        this.isPlaying = true;
    }

    public playSelection(preset: number):void {
        console.log("cd player selection play: track", preset);
    }

    public turnOff(): void {
        console.log("cd player off");
        this.isPlaying = false;
    }

    public eject():void {
        console.log("cd player eject");
    }
}