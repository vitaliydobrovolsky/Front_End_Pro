const user = {
    id: 1,
    firstName: 'Carl',
    lastName: 'Fin',
    age: 30,
    livingPlace: 'London',
      sayPersonInfo() {
        console.log(user)
      }
  };
user.sayPersonInfo()


 // const person1 = Object.create(person);  
  //console.log(person1)

  /*const personObj = Object.entries(person).reduce((acc, [key, value]) => {
    return {...acc, [value.id]: value}
  }, {});

  console.log(personObj)*/