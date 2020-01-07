const express = require('express');
const router = express.Router()

//import controllers here
const HomeController = require('../controllers/HomeController');
const DashboardController = require('../controllers/DashboardController');
const ExperienceController = require('../controllers/ExperienceController');
const ProjectController = require('../controllers/ProjectController');

//I captured the admin route here
router.use('/dashboard',DashboardController.dashboard)
router.use('/experience',ExperienceController.experience)
router.use('/project',ProjectController.projects)

//I captured the landing routes here
router.use('/details',HomeController.details)
router.use('/',HomeController.home)

//export the routes to index
module.exports = router