import React from 'react'
import InternshipItem from './InternshipItem'
import { useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { FaPlus } from 'react-icons/fa';
import { reducerConstants } from '../reducerConstants'
import { style } from '../styles'

function InternshipIndex() {
    const {internships, dispatch} = useContext(ResumeContext)
    const internshipItem = {title: '', employer: '', start: '', end: '', city: '', description: ''}

    const addInternship = () => {
        dispatch({
            type:reducerConstants.ADD_INTERNSHIP,
            payload: internshipItem
        })
    }

    return (
        <div className={style.container}>
            <h3 className={style.heading}>Interships</h3>
            {internships.map((internship, index) =>
                <InternshipItem
                    key={index}
                    index={index}
                    internship={internship}
                />
            )}
            <p className={style.link} onClick={addInternship}>
                <FaPlus className={style.plusIcon} />
                <span className=''> Add experience</span>
            </p>
        </div>
    )
}

export default InternshipIndex