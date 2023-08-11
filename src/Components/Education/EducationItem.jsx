import React from 'react'
import {  useState, useContext } from 'react'
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import { reducerConstants } from '../reducerConstants';
import ResumeContext from '../../Context/ResumeContext';
import EducationSummary from './EducationSummary'
import { FaTrash } from 'react-icons/fa'
import { style } from '../styles';


function Education({education, index}) {
    const [display, setDisplay] = useState(false)
    const { dispatch, } = useContext(ResumeContext)

    const handleEdu = () => {
        setDisplay(!display)
    }
   
   const UpdateEducation = (e) => {
        dispatch({
            type: reducerConstants.UPDATE_EDUCATION,
            payload: {name: e.target.name, value: e.target.value},
            index
        })
    }

    const deleteEducation = () => {
        dispatch({
            type: reducerConstants.DELETE_EDUCATION,
            index
        })
    }
   
    return (
        <div className={style.showContainer}>
            <div className='w-full'>
                {!display ? <RxCaretUp className={style.icon} onClick={handleEdu}/> : <RxCaretDown className={style.icon} onClick={handleEdu}/>}
                {!display && <div className={style.deleteIcon}><FaTrash onClick={deleteEducation} /></div>}  
                </div>
           
            {!display &&
            <>
                <div className={style.wrapper}>
                    <div className={style.inputWrapper}>
                        <label htmlFor='school' className={style.label}>School</label>
                        <input 
                            type='text' 
                            id='school' 
                            name='school' 
                            className={style.input} 
                            value={education.school} 
                            onChange={(e) => UpdateEducation(e)}
                        />
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor='degree' className={style.label}>Degree</label>
                        <input 
                            type='text' 
                            id='degree' 
                            name='degree' 
                            className={style.input} 
                            value={education.degree} 
                            onChange={(e) => UpdateEducation(e)}
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
                                value={education.start} 
                                onChange={(e) => UpdateEducation(e)}
                            />
                        </div>
                        <div className={style.dateContainer}>
                            <label htmlFor='end' className={style.label}>End Date</label>
                            <input 
                                type='month' 
                                id='end' 
                                name='end' 
                                className={style.dateInput} 
                                value={education.end} 
                                onChange={(e) => UpdateEducation(e)}
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
                            value={education.city} 
                            onChange={(e) => UpdateEducation(e)}
                        />
                    </div>
                </div>
                <div className={style.textWrapper}>
                    <label htmlFor='decription' className={style.label}>Description</label>
                    <textarea 
                        type='text' 
                        id='description' 
                        name='description' 
                        row='6' 
                        col='50' 
                        className={style.bioText} 
                        value={education.description} 
                        onChange={(e) => UpdateEducation(e)}
                    ></textarea>
                </div>
            </> }
            {display && <EducationSummary education={education}/>}
        </div>
    )
}

export default Education