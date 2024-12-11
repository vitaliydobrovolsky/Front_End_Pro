class Coach {
    constructor(coachname, type, rate) {
        this.coachname = coachname;
        this.type = type;
        this.rate = rate;
    }

    displayInfo() {
        return (`${this.coachname},  ${this.type},  ${this.rate}`)
    }    
}
   
   const coach1 = new Coach('John Doe', 'Fitness', 4.7);   
   const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);   
  console.log(coach1.displayInfo());    
  console.log(coach2.displayInfo()); 