import { io } from "socket.io-client";
import styled from '@emotion/styled'
import Header from './components/Header';
import NameInput from './components/NameInput';
import MessageInput from './components/MessageInput';
import Messages from './components/Messages';
import Users from './components/Users';
import React,{useEffect,useState} from "react";
import Footer from "./components/Footer";
const AppContainer = styled.div`

`
const AppInner = styled.div`
`
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
  const [usersColors,setUsersColor] = useState([]);

  useEffect(()=> {
    socket.on("users",users => {
      setUsers(users)

      let tempUsersColors = []
      console.log('length',users.length);
      for(let i=0;i<users.length;i++) {
        tempUsersColors.push({id:users[i].id,color:COLORS[i%5]})
      }
      console.log("temp",tempUsersColors);
      setUsersColor(tempUsersColors);
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
  
    return () => {
      socket.off("userConnection");
      socket.off("userDisconnection");
    }
    
  },[]);

  return (

      <AppContainer>
        <AppInner>
          {socket && (
          <>
            <Header/>

            {/* <NameInput
              socket={socket}
            /> */}
            
            <Messages
              socket={socket}
              usersColors={usersColors}
              users={users}
            />
            
            <Users 
              socket={socket}
              users={users}
            />

            <Footer 
              socket={socket}
              usersColors={usersColors}
            />
            
          </>)}
        </AppInner>
      </AppContainer>

  );
}

export default App;
