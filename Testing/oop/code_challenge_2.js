// task 1 

// class User {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
    
//     hello() {
//       return "hello";
//     }  
//   }

// const user1 = new User('John', 'Doe');
// console.log(user1.greet(), user1.firstname, user1.lastname);

// const user2 = new User('Jane', 'Doe')
// console.log(user2.greet(), user2.firstname, user2.lastname);



// task 2

// class User {
//     constructor(firstname, lastname){
//         this._firstname = firstname;
//         this._lastname = lastname;
//     }

//     get firstname(){
//         return this._firstname;
//     }

//     set firstname(newFirstname){
//         this._firstname = newFirstname;
//     }

//     get lastname(){
//         return this._lastname;
//     }

//     set lastname(newLastname){
//         this._lastname = newLastname;
//     }

//     greet(){
//         return `Hello World!
//         My name is ${this.firstname} ${this.lastname}`;
//     }
// }

// const user = new User('Harry', 'Lauder');

// console.log(user.firstname, user.lastname);
// user.firstname = 'Caroline';
// user.lastname = 'Quentin';
// console.log(user.firstname, user.lastname); 
// console.log(user.greet());


// task 3

// class User{
//     constructor(username){
//         this.username = username;
//     }

//     get username(){
//     return this.username  
//     }

//     set username(newUsername){
//         this.username = newUsername;
//     }
// }

// class Admin extends User{
//     constructor(username){
//         super(username);
//     }

//     expressYourRole(){
//         return 'Admin'
//     }

//     sayHello(){
//         console.log(`Hello admin, ${this.username}`);
//     }
// }

// const admin = new Admin('Balthazar');
// admin.sayHello()

// task 4 polymorphism

// class User {
//     constructor() {
//       this._numberOfArticles = 0;
//     }
  

//     get numberOfArticles() {
//         return this._numberOfArticles;
//     }

//     set numberOfArticles(numberOfArticles) {
//         this._numberOfArticles = numberOfArticles;
//     }

//     calcScores(){
//         console.log(`The user has written ${this.numberOfArticles} articles.`)
//     }
//   }

// class Author extends User{
//     constructor(){
//         super();
//     }
//     calcScores(){
//         return this.numberOfArticles * 10 + 20;
//     }
// }

// class Editor extends User{
//     constructor(){
//         super();
//     }
//     calcScores(){
//         return this.numberOfArticles * 6 + 15;
//     }
// }

// const author = new Author();
// author.numberOfArticles = 8;
// console.log(author.calcScores());

// const editor = new Editor();
// editor.numberOfArticles = 15;
// console.log(editor.calcScores());

//task 5 abstraction

class User{
    constructor(username){
        if (this.constructor === User) {
            throw new TypeError('Cannot construct Abstract instances directly.')
        }

    this._username = username;
    }

    stateYourRole(){

    }

    get username(){
        return this._username;
    }

    set username(username){
        this._username = username;
    }
}

class Admin extends User{
    constructor(username){
        super(username);
    }
    
    stateYourRole(){
        return 'admin'
    }
}

class Viewer extends User{
    constructor(username){
        super(username);
    }
    
    stateYourRole(){
        return 'viewer'
    }
}

const admin = new Admin;
admin.username = 'Balthazar';
console.log(admin.stateYourRole());

const viewer = new Viewer;
viewer.username = 'Melchior';
console.log(viewer.stateYourRole());