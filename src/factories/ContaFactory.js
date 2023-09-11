const ContaRepository = require('./../respositories/ContaRepository')
const ContaService = require('./../services/ContaService')
const {join} = require('path')
const filename= join(__dirname,'./../../database/data.json');

const generateInstance = () =>{
  const contaRepository = new ContaRepository({
    file:filename
  })
  const contaService = new ContaService({
    contaRepository
  })

  return contaService;
}


module.exports = {generateInstance}

//generateInstance().find().then(console.log)