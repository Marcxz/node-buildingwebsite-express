const express = require('express');
const router = express.Router();

const SpeakerService = require('../services/SpeakerService');
const speakerService = new SpeakerService('./data/speakers.json');

router.get('/', async (req, res) => {
    const speakers = await speakerService.getList()
    return res.json(speakers)
})

module.exports = router;