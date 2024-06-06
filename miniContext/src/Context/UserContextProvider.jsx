import React, { useState } from 'react'
import UserContext from './UserContext';  //agr ise import nhi karoge to nhi run karega program.

function UserContextProvider({children}) {
    const [user , setUser] = React.useState(null);
  return (
    <div>
      <UserContext.Provider value = {{user,setUser}}>  {/* Here we are passing whole   object */}
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider
