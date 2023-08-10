import React from 'react'
import {useContext} from 'react'
import ResumeContext from '../Context/ResumeContext'

const style = {
    container: `w-5/6 h-5/6 flex flex-col gap-2`,
    main: `w-full`,
    heading: `font-sans text-base`,
    bio: `font-sans text-[10px]`,
    para: `font-sans text-[10px] font-semibold`,
    light: `text-[8px] font-sans font-light`,
    description: `font-sans text-[8px]`,
}

function Content() {
    const {user, experiences, educations, courses, internships, references, activities } = useContext(ResumeContext)
    // console.log(experiences)
  return (
    <div className={style.container}>
        <div className={style.main}>
            <h3 className={style.heading}>Profile</h3>
            <p className={style.bio}>{user.bio}</p>
        </div>
        
        {experiences && experiences.length > 0 && 
            <>
                <div className={style.main} >
                    <h3 className={style.heading}>Experiences</h3>
                    {experiences.map((experience, index)=> (
                        <div className='w-full' key={index}>
                            <p className={style.para}>{experience.title}, {experience.employer}, {experience.city} </p>
                            <p className={style.light}>{experience.start} - {experience.end}</p> 
                            <p className={style.description}>{experience.description}</p>   
                        </div> 
                    ))}   
                </div>
            </>
        } 
        {educations && educations.length > 0 && 
            <>
                <div className={style.main} >
                    <h3 className={style.heading}>Education</h3>
                    {educations.map((education, index)=> (
                        <div className='w-full' key={index}>
                            <p className={style.para}>{education.school}, {education.degree}, {education.city} </p>
                            <p className={style.light}>{education.start} - {education.end}</p> 
                            <p className={style.description}>{education.description}</p>   
                        </div> 
                    ))}   
                </div>
            </>
        } 
        {courses && courses.length > 0 && 
            <>
                <div className={style.main} >
                    <h3 className={style.heading}>Courses</h3>
                    {courses.map((course, index)=> (
                        <div className='w-full' key={index}>
                            <p className={style.para}>{course.course}, {course.institution} </p>
                            <p className={style.light}>{course.start} - {course.end}</p> 
                        </div> 
                    ))}   
                </div>
            </>
        } 
        {internships && internships.length > 0 && 
            <>
                <div className={style.main} >
                    <h3 className={style.heading}>Internships</h3>
                    {internships.map((intership, index)=> (
                        <div className='w-full' key={index}>
                            <p className={style.para}>{intership.title}, {intership.employer}, {intership.city} </p>
                            <p className={style.light}>{intership.start} - {intership.end}</p> 
                            <p className={style.description}>{intership.description}</p>   
                        </div> 
                    ))}   
                </div>
            </>
        } 
        {references && references.length > 0 && 
            <>
                <div className={style.main} >
                    <h3 className={style.heading}>References</h3>
                    {references.map((reference, index)=> (
                        <div className='w-full' key={index}>
                            <p className={style.para}>`${reference.name} from ${reference.company}` </p>
                            <p className={style.description}>`${reference.email} | ${reference.phone}`</p> 
                        </div> 
                    ))}   
                </div>
            </>
        } 
        {activities && activities.length > 0 && 
            <>
                <div className={style.main} >
                    <h3 className={style.heading}>Extra-curricular Activities</h3>
                    {activities.map((activity, index)=> (
                        <div className='w-full' key={index}>
                            <p className={style.para}>{activity.title}, {activity.employer}, {activity.city} </p>
                            <p className={style.light}>{activity.start} - {activity.end}</p> 
                            <p className={style.description}>{activity.description}</p>   
                        </div> 
                    ))}   
                </div>
            </>
        } 
           
    </div>
  )
}

export default Content