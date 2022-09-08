const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes')
const cookieSession = require('cookie-session');
const createError = require('http-errors');
const { response } = require('express');

app.set('trust proxy', 1) // trust first proxy')

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.locals.siteName = 'ROUX Meetups';

app.use(express.static(path.join(__dirname, './static')));

app.use((req, res, next) => {
    res.locals.someVariable = 'This is a local variable';
    return next();
});

app.use('/', routes);


app.use((req, res, next) => {
    return next(createError(404, 'File not found'));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500;
    res.locals.status = status;
    res.status(status);
    return res.render('layout/index', { pageTitle: 'An error appears', status: status, message: err.message, template: 'error'});

})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})