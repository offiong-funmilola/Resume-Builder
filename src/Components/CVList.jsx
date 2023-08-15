import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ResumeContext from '../Context/ResumeContext'

const CVList = () => {
    const { cvList, makePostRequest } = useContext(ResumeContext)
    console.log(cvList)
    const [title, setTitle] = useState("")
    const navigate = useNavigate()

    const createCV = async (evt) => {
        evt.preventDefault()
        let cvData = await makePostRequest('/api/v1/', {title})
        if (cvData) {
            navigate(`/cvs/${cvData.id}`)
        }
    }

    return (
        <>
            {cvList && cvList.map(item => 
                <Link className='card' to={`/cvs/${item.id}`}>
                    {item.title}
                </Link>
            )}

            <hr />
            <form onSubmit={createCV} className='w-full h-3/4 bg-inherit flex flex-col items-center justify-center'>
                <h1 className='text-xl font-sans font-semibold mb-5'>Create CV</h1>
                <div className='w-3/4 mb-3'>
                    <input type='text' name='title' placeholder='CV Title' className='w-full border border-gray-400 bg-white p-3' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <button type='submit' className='w-3/4 bg-green-500 text-white text-lg p-3 font-sans font-semibold'>Create CV</button>
            </form>
        </>
    )
}

export default CVList
