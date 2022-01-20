"use strict";
class Student {
    constructor(name, father, age, isGood, hasGF) {
        this.hasGF = hasGF;
        this.name = name;
        this.age = age;
        this.goodStudent = isGood;
        this._hasGF = hasGF;
        this.father = father;
    }
}
let student1 = new Student("Adi", "Momin", 13, true, false);
console.log(student1);
