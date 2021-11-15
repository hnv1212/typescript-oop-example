export interface IAudible {
    isPlaying: boolean;
    turnOn():void;
    playSelection(preset:number):void;
    turnOff():void;
}