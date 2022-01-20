class Student {
  name: string;
  age: number;
  goodStudent: boolean;
  private _hasGF: boolean;
  readonly father: string;
  constructor(name: string, father: string, age: number, isGood: boolean, private hasGF: boolean) {
    this.name = name;
    this.age = age;
    this.goodStudent = isGood;
    this._hasGF = hasGF;
    this.father = father;
  }
}

let student1 = new Student("Adi","Momin", 13, true, false);
console.log(student1);
