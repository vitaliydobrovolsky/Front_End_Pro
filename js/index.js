/*let skill = {
    name: 'html',
    level: 5,
    answer: function() {
        return '${this.name} - ${this.level}' ;
            }        
}


console.log(skill.answer())*/

/*function foo () {
    console.log(this)
}

const obj = {
    name: 'Jhon',
    age: 12,
    adress: {
        foo,
        city: 'London',
        state: 'Lol',
    },
    foo,
}

const fooObj = obj.adress.foo.bind({city: 'panda'})
fooObj()*/


/*function User(name, age) {
      this.name = name;
      this.age = age;
      this.getAge = function() {
        return this.age
      }
      this.setAge = function(value) {
        this.age = value
      }
}


const user = new User('Bob', 22);
const user2 = new User('Anna', 18);

    console.log(user)
    console.log(user2)*/


    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.getPlus = function(value){
           return this.num1 + this.num2 
        }
        this.getMinus = function(value2) {
          return this.num1 - this.num2 ;
        }
    }

    const calculator = new Calculator(1,2)
    const calculator2 = new Calculator(5,7)

    console.log(calculator)
    console.log(calculator2)
