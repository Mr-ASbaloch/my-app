import React, { useContext } from 'react'
import { createContext } from 'react'
import { AppState } from '../App'

export const ComC = ( ) => {
 const appData =useContext (AppState)
  return (
    <>

    <div>ComC</div>
    <h1>{appData.data}
    </h1>
    <h1 > Name :{appData.name.name}
    </h1>
    <h1> Age :{appData.name.age}
    </h1>
    </>
  )
}
