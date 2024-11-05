const aboutController = require('../controllers/about.web.controller');
const router = require('express').Router();

router.get("/", aboutController.getAbout);

module.exports = router;