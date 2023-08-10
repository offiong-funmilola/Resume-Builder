import React from 'react'
import {useContext} from 'react'
import ResumeContext from '../Context/ResumeContext'

const style = {
    detailWrapper: `w-5/6 h-5/6 flex flex-col`,
    fName: `text-base font-sans font-semibold text-white`,
    lName: `text-base font-sans font-semibold text-white pl-7 mb-2`,
    role: `text-xs font-sans text-white text-center mb-4`,
    detailContainer: `w-full font-sans text-white`,
    detailHeading: `text-xs font-semibold mb-2 text-white`,
    detailPara: `text-[8px] mb-1 text-white`,
    lText: `text-[8px]`,
    skillContainer: `w-3/4 bg-inherit text-white`,
    input: `w-full`
}

function ShowDetails() {
    const {user, captalizeFirstLetter, firstLetterUpper, skills, languages, links, hobbies} = useContext(ResumeContext)
    
    return (
        <div className={style.detailWrapper}>
            {user && 
                <>
                    <h3 className={style.fName}>{firstLetterUpper(user.firstName)}</h3>
                    <h3 className={style.lName}>{captalizeFirstLetter(user.lastName)} </h3>
                    <p className={style.role}>{user.role}</p>
                    <div className={style.detailContainer}>
                        <h4 className={style.detailHeading}>Details</h4>
                        <p className={style.detailPara}>{captalizeFirstLetter(user.city)}</p>
                        <p className={style.detailPara}>{captalizeFirstLetter(user.country)}</p>
                        <p className={style.detailPara}>{user.phone}</p>
                        <p className={style.lText}>{user.email}</p>
                    </div>
                </>
            }
            {links && links.length > 0 &&
                <>
                <h4 className={style.detailHeading}>Links</h4>
                {links.map((link, index)=> 
                    <div key={index} className={style.detailContainer}>
                        <a href={link.link} rel='noreferrer' target='_blank' className={style.detailPara}>{link.label}</a>    
                    </div>
                )}
                </>
            }
            
            {skills && skills.length > 0 &&
                <>
                    <h4 className={style.detailHeading}>Skills</h4>
                    {skills.map((skill, index)=> 
                        <div key={index} className={style.detailContainer}>
                            <p className={style.detailPara}>{skill.skill}</p>
                            <div className='w-3/4 bg-inherit text-white'>
                                <input type="range" min='0' max="100" value={skill.level} className={style.input}></input>
                            </div>
                            
                        </div>
                    )}
                </>
            }
            {languages && languages.length > 0 &&
                <>
                <h4 className={style.detailHeading}>languages</h4>
                {languages.map((language, index)=> 
                    <div key={index} className={style.detailContainer}>
                        <p className={style.detailPara}>{language.language}</p>
                        <p className={style.detailPara}>{language.level}</p>
                    </div>
                )}
                </>
            }
            {hobbies &&
                <>
                    <h4 className={style.detailHeading}>Hobbies</h4>
                    <p className={style.detailPara}>{hobbies}</p>
                </>
            }
            
        </div>  
    )
}

export default ShowDetails