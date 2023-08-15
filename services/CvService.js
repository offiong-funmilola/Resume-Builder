const Database = require("../lib/database");

const DB = Database.Connect();

let instanceMap = {
    'profile': DB.PROFILE,
    'experience': DB.EXPERIENCE,
    'education': DB.EDUCATION,
    'activities': DB.ACTIVITIES,
    'courses': DB.COURSES,
    'languages': DB.LANGUAGES,
    'internships': DB.INTERSHIPS,
    'references': DB.REFERENCES,
    'skills': DB.SKILLS,
    'social': DB.SOCIAL,
}

let CvService = {
    retrieveCVs: async (req, res) => {
        let cvList = await this.getUserCvs(req.user.id)
        res.status(200).json({
            success: true,
            data: cvList.map(item => item.purge())
        })
    },

    getCvData: (req, res) => {
        let cvId = req.params.cvId
        let cvData = this.retrieveCvData(cvId)
        res.status(200).json({
            success: true,
            data: cvData
        })
    },

    saveCvData: (req, res) => {
        let { section, CvId, ...data } = req.body
        let responseData = this.saveNewData(instanceMap[section], cvId, data)
        res.status(200).json({
            success: true,
            data: {section, ...responseData.purge()}
        })
    },

    updateCvData: (req, res) => {
        let { section, id, ...data } = req.body
        let responseData = this.updateSectionData(instanceMap[section], id, data)
        res.status(200).json({
            success: responseData ? true : false,
            data: response ? {section, ...responseData.purge()} : null
        })
    },

    deleteCvData: (req, res) => {
        let { section, id } = req.body
        this.deleteSectionData(instanceMap[section], id)
        res.status(204).json({
            success: true
        })
    },

    getUserCvs: async (user_id) => {
        return await DB.CV.findAll({
            where: { user_id }
        })
    },

    getItem: async (instance, id) => {
        return await instance.findOne({
            where: { id }
        })
    },

    retrieveCvData: async (cv_id) => {
        let cvData = {}
        cvData.profile = await getCvProfile(cv_id)
        cvData.experience = await DB.EXPERIENCE.findAll({ where: { cv_id }}).map(item => item.purge())
        cvData.education = await DB.EDUCATION.findAll({ where: { cv_id }}).map(item => item.purge())
        cvData.activities = await DB.ACTIVITIES.findAll({ where: { cv_id }}).map(item => item.purge())
        cvData.courses = await DB.COURSES.findAll({ where: { cv_id }}).map(item => item.purge())
        cvData.internships = await DB.INTERSHIPS.findAll({ where: { cv_id }}).map(item => item.purge())
        cvData.languages = await DB.LANGUAGES.findAll({ where: { cv_id }}).map(item => item.purge())
        cvData.references = await DB.REFERENCES.findAll({ where: { cv_id }}).map(item => item.purge())
        cvData.skills = await DB.SKILLS.findAll({ where: { cv_id }}).map(item => item.purge())
        cvData.social = await DB.SOCIAL.findAll({ where: { cv_id }}).map(item => item.purge())
        return cvData
    },

    getCvProfile: async (cv_id) => {
        return await DB.PROFILE.findOne({ where: { cv_id }})
    },

    saveProfileData: async (cv_id, data) => {
        let currentProfile = this.getCvProfile(cv_id)
        if (!currentProfile) {
            return await DB.PROFILE.create({
                cv_id,
                ...data
            })
        }
        currentProfile.set(data)
        return await currentProfile.save() 
    },

    saveNewData: async (instance, cv_id, data) => {
        if (section === 'profile') {
            return await this.saveProfileData(cvId, data)
        }
        return await instance.create({
            cv_id,
            ...data
        })
    },

    updateSectionData: async (instance, id, data) => {
        let currentItem = await this.getItem(instance, id)
        if (currentItem) {
            currentItem.set(data)
            return await currentItem.save()
        }
        return null
    },
    
    deleteSectionData: async (instance, id) => {
        let currentItem = await this.getItem(instance, id)
        if (currentItem) {
            return await currentItem.destroy()
        }
        return null
    }
}

module.exports = CvService;