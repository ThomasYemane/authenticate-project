// backend/routes/index.js
const express = require('express');
const { xor } = require('lodash');
const router = express.Router();

// router.get('/hello/world', function (req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.send('Hello world!');
// });

router.get("api/csrf/restore", (req,res) =>  {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});

module.exports = router;