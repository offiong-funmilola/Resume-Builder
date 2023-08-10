import React from 'react'
import SkillItem from './SkillItem'
import { useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants'
import { style } from '../styles'


function SkillIndex() {
    const {skills, dispatch} = useContext(ResumeContext)
    const skill =  {skill: '', level: ''}

    const addSkill = () => {
        dispatch({
            type: reducerConstants.ADD_SKILL,
            payload: skill,
        })
    } 

  return (
    <div className={style.container}>
        <h3 className={style.heading}>Skills</h3>
        {skills.map((skill, index) =>
            <SkillItem 
                key={index} 
                index={index} 
                skill={skill}
            />
        )}
        <p className={style.link} onClick={addSkill}>Add skill</p>  
    </div>
  )
}

export default SkillIndex
