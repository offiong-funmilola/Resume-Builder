import React from 'react'
import { useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants'
import { style } from '../styles'
import ReferenceItem from './ReferenceItem';


function ReferenceIndex() {
    const {references, dispatch} = useContext(ResumeContext)
    const referenceItem =  {name: '', company: '', phone: '', email: ''}

    const addReference = () => {
        dispatch({
            type: reducerConstants.ADD_REFERENCE,
            payload: referenceItem
        })
    } 

    return (
        <div className={style.container}>
            <h3 className={style.heading}>References</h3>
            {references.map((reference, index) =>
                <ReferenceItem 
                    key={index} 
                    index={index} 
                    reference={reference}
                />
            )}
            <p className={style.link} onClick={addReference}>Add reference</p>  
        </div>
    )
}

export default ReferenceIndex
