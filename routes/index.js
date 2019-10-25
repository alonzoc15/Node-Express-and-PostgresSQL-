const express = require('express'),
    router = express.Router(),
    TracksModel = require('../models/tracks');

/* GET home page. */
router.get('/', async(req, res, next) => {
    const trackList = await TracksModel.getAll();

    res.render('template', {
        locals: {
            title: 'Racers start your engines!',
            trackData: trackList
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

router.get('/:track_id', async(req, res, next) => {
    const { track_id } = req.params;
    const theTrack = await TracksModel.getById(track_id);

    res.render('template', {
        locals: {
            title: 'This is one track',
            trackData: theTrack
        },
        partials: {
            partial: 'partial-single-track'
        }
    });
});

module.exports = router;