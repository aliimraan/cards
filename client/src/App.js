import './App.css';
import React,{useState,useEffect} from 'react'
import Cards from './components/cards/Cards';
import { FaEllipsisH,FaTimes,FaPlus } from "react-icons/fa";
import './components/addCard/addCard.css'
import {useDispatch,useSelector} from 'react-redux'
import {addCard} from './actions/AllCards'

function App() {
  const [addButton,setAddButton]=useState(false)
  const [addCard,setAddCard]=useState(false)
  const [input,setInput]=useState('')
  const dispatch=useDispatch()
  const data=useSelector(state=>state.)
  // const [data, setData] = useState([
  //   {id: 1, title: 'to do'},
  //   {id: 2, title: 'doing'},
  //   {id: 3, title: 'done'},
  // ]);

  useEffect(() => {

  },[data])

  const showCards=(el)=>{
    if(el===[]||el===undefined){
      return ''
    }else{
      return el.map((item,index)=>{
        return(
          <Cards title={item.title} key={index}/>
        )
      })
    }
  }
  const toggleHandler=()=>{
    setAddCard(true)
    setAddButton(true)
}
  const closeButtonHandler=(e)=>{
      e.preventDefault()
      setAddCard(false)
      setAddButton(false)
  }
  const submitHandler=(e)=>{
      e.preventDefault()
      const id=Math.floor(Math.random()*1000)
      const data={
        id:id,title:input
      }
      dispatch(addCard(data))
      // setData([...data,{id:id,title:input}])
      // setAddCard(false)
      // setInput([])
  }

  return (
    <div className="App">
        {showCards(data)}
        <div className="new_card" >
            <div className="card_item">
              <button onClick={()=>toggleHandler()} style={addCard===false?{display:'block'}:{display:'none'}}>
                  <FaPlus/> 
                  <span>Add another list</span>
              </button>
            </div>
                <form onSubmit={(e)=>submitHandler(e)} style={addCard===false?{display:'none'}:{display:'block'}}>
                    <input type="text" placeholder="Enter a title" onChange={(e)=>setInput(e.target.value)}/>
                    <div className="card_new_footer">
                        <div className="left">
                            <button type="submit">Add card</button>
                            <button onClick={(e)=>closeButtonHandler(e)}><FaTimes/></button>
                        </div>
                        <div className="right">
                            <button><FaEllipsisH/></button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
  );
}

export default App;
