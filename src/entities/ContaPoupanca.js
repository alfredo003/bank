const Conta = require('./Conta')

class ContaPoupanca extends Conta{
  constructor({typeCount}){
    this.typeCount=typeCount
  }
}

const contaPoupanca= new ContaPoupanca({client:"Alfredo",numberCount:3,saldo:300,typeCount:"corrent"})
console.log('valid',contaPoupanca.isValid())
console.log('valid',contaPoupanca)