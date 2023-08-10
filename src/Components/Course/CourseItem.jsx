import React from 'react'
import {  useState, useContext} from 'react'
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import { reducerConstants } from '../reducerConstants';
import ResumeContext from '../../Context/ResumeContext';
import { FaTrash } from 'react-icons/fa';
import CourseSummary from './CourseSummary';
import { style } from '../styles';

function Courses({course, index}) {
    const [get, setGet] = useState(false)
    const { dispatch} = useContext(ResumeContext)
   
    const handleCourse = () => {
        setGet(!get)
    }

    const updateCourse = (e) => {
        dispatch({
            type: reducerConstants.UPDATE_COURSE,
            payload: {name: e.target.name, value: e.target.value},
            index
        })
    }

    const deleteCourse = () => {
        dispatch({
            type: reducerConstants.DELETE_COURSE,
            index
        })
    }
  
    return (
        <div className={style.showContainer}>
            <div className='w-full'>{!get ? <RxCaretUp className={style.icon} onClick={handleCourse}/> : <RxCaretDown className={style.icon} onClick={handleCourse}/>}</div>
            <div><FaTrash onClick={deleteCourse}/></div>
            {!get &&
            <>
                <div className={style.wrapper}>
                    <div className={style.inputWrapper}>
                        <label htmlFor='course' className={style.label}>Course</label>
                        <input 
                            type='text' 
                            id='course' 
                            name='course' 
                            className={style.input} 
                            value={course.course} 
                            onChange={(e) => updateCourse(e)}
                        />
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor='institution' className={style.label}>Institution</label>
                        <input 
                            type='text' 
                            id='institution' 
                            name='institution' 
                            className={style.input} 
                            value={course.institution} 
                            onChange={(e) => updateCourse(e)}
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
                                value={course.start} 
                                onChange={(e) => updateCourse(e)}
                            />
                        </div>
                        <div className={style.dateContainer}>
                            <label htmlFor='end' className={style.label}>End Date</label>
                            <input 
                                type='month' 
                                id='end' 
                                name='end' 
                                className={style.dateInput} 
                                value={course.end} 
                                onChange={(e) => updateCourse(e)}
                            />
                        </div>
                    </div>
                
                </div>
            </> }
            {get && <CourseSummary course={course}/>}
        </div>
    )
}

export default Courses