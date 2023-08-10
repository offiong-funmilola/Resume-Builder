import React from 'react'

function SocialSummary({link}) {
    const socialAvailable = link.label && link.link

    return (
        <>
            {!socialAvailable && 'Not Specified'}
            {socialAvailable &&
                <div>{link.label || 'N/A'}</div>
            }
        </>
    )
}

export default SocialSummary