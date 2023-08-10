import React from 'react'
import {useContext} from 'react'
import ResumeContext from '../Context/ResumeContext'
import { reducerConstants } from './reducerConstants'
import { style } from './styles'

// const style = {
//   container: `w-full h-[30vh] p-5`,
//   heading: `text-xl font-sans font-semibold mb-3`,
//   wrapper: `w-full text-lg font-sans`,
//   text: `border w-full p-6 focus:outline-none bg-gray-100`,
// }

function Bio() {
    const {user, dispatch} = useContext(ResumeContext)
  return (
    <div className={style.bioContainer}>
      <h3 className={style.heading}>Professional Summary</h3>
      <div className={style.bioWrapper}>
        <textarea 
          id='bio' 
          row='4' 
          name='bio'
          className={style.bioText}
          value={user.bio} 
          onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload:{name: e.target.name, value: e.target.value}})}>
        </textarea>
      </div>
    </div>
  )
}

export default Bio
