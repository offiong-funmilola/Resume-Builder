import React from 'react'
import { useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants'
import { style } from '../styles'
import LanguageItem from './LanguaugeItem';


function LanguageIndex() {
    const {languages, dispatch} = useContext(ResumeContext)
    const language =  {laguage: '', level: ''}

    const addLanguage = () => {
        dispatch({
            type: reducerConstants.ADD_LANGUAGE,
            payload: language,
        })
    } 

  return (
    <div className={style.container}>
        <h3 className={style.heading}>Languages</h3>
        {languages.map((language, index) =>
            <LanguageItem 
                key={index} 
                index={index} 
                language={language}
            />
        )}
        <p className={style.link} onClick={addLanguage}>Add language</p>  
    </div>
  )
}

export default LanguageIndex
