import express from 'express';
import moment from 'moment';
// import query from './mysql';

let router = express.Router();
router.get('/', async function (req, res) {
    res.render('index');
});
router.get('/test', async function (req, res) {
    res.render('test');
});


// eslint-disable-next-line no-undef
module.exports = router;