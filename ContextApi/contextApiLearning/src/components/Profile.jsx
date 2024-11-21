import { useContext } from "react"
import userContext from "../context/useContextApi"

function Profile() {
    const {user} =useContext(userContext);


    if (!user) return <p>Please Login</p>
  return (
    <div>
        <h1>UserName : {user.username}</h1>
    </div>
  )
}

export default Profile
