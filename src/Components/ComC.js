import React, { useContext } from 'react'
import { createContext } from 'react'
import { AppState } from '../App'

export const ComC = ( ) => {
 const appData =useContext (AppState)
  return (
    <>

    <div>ComC</div>
    <p>{appData.data}
    </p>
    <p > Name :{appData.name.name}
    </p>
    <p> Age :{appData.name.age}
    </p>
    </>
  )
}
