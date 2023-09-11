const http = require('http')
const PORT = 3000
const DEFAULT_HEADER = {'Content-Type':'application/json'}
const ContaFactory = require('./src/factories/ContaFactory');
const ContaService = ContaFactory.generateInstance();
const Conta = require('./src/entities/Conta')
const routes = {
  '/contas:get':async(req,res)=>{
     const { id } = req.queryString
     const contas = await ContaService.find(id)
    res.write(JSON.stringify({results:contas}))
    return res.end()   
  },
  '/contas:post': async(req,res)=>{

      for await (const data of req){
        const item = JSON.parse(data)
        const conta = new Conta(item)
        const {error,valid} = conta.isValid();
        if(!valid){
          res.writeHead(400,DEFAULT_HEADER)
          res.write(JSON.stringify({error:error}))
          return res.end()
        }

        const id = await ContaService.create(conta)
        res.writeHead(400,DEFAULT_HEADER)
        res.write(JSON.stringify({success:'Conta created with success!',id}))
        return res.end()
      }
  },
  default:(req,res)=>{
    res.writeHead(404,'Route Not Found')
    res.end()
  }
}

const handler = (req,res)=>{
  const {url,method} =req;
  const [first,route,id] = url.split('/');
  req.queryString = {id:isNaN(id) ? id : Number(id)} 
  const key = `/${route}:${method.toLowerCase()}`
 
  res.writeHead(200,DEFAULT_HEADER)
  const chosen = routes[key] || routes.default
  return chosen(req,res)

}
http.createServer(handler)
.listen(PORT,()=>console.log(`Server running at ${PORT}`))