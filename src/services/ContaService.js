class ContaService{
 constructor({contaRepository}){
  this.contaRepository = contaRepository
 }
 async find(id){
  return this.contaRepository.find(id)
 }
 async create(data){
  return this.contaRepository.create(data)
 }
}

module.exports = ContaService;