const express = require('express')
const router = express.Router();

const FeedBackService = require('../services/FeedBackService');
const feedBackService = new FeedBackService('./data/feedback.json');
router.get('/', async (req, res) => {
    const feedbacks = await feedBackService.getList();
    res.json(feedbacks);
})


module.exports = router;