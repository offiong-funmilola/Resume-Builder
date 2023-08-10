import React from 'react'
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import { FaTrash } from 'react-icons/fa'
import { useState, useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants';
import ExperienceSummary from './ExperienceSummary';
import { style } from '../styles';


function ExperienceItem({experience, index}) {
    const [hide, setHide] = useState(false)
    const {dispatch} = useContext(ResumeContext)
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const end = `${month}/${year}`

    const handleDropDown = () => {
        setHide(!hide)
    }

    const updateExperience = (e) => {
        dispatch({
            type:reducerConstants.UPDATE_EXPERIENCE,
            payload: {name: e.target.name, value: e.target.value},
            index
        })
    }

    const deleteExperience = () => {
        dispatch({
            type:reducerConstants.DELETE_EXPERIENCE,
            index
        })
    }
    
    return (
        <div className={style.showContainer}>
            <div className='w-full'>{!hide ? <RxCaretUp className={style.icon} onClick={handleDropDown}/> : <RxCaretDown className={style.icon} onClick={handleDropDown}/>}</div>
            <div><FaTrash onClick={deleteExperience} /></div>
            {!hide && 
                <>
                    <div className={style.wrapper}>
                        <div className={style.inputWrapper}>
                            <label htmlFor='title' className={style.label}>Job title</label>
                            <input 
                                type='text' 
                                id='title' 
                                name='title' 
                                className={style.input} 
                                value={experience.title} 
                                onChange={(e) => updateExperience(e)}
                            />
                        </div>
                        <div className={style.inputWrapper}>
                            <label htmlFor='employer' className={style.label}>Employer</label>
                            <input 
                                type='text' 
                                id='employer' 
                                name='employer' 
                                className={style.input} 
                                value={experience.employer} 
                                onChange={(e) => updateExperience(e)}
                            />               
                        </div>
                    </div>
                    <div className={style.wrapper}>
                    <div className={style.dateWrapper}>
                            <div className={style.dateContainer}>
                                <label htmlFor='start' className={style.label}>Start Date</label>
                                <input 
                                    type='month' 
                                    id='start' 
                                    name='start' 
                                    className={style.dateInput} 
                                    value={experience.start} 
                                    onChange={(e) => updateExperience(e)}
                                />
                            </div>
                            <div className={style.dateContainer}>
                                <label htmlFor='end' className={style.label}>End Date</label>
                                <input 
                                    type='month' 
                                    id='end' 
                                    name='end' 
                                    max={end} 
                                    className={style.dateInput} 
                                    value={experience.end} 
                                    onChange={(e) => updateExperience(e)}
                                />
                            </div>
                        </div>
                        <div className={style.inputWrapper}>
                            <label htmlFor='city' className={style.label}>City</label>
                            <input 
                                type='text' 
                                id='city' 
                                name='city' 
                                className={style.input} 
                                value={experience.city}
                                onChange={(e) => updateExperience(e)}
                            />
                        </div>
                    </div>
                    <div className={style.textWrapper}>
                        <label htmlFor='decription' className={style.label}>Description</label>
                        <textarea 
                            type='text' 
                            id='description' 
                            name='description' 
                            rows='3'
                            className={style.bioText} 
                            value={experience.description} 
                            onChange={(e) => updateExperience(e)}
                        ></textarea>
                    </div> 
                </>
            }
            {hide && <ExperienceSummary experience={experience} />}
        </div>
    )
}

export default ExperienceItem