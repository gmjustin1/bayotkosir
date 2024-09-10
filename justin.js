const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const FIRST_NAME = 'JOHN';
const LAST_NAME = 'DOE';
const AGE = 20;
const SCHOOL_EMAIL = 'johndoe@school.edu';

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
