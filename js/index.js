class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.marks = [];
        this._presence = new Array(25);
        this._current = 0;
    }

    get age() {
        return new Date().getFullYear() - this.year;
    }

    get summary() {
        let count = 0,
            sum = this.marks.reduce((a, b) => { ++count; return a + b; }, 0);
        return count ? sum / count : 0;
        
    }

    present(mark) {
        if (this._current === this._presence.length)
            throw new RangeError(`${this.firstName} ${this.lastName} уже закончил сессию.`);
          // alert(`month completed, max 25 days`)
        this.marks[this._current] = mark;
        this._presence[this._current++] = true;
    }
    absent() {
        if (this._current === this._presence.length)
          //  alert(`month completed, max 25 days`)
        throw new RangeError(`${this.firstName} ${this.lastName} уже закончил сессию.`);
        this._presence[this._current++] = false;
    }

    get visitSummary() {
        let count = 0,
            sum = this._presence.reduce((x, y) => { ++count; return x + y }, 0);
            return count ? sum / count : 0;
        
    }

    
    get studentAsses() {
        if (this.summary.toFixed(1) >= 90 && this.visitSummary >= 0.9) {
            alert(`Very Good ${this.firstName} ${this.lastName}`)
        
        } else if (this.summary.toFixed(1) < 90 && this.visitSummary < 0.9){
            alert(`So sad ${this.firstName} ${this.lastName}`)
        } else  {
            alert(`Good, but can be better ${this.firstName} ${this.lastName}`)
        }
    }
    
   
}

let student = new Student("Vitaliy", "Dobrovolsky", 1986);
console.log(student.age);

student.present(100);
student.present(90);
student.present(90);
student.present(100);
student.present(90);
student.absent();
student.present(100);
student.present(90);
student.present(100);
student.present(80);
student.absent(100);
student.present(80);
student.present(80);
student.present(10);
student.present(100);
student.present(90);
student.present(100);
student.present(90);
student.present(70);
student.present(90);
student.present(90);
student.present(90);
student.present(90);
student.present(90);



    
//studentAsses()

console.log(student.summary.toFixed(1));
console.log(student.visitSummary.toFixed(1));
console.log(student._presence);
console.log(student.studentAsses);

let student2 = new Student("Galina", "Dobrovolska", 1990);
console.log(student2.age);

student2.present(100);
student2.present(90);
student2.absent();
student2.present(100);
student2.present(90);
student2.present(80);
student2.present(100);
student2.absent();
student2.present(100);
student2.present(80);
student2.absent(40);
student2.present(40);
student2.present(80);
student2.absent();
student2.present(100);
student2.absent();
student2.present(100);
student2.present(90);
student2.present(80);


console.log(student2.summary.toFixed(1));
console.log(student2.visitSummary.toFixed(1));
console.log(student2._presence);
console.log(student2.studentAsses);
