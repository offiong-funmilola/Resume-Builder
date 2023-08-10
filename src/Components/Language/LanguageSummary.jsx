import React from 'react'

function languageSummary({language}) {
    const languageAvailable = language.language && language.level

    return (
        <>
            {!languageAvailable && 'Not Specified'}
            {languageAvailable &&
                <div>{language.language || 'N/A'} - ({language.level})</div>
            }
        </>
    )
}

export default languageSummary