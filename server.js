const express = require('express');
const app = express(); 
const debug = require('debug')('app:server');



const port = process.env.PORT || 3009;

// route files
const fiveG_Route = require('./routes/fiveG');
const tvws_Route = require('./routes/tvws');

// Mount routers
app.use('/fiveG', fiveG_Route); // path to the file
app.use('/tvws', tvws_Route);

app.listen(port, () => {
    debug(`Server is running on port ${port}`)
});