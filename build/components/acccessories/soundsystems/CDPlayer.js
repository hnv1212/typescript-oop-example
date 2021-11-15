var CDPlayer = /** @class */ (function () {
    function CDPlayer() {
        this.isPlaying = false;
    }
    CDPlayer.prototype.turnOn = function () {
        console.log("cd player on");
        this.isPlaying = true;
    };
    CDPlayer.prototype.playSelection = function (preset) {
        console.log("cd player selection play: track", preset);
    };
    CDPlayer.prototype.turnOff = function () {
        console.log("cd player off");
        this.isPlaying = false;
    };
    CDPlayer.prototype.eject = function () {
        console.log("cd player eject");
    };
    return CDPlayer;
}());
export { CDPlayer };
