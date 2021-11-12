import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Home = () => {


    //useSelector is Store connecting
     const wizard = useSelector(state => ({...state}))
     const {user,wand} = useSelector(state => ({...state}))

     //useDispatch is Change Store data
     const dispatch = useDispatch()
     const {login} =  useSelector(state => ({...state}))
     
     //payload is any containing to push or get to store, it's make store to dynamic data
     const handleLogIn = () =>{
         console.log('log in');
         dispatch({
             type:'Login',
             payload:{
                 username:'Firebolt_is_myboi',
                 password:'12345678' 
                } //payload can put anything
         }) 
     }

     const handleLogOut = () =>{
         console.log('log out');
         dispatch({
             type:'Logout',
             payload:'log out payload'
         })
     }

     console.log('Store Data:',wizard);
     console.log('user data:',user);
     console.log('wand data:',wand);
     console.log('login data:',login);

    return (
        <div>
            <h1>Welcome to Redux Tuturials</h1>
            {/* <h3>{login}</h3> */}
            <button onClick={()=>handleLogIn()}>Log in</button>
            <button onClick={()=>handleLogOut()}>Log out</button>
        </div>
    )
}

export default Home
