import React from 'react'
import ExperienceItem from './ExperienceItem'
import { useContext } from 'react'
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
            <p className={style.link} onClick={addExperience}>Add experience</p>
        </div>
    )
}

export default Experience