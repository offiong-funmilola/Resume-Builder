import React from 'react'
import CourseItem from './CourseItem'
import { useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { FaPlus } from 'react-icons/fa';
import { reducerConstants } from '../reducerConstants'
import { style } from '../styles'

function CourseIndex() {
    const {courses, dispatch} = useContext(ResumeContext)
    const courseItem = {course: '', institution: '', start: '', end: ''}
   
    const addCourse = () => {
        dispatch({
            type:reducerConstants.ADD_COURSE,
            payload: courseItem
        })
    }

    return (
        <div className={style.container}>
            <h3 className={style.heading}>Course</h3>
            {courses.map((course, index) =>
                <CourseItem
                    key={index}
                    index={index}
                    course={course}
                />
            )}
            <p className={style.link} onClick={addCourse}>
                <FaPlus className={style.plusIcon} />
                <span className=''> Add course</span>
            </p>
        </div>
    )
}

export default CourseIndex