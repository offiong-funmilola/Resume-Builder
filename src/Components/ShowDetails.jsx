import React from 'react'
import {useContext} from 'react'
import ResumeContext from '../Context/ResumeContext'

const style = {
    detailWrapper: `w-5/6 h-5/6 flex flex-col`,
    fName: `text-base font-sans font-semibold text-white`,
    lName: `text-base font-sans font-semibold text-white pl-7 mb-2`,
    role: `text-xs font-sans text-white text-center mb-4`,
    detailContainer: `w-full font-sans text-white`,
    detailHeading: `text-xs font-semibold mb-1`,
    subHeading: `text-xs font-semibold mt-2 mb-1 text-white`,
    detailPara: `text-[8px] mb-1 text-white`,
    lText: `text-[8px]`,
    skillContainer: `w-3/4 bg-inherit text-white`,
    input: `w-full`,
    linkText: `text-[8px] text-white underline underline-offset-1`
}

function ShowDetails() {
    const {user, captalizeFirstLetter, firstLetterUpper, skills, languages, links, hobbies} = useContext(ResumeContext)

    const showProficiency = (lang) => {
        switch (lang) {
            case 'Native speaker':
                return 100
            case 'Highly proficient':
                return 80
            case 'Very good command':
                return 50
            default:
                return 100
        }
    }
    return (
        <div className={style.detailWrapper}>
            {user && 
                <>
                    <h3 className={style.fName}>{firstLetterUpper(user.firstName)}</h3>
                    <h3 className={style.lName}>{captalizeFirstLetter(user.lastName)} </h3>
                    <p className={style.role}>{user.role}</p>
                    <div className={style.detailContainer}>
                        <h4 className={style.detailHeading}>Details</h4>
                        <p className={style.detailPara}>{user.city ? `${captalizeFirstLetter(user.city)},` : ''} {captalizeFirstLetter(user.country)}</p>
                        <p className={style.detailPara}>{user.phone}</p>
                        <p className={style.lText}>{user.email}</p>
                    </div>
                </>
            }
            {links && links.length > 0 &&
                <>
                <h4 className={style.subHeading}>Links</h4>
                {links.map((link, index)=> 
                    <div key={index} className={style.detailContainer}>
                        <a href={link.link} rel='noreferrer' target='_blank'><p className={style.linkText}>{link.label}</p></a>    
                    </div>
                )}
                </>
            }
            
            {skills && skills.length > 0 &&
                <>
                    <h4 className={style.subHeading}>Skills</h4>
                    {skills.map((skill, index)=> 
                        <div key={index} className={style.detailContainer}>
                            <p className={style.detailPara}>{skill.skill}</p>
                            <div className="w-full bg-gray-500 rounded h-1.5 dark:bg-gray-500 mr-2">
                                <div className={`bg-white h-1.5 rounded dark:bg-white`} style={{width: `${skill.level}%`}}></div>
                            </div>
                        </div>
                    )}
                </>
            }
            {languages && languages.length > 0 &&
                <>
                <h4 className={style.subHeading}>Languages</h4>
                {languages.map((language, index)=> 
                    <div key={index} className={style.detailContainer}>
                        <p className={style.detailPara}>{language.language}</p>
                        <div className="w-full bg-gray-500 rounded h-1.5 dark:bg-gray-500 mr-2">
                            <div className={`bg-white h-1.5 rounded dark:bg-white`} style={{width: `${language.level? showProficiency(language.level) : '100'}%`}}></div>
                        </div>
                    </div>
                )}
                </>
            }
            {hobbies &&
                <>
                    <h4 className={style.subHeading}>Hobbies</h4>
                    <p className={style.detailPara}>{hobbies}</p>
                </>
            }
            
        </div>  
    )
}

export default ShowDetails