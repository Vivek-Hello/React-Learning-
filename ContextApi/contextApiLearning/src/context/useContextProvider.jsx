
import{ useState } from 'react'
import userContext from './useContextApi'

function useContextProvider({children}) {
    
    const [user,setUser] =useState(null)

  return (
    <userContext.Provider value={{user,setUser}}> 
      {children}
    </userContext.Provider>
  )
}

export default useContextProvider
