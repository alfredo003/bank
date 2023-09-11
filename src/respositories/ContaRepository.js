
const {readFile,writeFile} = require('fs/promises')
class ContaRepository{
 constructor({file}){
  this.file =file
 }
 async _currentFileContent(){
  return JSON.parse(await readFile(this.file))
 }
 async find(idCount){
  const all = await this._currentFileContent()
  if(!idCount) return all;
  return all.find(({id})=>id===idCount)
 }
 async create(data){
  const currentFile = await this._currentFileContent()
  currentFile.push(data)
  await writeFile(this.file,JSON.stringify(currentFile))
  return data.id;
 }

}

module.exports =ContaRepository;


// const count = new ContaRepository({
//   file:"./../../database/data.json"
// });

//count.create({id:3,name:"test"}).then(console.log).catch((err)=>console.log(err))
//count.find(2).then(console.log).catch((error)=>console.log(error))
