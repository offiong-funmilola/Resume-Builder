import React from 'react'
import {  useState, useContext} from 'react'
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants';
import {style} from '../styles'
import SkillSummary from './SkillSummary'
import {FaTrash} from 'react-icons/fa'


function SkillItem({skill, index}) {
    const [open, setOpen] = useState(false)
    const {dispatch,} = useContext(ResumeContext)
   
    const handleSkill = () => {
        setOpen(!open)
    }

   const updateSkill = (e) => {
        dispatch({
            type: reducerConstants.UPDATE_SKILL,
            payload: {name: e.target.name, value: e.target.value},
            index   
        })
    }

    const deleteSkill = () => {
        dispatch({
            type: reducerConstants.DELETE_SKILL,
            index
        })
    }
    
    return (
            <div className={style.showContainer}>
                <div className='w-full'>
                    {!open ? <RxCaretUp className={style.icon} onClick={handleSkill}/> : <RxCaretDown className={style.icon} onClick={handleSkill}/>}
                    {!open && <div className={style.deleteIcon}><FaTrash onClick={deleteSkill} /></div>}  
                </div>
                
                {!open &&
                    <div className={style.wrapper}>
                        <div className={style.inputWrapper}>
                            <label htmlFor='skill' className={style.label}>Skill</label>
                            <input 
                                type='text' 
                                id='skill' 
                                name='skill' 
                                className={style.input} 
                                value={skill.skill} 
                                onChange={(e) => updateSkill(e)}
                            />
                        </div>
                        <div className={`${style.inputWrapper} mt-5`}>
                            <label htmlFor='level' className='hidden'>Level</label>
                            <datalist id='values' className={style.data}>
                                <option value='0' label='Beginner' className='option'></option>
                                <option value='50' label='Intermediate' className='option'></option>
                                <option value='100' label='Expert' className='option'></option>
                            </datalist>
                            <input 
                                type='range' 
                                id='level' 
                                name='level' 
                                className={style.input} 
                                list='values' 
                                value={skill.level}
                                onChange={(e) => updateSkill(e)}
                            />   
                        </div>
                    </div> } 
                {open && <SkillSummary skill={skill}/>}    
                
            </div>
        )
}

export default SkillItem