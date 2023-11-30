// Car Class

// class Car {
//     constructor(make, model){
//         this.make = make;
//         this.model = model;
//     }

//     drive(){
//         console.log("Vroom!")
//     }
// }

//create car object

// const myCar = new Car('Toyota', 'C-HR');
// console.log(myCar.make);
// myCar.drive();

// class Circle {
//     constructor(radius){
//         this._radius = radius;
//         // _radius = private, so need getters and setters
//     }

//     get radius() {
//         return this._radius;
//     }

//     set radius(radius){
//         this._radius = radius;
//     }
//Methods
//     calculateArea(){
//         return Math.PI * this._radius ** 2;
//     }
// }

//create circle object

// const circle = new Circle(5);
// console.log("Radius: ", circle.radius);
// console.log("Area: ", circle.calculateArea());

//new radius using setter
// circle.radius = 7;

// console.log("Radius: ", circle.radius);
// console.log("Area: ", circle.calculateArea());


class BankAccount{
    constructor(balance){
        if (this.constructor === BankAccount){
            throw new TypeError("Cannot construct Abstract instance directly");
        }
        this.balance = balance;
    }
    //need, in js, to add an error for trying to instantiate abstract class

    //Abstract methods - leave blank besides error message, will be required and defined by any class that extends abstract super class
    deposit(amount) {
        throw new TypeError("Do not directly call abstract method deposit");
    }

    withdraw(amount){
        throw new TypeError("Do not directly call abstract method withdraw");
    }

    // Concrete methods

    calculateInterestRate(){
        console.log("The interest rate is 5%");
    }
}

//create a Concrete Sub/child class that uses abstract class 

class SavingsAccount extends BankAccount {
    constructor(balance, interestRate) {
        // call super/parent class constructor
        super(balance);
        //call as normal
        this.interestRate = interestRate;
    }

    //implement abstract methods from superclass

    deposit(amount) {
        this.balance += amount + (amount * this.interestRate) / 100;
    }

    withdraw(amount){
        //check for sufficient funds
        if (amount <= this.balance) {
            this.balance -= amount
        }
        else {
            console.log("NOT ENOUGH MONEY soz");
        }
    }
}

//CREATE saving account

const savingsAccount = new SavingsAccount(1000, 5);

console.log("Balance: £", savingsAccount.balance)

//deposit funds

savingsAccount.deposit(500);
console.log("Balance: £", savingsAccount.balance);

savingsAccount.withdraw(1000);
console.log("Balance: £", savingsAccount.balance);
// attempt to create abstract class

// const account = new BankAccount(1000);
// account.withdraw(50);

//doesn't work as we have a protective error.