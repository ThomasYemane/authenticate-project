const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

// CSRF Token Route
router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken(); // Ensure CSRF middleware is applied
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({ 'XSRF-Token': csrfToken });
});

// Mount API routes
router.use('/api', apiRouter);

module.exports = router;



// fetch(‘/api/test’, { 
//     methof: "POST",
//     headers: {
//         "Content-Type": "application/json"
//         "XSRF-TOKEN": `ohHVPSPM-TvjrEiyexeHrgM7K5SByF_K7Lto`
//     },
//     body: JSON.stringify({ hello: 'world' })
// }).then (res => res.json()). then(data => console.log(data));