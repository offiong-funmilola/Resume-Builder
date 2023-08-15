import React, { useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"
import PersonalDetails from './PersonalDetails'
import Bio from './Bio'
import Experience from './Experience'
import Education from './Education' 
import Activity from './Activity'
import ShowDetails from './ShowDetails'
import Content from './Content'
import Course from './Course'
import Social from './Social'
import Skill from './Skill'
import Language from './Language'
import Internship from './Internship'
import Reference from './Reference'
import Hobby from './Hobby'
import {style} from './styles'
import Logout from './Logout';
import ResumeContext from '../Context/ResumeContext'

function CVData() {
  let params = useParams()
  const { retrieveCvData } = useContext(ResumeContext)

  useEffect(() => {
    retrieveCvData(params.cvId)
  })

  return (
    <>
      <Logout />
      <div className={style.mainContainer}>
        <div className={style.main}>
          <PersonalDetails />
          <Bio />
          <Experience /> 
          <Education />
          <Social />
          <Skill />
          <Course /> 
          <Internship />
          <Language />
          <Activity />
          <Reference />
          <Hobby />     
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
    </>
  )
}

export default CVData
