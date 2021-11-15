var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { TireType } from "../../constants/TireType";
import { CDPlayer } from "../acccessories/soundsystems/CDPlayer";
import { Tire } from "../acccessories/Tire";
import { Vehicle } from "./Vehicle";
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(mpg, fuel) {
        var _this = _super.call(this, mpg, fuel) || this;
        _this.name = "Car";
        _this._tires = new Tire(TireType.HIGH_PERFORMANCE);
        _this.soundSystem = new CDPlayer();
        console.log(_this.name, "has", _this._tires.getType(), "tires");
        return _this;
    }
    Car.prototype.useAccessory = function () {
        this.openSunroof();
    };
    Car.prototype.openSunroof = function () {
        console.log(this.name, "opened sunroof");
    };
    return Car;
}(Vehicle));
export { Car };
