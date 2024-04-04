const express = require('express');
const router = express.Router();
const axios = require('axios');

const compression = require('compression');

// compress all responses
router.use(compression({ filter: shouldCompress }))

// filter function to determine if response should be compressed
function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
    // don't compress responses with this request headers
        return false
    }
    // falback standard filter function
    return compression.filter(req, res)
}

router.get('/tvwscivics', async (req, res) => {
    const url = 'http://broker.digitalubiquitycapital.com:1026/v2/entities?type=TVWS_RJCivics_GSA&limit=1000&options=keyValues';
    axios.get(url).then((response) => {
        res.json(response.data);
    }).catch(error => {
        res.status(500).send('Status: Internal Server Error')
    });     
});

module.exports = router
