import { Action } from "@remix-run/router"
import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"

const init = () =>{
  const user = JSON.parse(localStorage.getItem('user'));

  return{
    logged:!!user,
    user:user
  }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(AuthReducer,{},init)

    const login = (usuario) =>{
        const action = {type:'[TODO] Login', payload:usuario}
        localStorage.setItem('user',JSON.stringify(usuario));
        dispatch(action);
    }
    const logout = () =>{
        const action = {type:'[TODO] Logout'}
        localStorage.removeItem('user');
        dispatch(action);
    }

    const register = (usuario) =>{
        const action = {type:'[TODO] Register', payload:usuario}
        localStorage.setItem('user',JSON.stringify(usuario));
        dispatch(action)
    }

  return (
    <AuthContext.Provider value={{
      ...authState,
      //methods
      login,
      logout,
      register
    }}>
        {children}
    </AuthContext.Provider>
  )
}
