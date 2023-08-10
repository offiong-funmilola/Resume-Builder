import React from 'react'

function CourseSummary({course}) {
    const courseAvailable = course.course && course.institution
    return (
        <>
            {!courseAvailable && 'Not Specified'}
            {courseAvailable &&
                <div>{course.course || 'N/A'} ({course.institution}): {course.start} - {course.end}</div>
            }
        </>
    )
}

export default CourseSummary