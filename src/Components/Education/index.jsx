import React from 'react'
import EducationItem from './EducationItem'
import { useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { FaPlus } from 'react-icons/fa';
import { reducerConstants } from '../reducerConstants'
import { style } from '../styles'

function EducationIndex() {
    const {educations, dispatch} = useContext(ResumeContext)
    const educationItem = {school: '', degree: '', start: '', end: '', city: '', description: ''}

    const addEducation = () => {
        dispatch({
            type:reducerConstants.ADD_EDUCATION,
            payload: educationItem
        })
    }

    return (
        <div className={style.container}>
            <h3 className={style.heading}>Education</h3>
            {educations.map((education, index) =>
                <EducationItem
                    key={index}
                    index={index}
                    education={education}
                />
            )}
            <p className={style.link} onClick={addEducation}>
                <FaPlus className={style.plusIcon} />
                <span className=''> Add experience</span>
            </p>
        </div>
    )
}

export default EducationIndex