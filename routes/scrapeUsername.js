const express = require('express');
const router = express.Router();
const scrapeProfileController = require('../controllers/scrape-profile');
const scrapeProfilePostCountController = require('../controllers/scrape-profile-pc');

router.get('/scrape/:username',
            scrapeProfile);

router.get('/scrape/:username/:postCount', 
            scrapeProfilePostCount);

async function scrapeProfile(req, res) {
    scrapeProfileController.
            scrapeProfile(req, res)
            .then((result) => {})
            .catch((err) => {
                res.status(500).json({
                    message: 'Something went wrong',
                    error: err
                });
            });
}

async function scrapeProfilePostCount(req, res) {
    scrapeProfilePostCountController.
            scrapeProfilePostCount(req, res)
            .then((result) => {})
            .catch((err) => {
                res.status(500).json({ 
                    message: 'Something went wrong',
                    error: err
                });
            });
}


module.exports = router;