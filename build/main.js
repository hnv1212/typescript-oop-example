import { Car } from "./components/vehicles/Car";
import { Truck } from "./components/vehicles/Truck";
var Main = /** @class */ (function () {
    function Main() {
        this._compact = new Car(21, 18);
        this._compact.changeGear();
        this._compact.useAccessory();
        this._pickup = new Truck(16, 23);
        this._pickup.changeGear();
        this._pickup.useAccessory();
        this._compact.soundSystem.turnOn();
        this._compact.soundSystem.playSelection(2);
        this._pickup.soundSystem.turnOn();
        this._compact.drive();
        this._pickup.drive();
    }
    return Main;
}());
export { Main };
var main = new Main();
