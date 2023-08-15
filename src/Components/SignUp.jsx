import React from 'react'
import {useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaRegEye, FaRegEyeSlash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ResumeContext from '../Context/ResumeContext';

const style = {
    formContainer: `w-full h-screen flex items-center justify-center`,
    formWraper: `w-full md:w-1/2 h-3/4 md:h-5/6 bg-white flex flex-col items-center border-0 md:border border-gray-200 md:pt-7`,
    form: `w-5/6 h-3/4 px-2 md:px-5 md:px-10 bg-white flex flex-col justify-center`,
    inputDiv: `w-full mb-4 md:mb-3`,
    inputPassword: `w-full relative mb-4 md:mb-3`,
    formBtn: `w-full p-3 bg-green-500 text-white rounded-full text-xl`,
    error: `text-red-500 text-sm px-5`,
    hide: `absolute top-1 translate-y-2/3 right-4 text-xl`,
    formInput: `w-full p-3 border border-gray-400 rounded-full text-lg font-sans text-black bg-white`,
    minorContainer: `w-full text-center`,
    // demacate: `w-full border-2 border-gray-400 flex flex-col`,
    // w-full h-10 p-3 border border-gray-400 rounded-full
    account: `font-sans font-semibold text-lg`,
    span: `text-green-500 text-base font-sans cursor-pointer`,
    formHeading: `font-sans font-semibold text-2xl text-green-500`,
}

function SignUp() {
    const {passwordhandler, confirmHandler, retrieveUserCvs, makePostRequest, login, type } = useContext(ResumeContext)
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Enter a valid email')
                    .required('This field is required'),
            password: Yup.string()
                        .required('This field is required'), 
        }),
        onSubmit: async (values) => {
            let { confirmPassword, ...data } = values
            if (formik.isValid) {
                let response = await makePostRequest(`/api/v1/register`, data)
                console.log(response)
                if (response && response.user) {
                    retrieveUserCvs()
                    login(data.user)
                }
            }
        }
    });

    return (
        <div className={style.formContainer}>
            <div className={style.formWraper}>
                <h3 className={style.formHeading}>Create an account with us</h3>
                <form className={style.form} onSubmit={formik.handleSubmit}>
                    {/* <div className={style.inputDiv}>
                        <label htmlFor='name' className='hidden'>name</label>
                        <input type='text' id='name' name='name' placeholder='Username' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className={style.formInput} />
                        {formik.errors.name && formik.touched.name && <p className={style.error}>{formik.errors.name}</p>}
                    </div> */}
                    <div className={style.inputDiv}>
                        <input type='email' id='email' name='email' placeholder='Email Address' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={style.formInput}/>
                        {formik.errors.email && formik.touched.email && <p className={style.error}>{formik.errors.email}</p>}
                    </div>
                    <div className={style.inputPassword}>
                        <input type={type} id='password' name='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className={style.formInput}/>
                        {type === 'password' ? <FaRegEyeSlash onClick={passwordhandler} className={style.hide}/> : <FaRegEye onClick={confirmHandler} className={style.hide}/>}
                        {formik.errors.password && formik.touched.password && <p className={style.error}>{formik.errors.password}</p>}
                    </div>
                    {/* <div className={style.inputPassword}>
                        <input type={type} id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className={style.formInput}/>
                        {type === 'password' ? <FaRegEyeSlash onClick={passwordhandler} className={style.hide}/> : <FaRegEye onClick={confirmHandler} className={style.hide}/>}
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && <p className={style.error}>{formik.errors.confirmPassword}</p>}
                    </div> */}
                    <button type='submit' className={style.formBtn} disabled={!formik.isValid}>Sign Up</button>   
                </form>
                
                <div className={style.minorContainer}>
                    <p className={style.account}>Already have an account? <span className={style.span}>
                        <Link to='/login'>Login here</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
