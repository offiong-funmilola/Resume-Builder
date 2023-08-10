import React from 'react'

function ExperienceSummary({experience}) {
    const experienceAvailable = experience.title && experience.employer
    return (
        <>
            {!experienceAvailable && 'Not Specified'}
            {experienceAvailable &&
                <div>{experience.title || 'N/A'} ({experience.employer}): {experience.start} - {experience.end}</div>
            }
        </>
    )
}

export default ExperienceSummary