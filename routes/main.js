const express = require('express');
const bodyParser = require("body-parser");
const multer  = require('multer');
const authInterceptor = require('../lib/authInterceptor');

const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage });

// Controllers
const CvController = require('../controllers/CvController');

// CV routes
router.get('/api/v1/user-cvs', authInterceptor, CvController.retrieveCVs);
router.get('/api/v1/cv/:cvId/data', authInterceptor, CvController.getCvData)
router.get('/api/v1/save-data', authInterceptor, upload.single('photo'), CvController.saveCvData);
router.put('/api/v1/update-data', authInterceptor, upload.single('photo'), CvController.updateCvData);
router.delete('/api/v1/delete-data', authInterceptor, CvController.deleteCvData);

module.exports = router;
