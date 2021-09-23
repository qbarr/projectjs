import { io } from "socket.io-client";

import React,{useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChoosePage from "./pages/ChoosePage";
import Chat from "./pages/Chat";

const COLORS = [
  "#DE4B42", //red
  "#FBDE48", //yellow
  "#41B05A",//green
  "#4277DE", //blue
  "#EB66A6" //pink
]

const socket = io(`https://whispering-chamber-09886.herokuapp.com`);

function App() {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] =useState(null);
  const [messages, setMessages] = useState([]);


  useEffect(()=> {
    socket.on('connect',()=>setLoading(false))
    socket.on("users",newUsers => {
      newUsers.forEach((element,i) => {
        element['color']=COLORS[i%5];
        console.log(element.color);
      });
      setUsers(newUsers)
    })

    socket.on("updateUsername",(userToUpdate)=>{
      setUsers((prevUsers)=>{
        return prevUsers.map((user)=>user.id===userToUpdate.id ? userToUpdate:user)
      })
    })

    socket.on("userConnection",(user) => {
      setUsers(prevUsers => {
        return [...prevUsers,user];
      })   
    })

    socket.on("userDisconnection",(userDisconnect)=>{
      setUsers(prevUsers => {
  
        return prevUsers.filter(user=>user.id!==userDisconnect.id)
      })
    }) 

    socket.emit("getUsers");

    const messageListener = (message) => {
      setMessages((prevMessages) =>{
          return [...prevMessages,typeof message.value === "string" && message]
      })
    }

    const messagesListener = (listMessages) => {
        console.log('prevMESSAGES',listMessages);
        const cleanMessages = listMessages.filter((msg)=>{
            return typeof msg.value === "string";
        })
        setMessages(cleanMessages);
    }

    socket.on("messages",messagesListener);
    socket.on("message",messageListener);
    socket.emit("getMessages");

    return () => {
      socket.off("messages", messagesListener);
      socket.off("message", messageListener);
      socket.off("userConnection");
      socket.off("userDisconnection");
    }
    
  },[]);

  return (
    <Router>
     

      <Switch>
     
        <Route path="/">
          {socket && !loading &&<Chat
            socket={socket}
            users={users}
            messages={messages}
          />}
        </Route>
        <Route path="/choosePage">
         { socket && !loading &&<ChoosePage/>}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
