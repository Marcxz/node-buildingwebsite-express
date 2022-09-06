const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes')
const cookieSession = require('cookie-session');

app.set('trust proxy', 1) // trust first proxy')

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})