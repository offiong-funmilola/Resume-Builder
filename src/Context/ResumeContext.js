import { createContext, useReducer} from "react";
import reducer from "../Components/reducer";

const ResumeContext = createContext()

export const ResumeProvider = ({children}) => {
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

    const captalizeFirstLetter = (str) => {
        str = str.charAt(0).toUpperCase() + str.slice(1);
        return str    
    };
    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };
    const firstLetterUpper = (str) => {
        if (str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            }
            return str.join(' ');    
        }
    }
    
    return(
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
            isEmpty,
            firstLetterUpper,
        }}>
            {children}
        </ResumeContext.Provider>
    )
    
}
export default ResumeContext