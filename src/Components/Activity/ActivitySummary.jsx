import React from 'react'

function ActivitySummary({activity}) {
    const activityAvailable = activity.function && activity.employer
    return (
        <>
            {!activityAvailable && 'Not Specified'}
            {activityAvailable &&
                <div>{activity.function || 'N/A'} ({activity.employer}): {activity.start} - {activity.end}</div>
            }
        </>
    )
}

export default ActivitySummary