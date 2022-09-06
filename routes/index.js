const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

router.get('/', (req, res) => {
    /*
    if (!req.session.visitcount) {
        req.session.visitcount = 0;    
    }
    req.session.visitcount += 1;
    console.log(`Number of visits: ${req.session.visitcount}`);
    */

    res.render('layout/index', { pageTitle: 'Welcome', template: 'index'});
});

router.get('/hello', (req, res) => {
    res.send('Hello World!');
})

router.use('/speakers', speakersRoute);
router.use('/feedback', feedbackRoute);

module.exports = router;