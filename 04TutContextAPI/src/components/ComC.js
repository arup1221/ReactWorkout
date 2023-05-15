import React,{useContext} from 'react'
import { AppState } from '../App'
import { NameContext } from '../App'

const ComC = () => {
  const appData = useContext(AppState)
  const name = useContext(NameContext)

  return (
    <div className='compC'>
    <div>
      ComC
    </div>
    {/* <h1>{data}</h1> */}
    <h1>{appData.data}</h1>
    {/* <h1>Name: {appData.name.naam}</h1>
    <h1>age: {appData.name.age}</h1> */}
    <h1>{name.naam}</h1>
    <h1>{name.age}</h1>

    </div>
  )
}

export default ComC
