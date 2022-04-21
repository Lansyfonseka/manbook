import {createContext} from 'react'

export const AuthContext = createContext({
  userToken: null,
  userId: null,
  userName: null,
  userMail: null,
  userIsAuthenticated: false
})