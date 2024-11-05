const contactController = require('../controllers/contact.web.controller');
const router = require('express').Router();

router.get("/", contactController.getContact);

module.exports = router;