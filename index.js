const express = require('express');
const app = express();

const PORT = process.env.PORT | 5000; //the first is for the cyclic server and 5000 for localhost

app.get('/', (req, res) => {
    res.json({"number": "12345"});
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
