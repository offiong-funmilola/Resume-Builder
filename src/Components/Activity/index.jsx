import React from 'react'
import ActivityItem from './ActivityItem'
import { useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants'
import { FaPlus } from 'react-icons/fa';
import { style } from '../styles'

function ActivityIndex() {
    const {activities, dispatch} = useContext(ResumeContext)
    const activityItem = {function: '', employer: '', start: '', end: '', city: '', description: ''}

    const addActivity = () => {
        dispatch({
            type: reducerConstants.ADD_ACTIVITY,
            payload: activityItem
        })
    }
   
    return (
        <div className={style.container}>
            <h3 className={style.heading}>Extra-curricular Activities</h3>
            {activities.map((activity, index) =>
                <ActivityItem key={index} index={index} activity={activity}/>
            )}
            <p className={style.link} onClick={addActivity}>
                <FaPlus className={style.plusIcon} />
                <span className=''> Add Activity</span>
            </p>
        </div>
    )
}

export default ActivityIndex

