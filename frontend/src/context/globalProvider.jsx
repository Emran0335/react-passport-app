import React, { createContext } from 'react'


export const GlobalContext = createContext();

const globalProvider = ({children}) => {
  return (
    <div>globalProvider</div>
  )
}

export default globalProvider