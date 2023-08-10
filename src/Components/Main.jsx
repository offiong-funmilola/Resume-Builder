import React from 'react'
import PersonalDetails from './PersonalDetails'
import Bio from './Bio'
import Experience from './Experience'
import EducationIndex from './Education/EducationIndex' 
import ActivityIndex from './Activity/ActivityIndex'
import ShowDetails from './ShowDetails'
import Content from './Content'
import CourseIndex from './Course/CourseIndex'
import SocialIndex from './Social/SocialIndex'
import SkillIndex from './Skill/SkillIndex'
import LanguageIndex from './Language/LanguageIndex'
import InternshipIndex from './Internship/InternshipIndex'
import ReferenceIndex from './Reference/ReferenceIndex'
import HobbyIndex from './Hobby/HobbyIndex'
import {style} from './styles'


function Main() {
  return (
    <div className={style.mainContainer}>
      <div className={style.main}>
        <PersonalDetails/>
        <Bio/>
        <Experience/> 
        <EducationIndex/>
        <SocialIndex />
        <SkillIndex/>
        <CourseIndex/> 
        <InternshipIndex/>
        <LanguageIndex/>
        <ActivityIndex />
        <ReferenceIndex/>
        <HobbyIndex/>     
      </div>
        <div className={style.displayContainer}>
          <div className={style.display}>
            <div className={style.left}>
              <ShowDetails/>
            </div>
            <div className={style.right}>
              <Content/>
            </div>
          </div>  
        </div>
      
    </div>
  )
}

export default Main
