import React from 'react'

function ReferenceSummary({reference}) {
    const referenceAvailable = reference.name && reference.company

    return (
        <>
            {!referenceAvailable && 'Not Specified'}
            {referenceAvailable &&
                <div>{reference.name || 'N/A'} - ({reference.company})</div>
            }
        </>
    )
}

export default ReferenceSummary