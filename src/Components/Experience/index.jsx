import React from 'react'
import ExperienceItem from './ExperienceItem'
import { useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants'
import { style } from '../styles'

function Experience() {
    const {experiences, dispatch} = useContext(ResumeContext)
    const experienceItem = {title: '', employer: '', start: '', end: '', city: '', description: ''}

    const addExperience = () => {
        dispatch({
            type:reducerConstants.ADD_EXPERIENCE,
            payload: experienceItem
        })
    }

    return (
        <div className={style.container}>
            <h3 className={style.heading}>Experiences</h3>
            {experiences.map((experience, index) =>
                <ExperienceItem
                    key={index}
                    index={index}
                    experience={experience}
                />
            )}
            <p className={style.link} onClick={addExperience}>
                <FaPlus className={style.plusIcon} />
                <span className=''> Add experience</span>
            </p>
        </div>
    )
}

export default Experience