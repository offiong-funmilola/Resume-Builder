import React from 'react'

function SkillSummary({skill}) {
    const skillAvailable = skill.skill && skill.level

    return (
        <>
            {!skillAvailable && 'Not Specified'}
            {skillAvailable &&
                <div>{skill.skill || 'N/A'} - ({skill.level})</div>
            }
        </>
    )
}

export default SkillSummary