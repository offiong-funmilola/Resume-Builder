import React from 'react'
import {  useState, useContext } from 'react'
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import { FaTrash } from 'react-icons/fa';
import {style} from '../styles'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants';
import ActivitySummary from './ActivitySummary';


function ActivityItem({activity, index}) {
    const [reveal, setReveal] = useState(false)
    const {dispatch} = useContext(ResumeContext)
   
    const handleAcivity = () => {
        setReveal(!reveal)
    }

    const updateActivity = (e) => {
        dispatch({
            type: reducerConstants.UPDATE_ACTIVITY,
            payload: {name: e.target.name, value: e.target.value},
            index
        })
    }

    const deleteActivity = () => {
        dispatch({
            type: reducerConstants.DELETE_ACTIVITY,
            index
        })
    }

    return (
        <div className={style.showContainer}>
            <div className='w-full'>
                {!reveal ? <RxCaretUp className={style.icon} onClick={handleAcivity}/> : <RxCaretDown className={style.icon} onClick={handleAcivity}/>}
                {!reveal && <div className={style.deleteIcon}><FaTrash onClick={deleteActivity} /></div>}  
                </div>
            {!reveal && 
                <>
                    <div className={style.wrapper}>
                        <div className={style.inputWrapper}>
                            <label htmlFor='function' className={style.label}>Function Title</label>
                            <input 
                                type='text' 
                                id='function' 
                                name='function' 
                                className={style.input}
                                onChange={(e) => updateActivity(e)}
                            />
                        </div>
                        <div className={style.inputWrapper}>
                            <label htmlFor='employer' className={style.label}>Employer</label>
                            <input 
                                type='text' 
                                id='employer' 
                                name='employer' 
                                className={style.input}
                                onChange={(e) => updateActivity(e)}
                            />
                        </div>
                    </div>
                    <div className={style.wrapper}>
                    <div className={style.dateWrapper}>
                            <div className={style.dateContainer}>
                                <label htmlFor='start' className={style.label}>Start Date</label>
                                <input 
                                    type='date' 
                                    id='start' 
                                    name='start' 
                                    className={style.dateInput}
                                    onChange={(e) => updateActivity(e)} 
                                />
                            </div>
                            <div className={style.dateContainer}>
                                <label htmlFor='end' className={style.label}>End Date</label>
                                <input 
                                    type='date' 
                                    id='end' 
                                    name='end' 
                                    className={style.dateInput}
                                    onChange={(e) => updateActivity(e)}
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
                                onChange={(e) => updateActivity(e)}
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
                            className={style.text}
                            onChange={(e) => updateActivity(e)}
                        ></textarea>
                    </div>
                </> 
            } 
            {reveal && <ActivitySummary activity={activity}/>}
        </div>
    )
}

export default ActivityItem