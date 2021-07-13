class CarRental {
    constructor(companyName) {
        this.list = [];
        this.companyName = companyName;

    }
    intro() {
        let carCount = this.list.length;
        console.log(`Hi, we are ${this.companyName} and we have ${carCount} cars avalible.`);
    }
    addCar(name, color, price) {
        this.list.push({ name, color, price });

    }
    carPark() {
        for (let i = 0; i < this.list.length; i++) {
            const object = this.list[i];
            console.log(
                `${i + 1}. ${object.name}(${object.color} is for ${object.price} EUR per day.)`
            )
        }

    }
    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice
        console.log(this.list);
    }

    carAccident(index) {
        this.list[index].working = false;
    }

    carRepair(index) {
        this.list[index].working = true;
    }

    removeCar(index) {
        const updatedCarList = []

        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (index !== i) {
                updatedCarList.push(car)
            }

        }
        this.list = updatedCarList;
    }
}


module.exports = CarRental;