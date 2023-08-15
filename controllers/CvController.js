const CvService = require('../services/CvService');

// Controller
let CvController = {
    retrieveCVs: (req, res) => {
        CvService.retrieveCVs(req, res)
    },

    getCvData: (req, res) => {
        CvService.getCvData(req, res)
    },

    saveCvData: (req, res) => {
        CvService.saveCvData(req, res)
    },

    updateCvData: (req, res) => {
        CvService.updateCvData(req, res)
    },

    deleteCvData: (req, res) => {
        CvService.deleteCvData(req, res)
    },
}

module.exports = CvController;