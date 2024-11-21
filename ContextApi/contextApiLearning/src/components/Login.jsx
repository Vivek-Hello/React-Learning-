import userContext from "../context/useContextApi"
import { useContext, useState } from "react"

function Login() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const {setUser} =  useContext(userContext)

  const handleSubmit =()=>{
      setUser({username,password})
  }
  return (
    <div> 
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
