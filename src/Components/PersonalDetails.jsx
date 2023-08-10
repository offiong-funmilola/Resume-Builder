import React from 'react'
import {useContext} from 'react'
import ResumeContext from '../Context/ResumeContext'
import { reducerConstants } from './reducerConstants'

const style = {
    container : `w-full h-[5ovh] p-5`,
    form: `w-full px-5 py-5`,
    heading: `text-xl font-sans font-semibold mb-3`,
    wrapper: `w-full flex row `,
    inputContainer: `w-1/2 text-xl font-sans flex flex-col mb-2`,
    label: `block mb-1 self-start`,
    labelRight: ` block mb-1 self-center`,
    inputRight: `px-5 py-3 focus:outline-none self-end bg-gray-100`,
    input: `px-5 py-3 focus:outline-none self-start bg-gray-100`,
}

function PersonalDetails() {
    const {user, dispatch} = useContext(ResumeContext)

    return (
        <div className={style.container}>
            {/* <form className={style.form}> */}
                <h3 className={style.heading}>Personal Details</h3>
                <div className={style.wrapper}>
                    <div className={style.inputContainer}>
                        <label htmlFor='role' className={style.label}>Wanted Job Title</label>
                        <input
                            id='role'
                            type='text'
                            name='role'
                            className={style.input}
                            value={user.role}
                            onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload: {name: e.target.name, value: e.target.value}})}
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor='photo' className={style.labelRight}>Upload Photo</label>
                        <input 
                            id='photo'
                            type='file' 
                            name='photo' 
                            accept='image/png, image/jpeg' 
                            className='' 
                            value={user.photo} 
                            onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload: {name: e.target.name, value: e.target.value}})}/>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.inputContainer}>
                        <label htmlFor='firstName' className={style.label}>First Name</label>
                        <input
                            id='firstName'
                            type='text' 
                            name='firstName' 
                            className={style.input} 
                            value={user.firstName} 
                            onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload: {name: e.target.name, value: e.target.value}})}
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor='lastName' className={style.labelRight}>Last Name</label>
                        <input
                            id='lastName' 
                            type='text' 
                            name='lastName'  
                            className={style.inputRight} 
                            value={user.lastName} 
                            onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload: {name: e.target.name, value: e.target.value}})}
                        />
                    </div>
                </div> 
                <div className={style.wrapper}>   
                    <div className={style.inputContainer}>
                        <label htmlFor='email' className={style.label}>Email</label>
                        <input 
                            id='email'
                            type='text' 
                            name='email'  
                            className={style.input} 
                            value={user.email} 
                            onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload: {name: e.target.name, value: e.target.value}})}
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor='phone' className={style.labelRight}>Phone</label>
                        <input 
                            id='phone'
                            type='tel' 
                            name='phone'  
                            className={style.inputRight} 
                            value={user.phone} 
                            onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload: {name: e.target.name, value: e.target.value}})}
                        />
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.inputContainer}>
                        <label htmlFor='country' className={style.label}>Country</label>
                        <input 
                            id='country'
                            type='text' 
                            name='country'  
                            className={style.input} 
                            value={user.country} 
                            onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload: {name: e.target.name, value: e.target.value}})}
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor='city' className={style.labelRight}>City</label>
                        <input 
                            id='city' 
                            type='text' 
                            name='city' 
                            className={style.inputRight} 
                            value={user.city} 
                            onChange={(e) => dispatch({type:reducerConstants.USER_DETAILS, payload: {name: e.target.name, value: e.target.value}})}/>
                    </div>
                </div>
            {/* </form> */}
        </div>
    )
}

export default PersonalDetails