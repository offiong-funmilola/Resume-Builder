import React from 'react'

function InternshipSummary({internship}) {
    const internshipAvailable = internship.title && internship.employer
    return (
        <>
            {!internshipAvailable && 'Not Specified'}
            {internshipAvailable &&
                <div>{internship.title || 'N/A'} ({internship.title}): {internship.start} - {internship.end}</div>
            }
        </>
    )
}

export default InternshipSummary