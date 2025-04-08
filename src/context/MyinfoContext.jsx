import React, {  useContext } from 'react'
import { createContext } from 'react'

const MyinfoContext = createContext();

export const MyinfoPorvider = ({children}) => {
  const value= {name: 'Hadiuzzaman'};
  return (
    <MyinfoContext.Provider value={value}>
      {children}
    </MyinfoContext.Provider>
  )
}

export const useMyinfoContext = () => useContext(MyinfoContext);

