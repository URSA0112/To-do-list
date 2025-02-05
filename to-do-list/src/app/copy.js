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

return <li key={each.id}>{each.text}
      <div className="listbuttons-container">
        <button className="listbutton" onClick={listEdit}>edit</button>
        <button className="listbutton" onClick={listDelete}>delete</button>
      </div>
    </li>