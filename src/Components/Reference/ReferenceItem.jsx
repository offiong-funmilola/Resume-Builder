import React from 'react'
import {  useState, useContext } from 'react'
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import {style} from '../styles'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants';
import ReferenceSummary from './ReferenceSummary'
import {FaTrash} from 'react-icons/fa'


function References({reference, index}) {
    const [point, setPoint] = useState(false)
    const {dispatch} = useContext(ResumeContext)
   
    const handleReference = () => {
        setPoint(!point)
    }

    const updateReference = (e) => {
        dispatch({
            type: reducerConstants.UPDATE_REFERENCE,
            payload: {name: e.target.name, value: e.target.value},
            index
        })
    }

    const deleteReference = () => {
        dispatch({
            type: reducerConstants.DELETE_ACTIVITY,
            index
        })
    }

    return (
        <div className={style.showContainer}>
            <div className='w-full'>
                {!point ? <RxCaretUp className={style.icon} onClick={handleReference}/> : <RxCaretDown className={style.icon} onClick={handleReference}/>}
                {!point && <div className={style.deleteIcon}><FaTrash onClick={deleteReference} /></div>}  
            </div>
            
            {!point && 
                <>
                    <div className={style.wrapper}>
                        <div className={style.inputWrapper}>
                            <label htmlFor='name' className={style.label}>Referent's Full Name </label>
                            <input 
                                type='text' 
                                id='name' 
                                name='name' 
                                className={style.input}
                                onChange={(e) => updateReference(e)}
                            />
                        </div>
                        <div className={style.inputWrapper}>
                            <label htmlFor='company' className={style.label}>Company</label>
                            <input 
                                type='text' 
                                id='company' 
                                name='company' 
                                className={style.input}
                                onChange={(e) => updateReference(e)}
                            />
                        </div>
                    </div>
                    <div className={style.wrapper}>
                        <div className={style.inputWrapper}>
                            <label htmlFor='phone' className={style.label}>Phone</label>
                            <input 
                                type='text' 
                                id='phone' 
                                name='phone' 
                                className={style.input}
                                onChange={(e) => updateReference(e)}
                            />
                        </div>
                    
                        <div className={style.inputWrapper}>
                            <label htmlFor='email' className={style.label}>Email</label>
                            <input 
                                type='text' 
                                id='email' 
                                name='email' 
                                className={style.input}
                                onChange={(e) => updateReference(e)}
                            />
                        </div>
                    </div>
                </>
            }  
            {point && <ReferenceSummary reference={reference} />}
            
        </div>
    )
}

export default References