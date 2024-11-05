const locationController = require('../controllers/location.web.controller');
const router = require('express').Router();

router.get("/", locationController.getLocation);

module.exports = router;