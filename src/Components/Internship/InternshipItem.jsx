import React from 'react'
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import { FaTrash } from 'react-icons/fa'
import { useState, useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants';
import InternshipSummary from './InternshipSummary'
import { style } from '../styles';


function InternshipItem({internship, index}) {
    const [intern, setIntern] = useState(false)
    const {dispatch} = useContext(ResumeContext)
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const end = `${month}/${year}`

    const handleDropDown = () => {
        setIntern(!intern)
    }

    const updateInternship = (e) => {
        dispatch({
            type:reducerConstants.UPDATE_INTERNSHIP,
            payload: {name: e.target.name, value: e.target.value},
            index
        })
    }

    const deleteInternship = () => {
        dispatch({
            type:reducerConstants.DELETE_INTERNSHIP,
            index
        })
    }
    
    return (
        <div className={style.showContainer}>
            <div className='w-full'>{!intern ? <RxCaretUp className={style.icon} onClick={handleDropDown}/> : <RxCaretDown className={style.icon} onClick={handleDropDown}/>}</div>
            <div><FaTrash onClick={deleteInternship} /></div>
            {!intern && 
                <>
                    <div className={style.wrapper}>
                        <div className={style.inputWrapper}>
                            <label htmlFor='title' className={style.label}>Job title</label>
                            <input 
                                type='text' 
                                id='title' 
                                name='title' 
                                className={style.input} 
                                value={internship.title} 
                                onChange={(e) => updateInternship(e)}
                            />
                        </div>
                        <div className={style.inputWrapper}>
                            <label htmlFor='employer' className={style.label}>Employer</label>
                            <input 
                                type='month' 
                                id='employer' 
                                name='employer' 
                                className={style.input} 
                                value={internship.employer} 
                                onChange={(e) => updateInternship(e)}
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
                                    value={internship.start} 
                                    onChange={(e) => updateInternship(e)}
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
                                    value={internship.end} 
                                    onChange={(e) => updateInternship(e)}
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
                                value={internship.city}
                                onChange={(e) => updateInternship(e)}
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
                            value={internship.description} 
                            onChange={(e) => updateInternship(e)}
                        ></textarea>
                    </div> 
                </>
            }
            {intern && <InternshipSummary internship={internship} />}
        </div>
    )
}

export default  InternshipItem 