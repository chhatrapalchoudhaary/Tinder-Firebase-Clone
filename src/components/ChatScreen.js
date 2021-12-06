import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import './ChatScreen.css'
import { useParams } from 'react-router-dom'

const ChatScreen = () => {
    const {person} = useParams()
    const [input,setInput] = useState('')
    const [messages,setMessages] = useState([
        {
            name:"Rose",
            image:"https://randomuser.me/api/portraits/women/20.jpg",
            message:"How are you"
        },
        {
            message:"How is it going"
        }
    ])

    const handleSend = (e) =>{
        e.preventDefault();
        setMessages([...messages,{message:input}])
        setInput("")
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__time">
                {`YOU MATCHED WITH ${person.toUpperCase()} ROSE ON ${new Date().toLocaleDateString()}`}
            </p>
            {messages.map(item=>(
                item.name?(<div className="chatScreen__message">
                <Avatar className="chatScreen__image" alt={item.name} src={item.image}/>
                <p className="chatScreen__text">{item.message}</p>    
            </div>):(
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{item.message}</p>
                </div>)
                
            ))}
            <form className="chatScreen__input">
                <input type="text" className="chatScreen__inputField" placeholder="Type a message" value={input} onChange={e=>setInput(e.target.value)}/>
                <button className="chatScreen__inputButton" type="submit" onClick={handleSend}>SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
