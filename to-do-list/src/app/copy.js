const data = [
{ text:"hello",
  key:Date.now(),
  done:false,
}, 
{
  text:"world",
  key:Date.now(),
  done:false,
}]
const Index = Object.keys(data)
const datas = data.map(each=>each.text)
console.log(Index)
console.log(datas)