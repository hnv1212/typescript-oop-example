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
import { Radio } from "../acccessories/soundsystems/Radio";
import { Tire } from "../acccessories/Tire";
import { Vehicle } from "./Vehicle";
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(mpg, fuel) {
        var _this = _super.call(this, mpg, fuel) || this;
        _this.name = "Truck";
        _this._tires = new Tire(TireType.SNOW);
        _this.soundSystem = new Radio();
        console.log(_this.name, "has", _this._tires.getType(), "tires()");
        return _this;
    }
    Truck.prototype.useAccessory = function () {
        _super.prototype.useAccessory.call(this);
        this.lowerTailgate();
    };
    Truck.prototype.lowerTailgate = function () {
        console.log(this.name, "lowered tailgate");
    };
    return Truck;
}(Vehicle));
export { Truck };
