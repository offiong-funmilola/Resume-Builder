import React from 'react'
import {useContext} from 'react'
import ResumeContext from '../../Context/ResumeContext'
import { reducerConstants } from '../reducerConstants'
import {style} from '../styles'

function HobbyItem() {
  const {dispatch} = useContext(ResumeContext)
  
  return (
    <div className={style.bioContainer}>
      {/* <h3 className={style.heading}>Hobbies</h3> */}
      <p className={style.para}>What do you like?</p>
      <div className={style.bioWrapper}>
        <textarea 
          id='hobby' 
          row='4' 
          col='50' 
          className={style.bioText}
          onChange= {(e) => dispatch({
            type: reducerConstants.ADD_HOBBY,
            payload: e.target.value
          })}
        ></textarea>
      </div>
    </div>
  )
}

export default HobbyItem
