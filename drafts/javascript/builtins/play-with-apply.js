function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.fullName = function fullName() {
    return this.first + ' ' + this.last;
}

Person.prototype.fullNameReversed = function fullName() {
    return this.last + ' ' + this.first;
}

let bill = new Person('Bill', 'Oswald');
console.log(bill);

function trivialNew(constructor, ...args) {
    let o = {};
    constructor.apply(o, args);
    return o
}

let ivan = trivialNew(Person, 'Ivan', 'Suroegin');
console.log(ivan);
