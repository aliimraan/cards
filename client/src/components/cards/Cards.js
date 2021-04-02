import React,{useState,useRef,useEffect} from 'react'
import './cards.css'
import { FaEllipsisH,FaTimes,FaPlus } from "react-icons/fa";

function Cards({title}) {
    const [addButton,setAddButton]=useState(false)
    const [addCard,setAddCard]=useState(false)
    const [input,setInput]=useState('')
    const cardFooter=useRef(0)
    const [data, setData] = useState([]);
    
      useEffect(() => {
    
      },[data])


    const toggleHandler=()=>{
        setAddCard(true)
        setAddButton(true)
        cardFooter.current.style.visibility="hidden"
    }
    const closeButtonHandler=(e)=>{
        e.preventDefault()
        setAddCard(false)
        setAddButton(false)
        cardFooter.current.style.visibility="visible"
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const id=Math.floor(Math.random()*1000)
        setData([...data,{id:id,title:input}])
        setAddButton(false)
        cardFooter.current.style.visibility="visible"
}
    const showLists=(el)=>{
        if(el===[]||el===''){
            return (
                <div></div>
            )
        }else{
         return el.map((item,index)=>{
             console.log(item)
             return (
                 <div className="list" key={index}>{item.title}</div>
             )
         })
        }
     }
    
    return (
        <div className="my_card">
            <div className="card_heading">
                <div className="title">{title}</div>
                <button><div className="icon"><FaEllipsisH/></div></button>
            </div>
            <div className="card_body">
                {showLists(data)}
            </div>
            <div className="card_add" style={addButton===false?{display:'none'}:{display:'block'}}>
                <form onSubmit={(e)=>submitHandler(e)}>
                    <input type="text" placeholder="Enter a title for this card" onChange={(e)=>setInput(e.target.value)}/>
                    <div className="card_add_footer">
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
            <div className="card_footer" ref={cardFooter}>
                <button className="footer_button" onClick={()=>toggleHandler()}><FaPlus/> Add a card</button>
                <div className="footer_icon"><FaEllipsisH /></div>
            </div>
        </div>
    )
}

export default Cards
