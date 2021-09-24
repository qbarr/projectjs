import { io } from "socket.io-client";

import React,{useEffect,useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChoosePage from "./pages/ChoosePage";
import Chat from "./pages/Chat";
import FirstPage from "./pages/FirstPage";
import QrcodePage from "./pages/QrcodePage";
import ChooseUserNamePage from "./pages/ChooseUserNamePage";
import {animateScroll as scroll } from 'react-scroll'
const socket = io(`https://whispering-chamber-09886.herokuapp.com`);
const COLORS = [
  "#DE4B42", //red
  "#FBDE48", //yellow
  "#41B05A",//green
  "#4277DE", //blue
  "#EB66A6" //pink
]
function App() {
  const [loading,setLoading] =useState(null);
  const [messages, setMessages] = useState([]);
  const [users,setUsers] = useState([]);

  useEffect(() => {
    socket.on('connect',()=>setLoading(false))
    return () => {
      socket.off('connect',()=>setLoading(false))
    }
  }, [])

  useEffect(()=> {
    console.log('useeffectchat');

    const usersListener = newUsers => {
        const userWithColors = newUsers.map((usr, i) => ({...usr, color: COLORS[i%5]}))
        setUsers(userWithColors)
    }

    const updateUsernameListener = (userToUpdate)=>{
        setUsers((prevUsers) => {
          return prevUsers.map((user) => user.id === userToUpdate.id ? {...user, name: userToUpdate.name} : user)
        })
      }

      const userConnectionListener = (user) => {
        user['color']=COLORS[Math.floor(Math.random() * 5)];
        setUsers(prevUsers => {
          return [...prevUsers,user];
        })   
      }

      const userDisconnectionListener = (userDisconnect)=>{
        setUsers(prevUsers => {
          return prevUsers.filter(user => user.id !== userDisconnect.id)
        })
      }
      

    socket.on("users",usersListener);

    socket.on("updateUsername",updateUsernameListener)

    socket.on("userConnection",userConnectionListener);

    socket.on("userDisconnection",userDisconnectionListener);

    socket.emit("getUsers");
    

    const messageListener = (message) => {
      scroll.scrollToBottom()
      setMessages((prevMessages) =>{
          if(typeof message.value === "string" && message.value.length > 0 && message.value.length < 150) {
            return [...prevMessages, message]
          }

          return prevMessages
      })
    }

    const messagesListener = (listMessages) => {
        const cleanMessages = listMessages.filter((msg)=>{
          if(typeof msg.value === "string" && msg.value.length>0 && msg.value.length<150) {
            return true
          }
          return false
        })
        setMessages(cleanMessages);
        scroll.scrollToBottom({duration:0})
        
    }

    socket.on("messages",messagesListener);
    socket.on("message",messageListener);
    socket.emit("getMessages");

    return () => {
      socket.off("messages", messagesListener);
      socket.off("message", messageListener);
      socket.off("userConnection",userConnectionListener);
      socket.off("updateUsername",updateUsernameListener);
      socket.off("users",usersListener);
      socket.off("userDisconnection",userDisconnectionListener);
    }
    
  },[]);

  console.log('render app');
  return (
    <Router>
      <Switch>
        <Route path="/firstPage">
         { socket && !loading &&<FirstPage />}
        </Route>

        <Route path="/qrcodePage">
         { socket && !loading &&<QrcodePage/>}
        </Route>

        <Route path="/userNamePage">
         { socket && !loading &&<ChooseUserNamePage socket={socket} users={users}/>}
        </Route>
        <Route path="/choosePage">
         { socket && !loading &&<ChoosePage/>}
        </Route>

        <Route path="/">
          {socket && !loading &&<Chat
            socket={socket}
            usersColors={COLORS}
            users={users}
            messages={messages}
          />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
