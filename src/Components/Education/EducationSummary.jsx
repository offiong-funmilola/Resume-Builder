import React from 'react'

function EducationSummary({education}) {
    const educationAvailable = education.school && education.degree
    return (
        <>
            {!educationAvailable && 'Not Specified'}
            {educationAvailable &&
                <div>{education.school || 'N/A'} ({education.degree}): {education.start} - {education.end}</div>
            }
        </>
    )
}

export default EducationSummary