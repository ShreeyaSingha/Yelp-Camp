const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds')
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateCampground, isAuthor } = require('../middleware');

const Campground = require('../models/campground');

router.route('/')
    .get(campgrounds.index)
    .post(isLoggedIn, validateCampground, campgrounds.createCampground)

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(campgrounds.showCampground)
    .put(isLoggedIn, isAuthor, validateCampground, campgrounds.updateCampground)
    .delete(isLoggedIn, isAuthor, campgrounds.deleteCampground)

router.get('/:id/edit', isLoggedIn, isAuthor, campgrounds.renderEditForm)



// router.get('/', campgrounds.index)

// router.get('/new', isLoggedIn, campgrounds.renderNewForm)

// router.post('/', isLoggedIn, validateCampground, campgrounds.createCampground)

// router.get('/:id', campgrounds.showCampground)

// router.get('/:id/edit', isLoggedIn, isAuthor, campgrounds.renderEditForm)

// router.put('/:id', isLoggedIn, isAuthor, validateCampground, campgrounds.updateCampground)

// router.delete('/:id', isLoggedIn, isAuthor, campgrounds.deleteCampground)

module.exports = router;
