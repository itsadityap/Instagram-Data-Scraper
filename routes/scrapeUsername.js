const express = require('express');
const router = express.Router();
const scrapeProfileController = require('../controllers/scrape-profile');

router.get('/scrape/:username',
            scrapeProfile);

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


module.exports = router;