import React from 'react'
import { useState, useContext} from 'react';
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants';
import SocialSummary from './SocialSummary'
import {style} from '../styles'
import {FaTrash} from 'react-icons/fa'


function Social({link, index}) {
    const [view, setView] = useState(false)
    const {dispatch} = useContext(ResumeContext)

    const handleweb = () => {
        setView(!view)
    }

    const updateSocial = (e) => {
        dispatch({
            type: reducerConstants.UPDATE_SOCIAL,
            payload: {name: e.target.name, value: e.target.value},
            index    
        })
    }

    const deleteSocial = (e) => {
        dispatch({
            type: reducerConstants.DELETE_SOCIAL,
            index
        })
    }
  
  return (
    <div className={style.showContainer}>
        <div className='w-full'>
            {!view ? <RxCaretUp className={style.icon} onClick={handleweb}/> : <RxCaretDown className={style.icon} onClick={handleweb}/>}
            {!view && <div className={style.deleteIcon}><FaTrash onClick={deleteSocial} /></div>}  
        </div>
        
        
        {!view && 
            <div className={style.wrapper}>
                <div className={style.inputWrapper}>
                    <label htmlFor='label' className={style.label}>Label</label>
                    <input 
                        type='url' 
                        id='label' 
                        name='label' 
                        className={style.input} 
                        value={link.label} 
                        onChange={(e) => updateSocial(e)}
                    />
                </div>
                <div className={style.inputWrapper}>
                    <label htmlFor='link' className={style.label}>Link</label>
                    <input 
                        type='url' 
                        id='link' 
                        name='link' 
                        className={style.input}
                        value={link.link} 
                        onChange={(e) => updateSocial(e)} 
                    />
                </div>
            </div> 
        }
        {view && <SocialSummary link={link}/>}   
        
    </div>
  )
}

export default Social