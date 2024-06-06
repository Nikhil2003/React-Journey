import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password , setPassword] = useState('');

    const {setUser} = useContext(UserContext)  //yha par ham useContext ko use kar rhe hai. Yha UserContext ek data provider hai jo UserContextProvider.jsx me created hai.
    //ham yha use provider ko call kar rhe or data pass or sent kar rhe hai.
    //setUser ek function hai yha.
    //ab ham profile me data receive karenge.

    const handleSubmit = (e) => {
    //ham iske default ko revent karenge kyoki jab ham submit karte hai to value url ke through kahi na kahi chali jatti hai
    e.preventDefault();
    setUser({username, password})   //ham yha par do variable pass kar rhe hai setUser ko jo khud ek varible hai
    } 
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      placeholder='Username' />
      <br />
      <br />
      <input type="text" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password'/>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
