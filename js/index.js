class BankAccount {
    constructor(balance) {
      this.balance = balance;
      console.log(`Opening Balance: ${balance}`);      
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited: ${amount}`);
    }
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn: ${amount}`);
      } 
      else 
      {
        console.log(`Want to withdrawn: ${amount}`);
        console.log('Insufficient balance');
      }
    }
    getBalance() {
      console.log(`Account Balance: ${this.balance}`);
    }
  }

const account = new BankAccount(1000);
account.getBalance();
account.deposit(500);
account.getBalance();
account.withdraw(200);
account.getBalance();


  