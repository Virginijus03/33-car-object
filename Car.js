
class Car {
    constructor(data) {
        this.carData = data;
    }
    intro() {
        console.log(`This is ${this.carData.brand}.`);
    }
    doorsCount() {
        console.log(`${this.carData.brand} has ${this.carData.doors.length} doors.`);
    }
    doorsWorking() {
        let durysveikiancios = 0;
        for (let i = 0; i < this.carData.doors.length; i++) {
            const durys = this.carData.doors[i];
            if (durys.working === true) {
                ++durysveikiancios;
            }
        }
        if (this.carData.doors.length === durysveikiancios) {
            console.log(`${this.carData.brand} has ${this.carData.doors.length} doors and all works!`);
        } else {
            console.log(`${this.carData.brand} has ${this.carData.doors.length} doors but only ${durysveikiancios}.`);
        }
    }
    maxDistance() {
        let atstumas = Math.round(this.carData.tank.maxSize / this.carData.fuelComsumption * 100);
        console.log(`${this.carData.brand} can travel maximum ${atstumas} km.`);
    }
    canTravel(kelione) {
        let atstumas = Math.round(this.carData.tank.currentSize / this.carData.fuelComsumption * 100);
        if (kelione <= atstumas) {
            console.log(`${this.carData.brand} can travel ${kelione} km.`);
        } else {
            console.log(`${this.carData.brand} can't travel 500 km, it has fuel only for ${atstumas} km.`);
        }
    }
    continueTravel(testiVaziavima) {
        let atstumas = Math.round(this.carData.tank.currentSize / this.carData.fuelComsumption * 100);
        //console.log(atstumas);
        let reikPinigo = (testiVaziavima - atstumas) * (this.carData.fuelCostPerLitre * this.carData.fuelComsumption / 100);
        if (testiVaziavima <= atstumas) {
            console.log(`${this.carData.brand} can travel 50 km, no extra fuel is needed.`);
        } else {
            console.log(`${this.carData.brand} can't travel 500 km, you need ${reikPinigo.toFixed(2)} Euros for extra fuel.`);
        }
    }
}
module.exports = Car;