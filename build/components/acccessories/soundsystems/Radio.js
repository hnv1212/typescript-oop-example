var Radio = /** @class */ (function () {
    function Radio() {
        this.isPlaying = false;
    }
    Radio.prototype.turnOn = function () {
        console.log("radio on");
        this.isPlaying = true;
    };
    Radio.prototype.playSelection = function (preset) {
        console.log("radio selection play: channel preset", preset);
    };
    Radio.prototype.turnOff = function () {
        console.log("radio off");
        this.isPlaying = false;
    };
    return Radio;
}());
export { Radio };
