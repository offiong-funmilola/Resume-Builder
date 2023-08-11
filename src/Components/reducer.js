import { reducerConstants } from './reducerConstants'

const reducer = (state, action) => {
    switch(action.type) {
        case reducerConstants.USER_DETAILS:
            if (action.payload === '') {
                return {...state, user: state.user}
            }
            return {...state, user: {...state.user, [action.payload.name]: action.payload.value}};
        case reducerConstants.ADD_EXPERIENCE:
            let experiencesList = [...state.experiences]
            experiencesList.push(action.payload)
            return {
                ...state,
                experiences: experiencesList
            };
        case reducerConstants.UPDATE_EXPERIENCE:
            let updateExperiences = [...state.experiences]
            updateExperiences.splice(action.index, 1, {
                ...updateExperiences[action.index],
                [action.payload.name]: action.payload.value
            })
            return {
                ...state,
                experiences: updateExperiences
            };
        case reducerConstants.DELETE_EXPERIENCE:
            return {
                ...state,
                experiences: state.experiences.filter((item, index) => index !== action.index)
            };
        case reducerConstants.ADD_EDUCATION:
            let educationLists = [...state.educations]
            educationLists.push(action.payload)
            return {
                ...state, 
                educations: educationLists
            };
        case reducerConstants.UPDATE_EDUCATION:
            let updateEducations = [...state.educations]
            updateEducations.splice(action.index, 1, {
                ...updateEducations[action.index], 
                [action.payload.name]: action.payload.value
            })
            return {...state, educations: updateEducations};
        case reducerConstants.DELETE_EDUCATION:
            return {
                ...state, 
                educations: state.educations.filter((it, index) => index !== action.index)
            }
        case reducerConstants.ADD_COURSE:
            let coursesList = [...state.courses]
            coursesList.push(action.payload)
            return {
                ...state,
                courses: coursesList
            };
        case reducerConstants.UPDATE_COURSE:
            let updateCourses = [...state.courses]
            updateCourses.splice(action.index, 1, {
                ...updateCourses[action.index], [action.payload.name]: action.payload.value
            })
            return {...state, courses: updateCourses};
        case reducerConstants.DELETE_COURSE:
            return {
                ...state,
                courses: state.courses.filter((it, index) => index !== action.index)
            };
        case reducerConstants.ADD_SOCIAL:
            let linksList = [...state.links]
            linksList.push(action.payload)
            return {...state, links: linksList};
        case reducerConstants.UPDATE_SOCIAL:
            let updateLinks = [...state.links]
            updateLinks.splice(action.index, 1, {
                ...updateLinks[action.index], 
                [action.payload.name]: action.payload.value
            })
            return {...state, links: updateLinks};
        case reducerConstants.DELETE_SOCIAL:
            return {
                ...state,
                links: state.links.filter((it, index)=> index !== action.index)
            };
        case reducerConstants.ADD_SKILL:
            let skillsList = [...state.skills]
            skillsList.push(action.payload)
            return {...state, skills: skillsList};
        case reducerConstants.UPDATE_SKILL:
            let updateSkills = [...state.skills]
            updateSkills.splice(action.index, 1, {
                ...updateSkills[action.index], 
                [action.payload.name]: action.payload.value
            })
            return {...state, skills: updateSkills};
        case reducerConstants.DELETE_SKILL:
            return {
                ...state,
                skills: state.skills.filter((it, index)=> index !== action.index)
            };
        case reducerConstants.ADD_LANGUAGE:
            let languagesList = [...state.languages]
            languagesList.push(action.payload)
            return {
                ...state,
                languages: languagesList
            };
        case reducerConstants.UPDATE_LANGUAGE:
            let updateLanguages = [...state.languages]
            updateLanguages.splice(action.index, 1, {
                ...updateLanguages[action.index], 
                [action.payload.name]: action.payload.value
            })
            return {...state, languages: updateLanguages};
        case reducerConstants.DELETE_LANGUAGE:
            return {
                ...state,
                languages: state.languages.filter((it, index) => index !== action.index)
            };
        case reducerConstants.ADD_ACTIVITY:
            let activitiesList = [...state.activities]
            activitiesList.push(action.payload)
            return {
                ...state,
                activities: activitiesList
            };
        case reducerConstants.UPDATE_ACTIVITY:
            console.log(action)
            let updateActivities = [...state.activities]
            updateActivities.splice(action.index, 1, {
                ...updateActivities[action.index],
                [action.payload.name]: action.payload.value,
            })
            return {
                ...state,
                activities: updateActivities
            };
        case reducerConstants.DELETE_ACTIVITY:
            return{
                ...state, 
                activities: state.activities.filter((it, index) => index !== action.index )
            };
        case reducerConstants.ADD_REFERENCE:
            let referencesList = [...state.references]
            referencesList.push(action.payload)
            return {
                ...state,
                references: referencesList
            };
        case reducerConstants.UPDATE_REFERENCE:
            let updatereferences = [...state.references]
            updatereferences.splice(action.index, 1, {
                ...updatereferences[action.index],
                [action.payload.name]: action.payload.value,
            })
            return {
                ...state,
                references: updatereferences
            };
        case reducerConstants.DELETE_REFERENCE:
            return{
                ...state, 
                references: state.references.filter((it, index) => index !== action.index)
        };
        case reducerConstants.ADD_INTERNSHIP:
            let internshipsList = [...state.internships]
            internshipsList.push(action.payload)
            return {
                ...state,
                internships: internshipsList
            };
        case reducerConstants.UPDATE_INTERNSHIP:
            let updateInternships = [...state.internships]
            updateInternships.splice(action.index, 1, {
                ...updateInternships[action.index],
                [action.payload.name]: action.payload.value,
            })
            return {
                ...state,
                internships: updateInternships
            };
        case reducerConstants.DELETE_INTERNSHIP:
            return{
                ...state, 
                internships: state.internships.filter((it, index) => index !== action.index)
            };
        case reducerConstants.ADD_HOBBY:
            if(action.payload === ''){
                return {...state}
            }
            return {...state, hobbies: action.payload};
        default:
            return state;
    }
}
export default reducer