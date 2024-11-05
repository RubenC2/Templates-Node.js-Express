const missionController = require('../controllers/mission.web.controller');
const router = require('express').Router();

router.get("/", missionController.getMission);

module.exports = router;