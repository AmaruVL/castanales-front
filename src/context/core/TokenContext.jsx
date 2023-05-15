import { createContext, useState } from 'react'
import { setClient } from '../../api/axios'

export const TokenContext = createContext()

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState('sin token')

  const modifyAxiosClient = (token) => {
    setToken(token)
    setClient(token)
  }
  return (
        <>
            <TokenContext.Provider value = {{
              token,
              modifyAxiosClient
            }}>
                {children}
            </TokenContext.Provider>
        </>
  )
}
export default TokenProvider
