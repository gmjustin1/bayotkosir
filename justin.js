const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const FIRST_NAME = 'JUSTIN';
const LAST_NAME = 'COMENDADOR';
const AGE = 21;
const SCHOOL_EMAIL = 'just.comendador.swu@phinmaed.com';

app.get('/firstname', (req, res) => {
    res.send(FIRST_NAME);
});

app.get('/lastname', (req, res) => {
    res.send(LAST_NAME);
});

app.get('/age', (req, res) => {
    res.send(AGE.toString());
});

app.get('/schoolemail', (req, res) => {
    res.send(SCHOOL_EMAIL);
});

app.get('/mydata', (req, res) => {
    const data = {
        first_name: FIRST_NAME,
        last_name: LAST_NAME,
        age: AGE,
        school_email: SCHOOL_EMAIL
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
