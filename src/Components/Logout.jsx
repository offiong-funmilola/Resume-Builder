import React from 'react'
import { useContext } from 'react'
import ResumeContext from '../Context/ResumeContext'
import {FaSignOutAlt} from 'react-icons/fa'

function Logout() {
    const { logout, makePostRequest } = useContext(ResumeContext)
    
    const performLogout = () => {
        let response = makePostRequest(`/api/v1/logout`)
        if (response.success) {
            logout()
        }
    }

    return (
        <div className='inline-block absolute top-3 right-3 md:top-5 md:right-5 p-4'>
            <FaSignOutAlt onClick={performLogout} />
        </div>
    )
}

export default Logout
