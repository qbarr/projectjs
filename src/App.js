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


function App() {
  const [users,setUsers] = useState([]);
  const [usersColors,setUsersColor] = useState([]);
  const [socket,setSocket] =useState(null);
  const [loading,setLoading] =useState(null);
  useEffect(()=> {
    const newSocket = io(`https://whispering-chamber-09886.herokuapp.com`);
    newSocket.on('connect',()=>setLoading(false))
    newSocket.on("users",users => {
      setUsers(users)

      let tempUsersColors = []
      console.log('length',users.length);
      for(let i=0;i<users.length;i++) {
        tempUsersColors.push({id:users[i].id,color:COLORS[i%5]})
      }
      console.log("temp",tempUsersColors);
      setUsersColor(tempUsersColors);
    })
    newSocket.on("updateUsername",(userToUpdate)=>{
      setUsers((prevUsers)=>{
        return prevUsers.map((user)=>user.id===userToUpdate.id ? userToUpdate:user)
      })
    })
    newSocket.on("userConnection",(user) => {
      setUsers(prevUsers => {
        return [...prevUsers,user];
      })   
    })
    newSocket.on("userDisconnection",(userDisconnect)=>{
      setUsers(prevUsers => {
  
        return prevUsers.filter(user=>user.id!==userDisconnect.id)
      })
    }) 
    newSocket.emit("getUsers");
    setSocket(newSocket);
    return () => {
      newSocket.off("userConnection");
      newSocket.off("userDisconnection");
    }
    
  },[]);

  return (
    <Router>
     

      <Switch>
     
        <Route path="/">
          {socket && !loading &&<Chat
            socket={socket}
            users={users}
            usersColors={usersColors}
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
