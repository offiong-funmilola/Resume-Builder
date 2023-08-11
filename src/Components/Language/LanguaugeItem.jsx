import React from 'react'
import {  useState, useContext } from 'react'
import { RxCaretDown, RxCaretUp} from "react-icons/rx";
import {style} from '../styles'
import ResumeContext from '../../Context/ResumeContext';
import {FaTrash} from 'react-icons/fa'
import LanguageSummary from './LanguageSummary'
import { reducerConstants } from '../reducerConstants';


function LanguageItem({language, index}) {
    const [add, setAdd] = useState(false)
    const {dispatch} = useContext(ResumeContext)
   
    const handleLanguage = () => {
        setAdd(!add)
    }

    const updateLanguage = (e) => {
        dispatch({
            type: reducerConstants.UPDATE_LANGUAGE,
            payload: {name: e.target.name, value: e.target.value},
            index
        })
    }

    const deleteLanguage = () => {
        dispatch({
            type: reducerConstants.DELETE_LANGUAGE,
            index
        })
    }

    return (
        <div className={style.showContainer}>
            <div className='w-full'>
                {!add ? <RxCaretUp className={style.icon} onClick={handleLanguage}/> : <RxCaretDown className={style.icon} onClick={handleLanguage}/>}
                {!add && <div className={style.deleteIcon}><FaTrash onClick={deleteLanguage} /></div>}  
            </div>
            
            {!add &&
                <div className={style.wrapper}>
                    <div className={style.inputWrapper}>
                        <label htmlFor='language' className={style.label}>Language</label>
                        <input 
                            type='text' 
                            id='language' 
                            name='language' 
                            className={style.input}
                            onChange={(e) => updateLanguage(e)}
                        />
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor='level' className={style.label}>Select level</label>
                        <select 
                            id='level' 
                            name='level' 
                            className={style.input}
                            value={language.level}
                            onChange={(e) => updateLanguage(e)}
                        >
                            <option value=''>Select level</option>
                            <option value='Native speaker'>Native speaker</option>
                            <option value='Highly proficient'>Highly proficient</option>
                            <option value='very good command'>Very good command</option>
                        </select>  
                    </div>
                </div>
            }
            {add && <LanguageSummary language={language}/>} 
        </div>
    )
}

export default LanguageItem

