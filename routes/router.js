import express from 'express';
import moment from 'moment';

let router = express.Router();
router.get('/', async function (req, res) {
    let today = new moment().format('YYYY-MM-DD HH:mm:ss')
    let title = 'full-stack-template'
    res.render('index', {
        today,
        title
    });
    console.log("booking connect")
});

// router.get('/test', async function (req, res) {
//     let centerMember = 'asd'
//     res.send(JSON.stringify({
//         centerMember,
//     }));
// })

// eslint-disable-next-line no-undef
module.exports = router;