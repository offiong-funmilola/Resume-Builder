import React from 'react'
import { useState } from 'react'
import HobbyItem from './HobbyItem'
import { style } from '../styles'

function HobbyIndex() {
    const [hob, setHob] = useState(false)

    const addHobby = () => {
        setHob(true)
    }

    return (
        <div className={style.container}>
            <h3 className={style.heading}>Hobbies</h3>
            {hob && <HobbyItem/>}
            {!hob &&  
                <p className={style.link} onClick={addHobby}>Click to add Hobby</p>
            }
        </div>
    )
}

export default HobbyIndex