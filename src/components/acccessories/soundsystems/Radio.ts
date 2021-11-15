import { IAudible } from "../../../interfaces/IAudible";

export class Radio implements IAudible {
    public isPlaying: boolean;

    constructor() {
        this.isPlaying = false;
    }

    public turnOn(): void {
        console.log("radio on");
        this.isPlaying = true;
    }

    public playSelection(preset: number): void {
        console.log("radio selection play: channel preset", preset);
    }

    public turnOff(): void {
        console.log("radio off");
        this.isPlaying = false;
    }
}