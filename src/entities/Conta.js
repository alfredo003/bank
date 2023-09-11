class Conta{
  constructor({client,numberCount,saldo,typeCount}){
    this.id= Math.floor(Math.random() *100)+Date.now(),
    this.client =client,
    this.numberCount =numberCount,
    this.saldo =saldo,
    this.typeCount=typeCount
  }

  isValid(){
    const propertyNames = Object.getOwnPropertyNames(this)
    const amountInvalid = propertyNames
    .map(property =>(!!this[property])?null:`${property} is missing`)
    .filter(item=>!!item)

    return {
      valid:amountInvalid.length ===0,
      error:amountInvalid
    }

  }
 

}

module.exports = Conta;

// const conta= new Conta({client:"Alfredo",numberCount:3,saldo:300,typeCount:"corrent"})
// console.log('valid',conta.isValid())
// console.log('valid',conta)