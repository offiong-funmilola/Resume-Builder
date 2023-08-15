import React from 'react'
import SocialItem from './SocialItem'
import { useContext } from 'react'
import ResumeContext from '../../Context/ResumeContext';
import { reducerConstants } from '../reducerConstants'
import { FaPlus } from 'react-icons/fa';
import { style } from '../styles'

function SocialIndex() {
    const {links, dispatch} = useContext(ResumeContext)
    const link = {label:'', link:''}

    const addSocial = () => {
        dispatch({
            type: reducerConstants.ADD_SOCIAL,
            payload: link,
        })
    } 

  return (
    <div className={style.container}>
        <h3 className={style.heading}>Websites and Social links</h3>
        {links.map((link, index) =>
            <SocialItem 
                key={index} 
                index={index} 
                link={link}
            />
        )}
        <p className={style.link} onClick={addSocial}>
            <FaPlus className={style.plusIcon} />
            <span className=''> Add link</span>
        </p>  
    </div>
  )
}

export default SocialIndex
