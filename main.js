const express = require('express');
app = express();

app.use(() => {
    console.log('connection')
})

app.listen(1234);