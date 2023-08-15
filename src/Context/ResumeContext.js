import { createContext, useReducer, useContext, useState} from "react";
import reducer from "../Components/reducer";
// import { toast } from 'react-toastify';

const ResumeContext = createContext()

export const ResumeProvider = ({ children }) => {
    const initialState = {
        user: {role: '', photo: '', firstName: '', lastName:'', email: '', phone: '', country: '', city: '', bio: ''},
        experiences: [],
        educations: [],
        links: [],
        skills: [],
        courses: [],
        languages: [],
        activities: [],
        references: [],
        internships: [],
        hobbies: ''
    };
    const [state, dispatch] = useReducer(reducer, initialState)
    const [type, setType] = useState('password')
    const [authUser, setAuthUser] = useState(null);
    const [cvList, setCvList] = useState([])
    const [checkAuth, setCheckAuth] = useState(false)    

    const captalizeFirstLetter = (str) => {
        str = str.charAt(0).toUpperCase() + str.slice(1);
        return str    
    };

    const firstLetterUpper = (str) => {
        if (str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            }
            return str.join(' ');    
        }
    };

    const makeUploadRequest = (url, formData) => {

    }

    const makePostRequest = async (url, data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data)
        })
        return await response.json()
    }

    const makeGetRequest = async (url, data) => {
        if (data) {
            let urlParams = new URLSearchParams(data).toString()
            url = `${url}?${urlParams}`
        }
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            }
        })
        return await response.json()
    }

    const passwordhandler = (e) => {
        setType('text')
    }
    const confirmHandler = (e)=>{
        setType('password')
    }
    // const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const login = (authUser) => {
        setAuthUser(authUser);
    }
    const logout = () => {
        setAuthUser(null);
    }

    const retrieveUserCvs = async () => {
        let cvs = await makeGetRequest('/api/v1/user-cvs')
        if (cvs.data) {

        }
        setCvList(cvs.data)
    }

    const retrieveCvData = async (cvId) => {
        let cvData = await makeGetRequest(`/api/v1/cv/${cvId}/data`)
        console.log(cvData)
        if (cvData) {

        }
    }

    return (
        <ResumeContext.Provider value={{
            user: state.user, 
            experiences: state.experiences,
            educations: state.educations, 
            links: state.links, 
            skills: state.skills, 
            courses: state.courses, 
            languages: state.languages, 
            activities: state.activities,
            references: state.references,
            hobbies: state.hobbies,
            internships: state.internships, 
            captalizeFirstLetter,
            dispatch,
            firstLetterUpper,
            passwordhandler,
            confirmHandler,
            type,
            // REGEX_PASSWORD,
            makePostRequest,
            makeGetRequest,
            makeUploadRequest,
            authUser, login, logout,
            cvList, retrieveUserCvs,
            checkAuth, setCheckAuth,
            retrieveCvData
        }}>
            {children}
        </ResumeContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(ResumeContext)
}

export default ResumeContext