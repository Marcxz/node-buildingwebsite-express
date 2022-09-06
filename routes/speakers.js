const express = require('express');
const router = express.Router();

const SpeakerService = require('../services/SpeakerService');
const speakerService = new SpeakerService('./data/speakers.json');

router.get('/', async (req, res) => {
    try {
        const speakers = await speakerService.getList()    
        res.render('layout/index', { pageTitle: 'Speakers', template: 'speakers', speakers});
    } catch (err) {
        console.log(err);
    }
})

router.get('/:shortname', async (req, res) => {
    try {
        const speaker = await speakerService.getSpeaker(req.params.shortname);
        const artwork = await speakerService.getArtworkForSpeaker(req.params.shortname);
        res.render('layout/index', { pageTitle: 'Speaker Info', template: 'speakerDetail', speaker, artwork});
    } catch (error) {
        console.log(error);
        next(error);
    }
})
module.exports = router;