import { TireType } from "../../constants/TireType";
var Tire = /** @class */ (function () {
    function Tire(tire) {
        switch (tire) {
            case TireType.SNOW:
                this._type = "storm-ready snow";
                break;
            case TireType.HIGH_PERFORMANCE:
                this._type = "high-performance radial";
                break;
            case TireType.ECONOMICAL:
            default:
                this._type = "economical bias-ply";
        }
    }
    Tire.prototype.getType = function () {
        return this._type;
    };
    Tire.prototype.setType = function (tire) {
        this._type = tire;
    };
    return Tire;
}());
export { Tire };
