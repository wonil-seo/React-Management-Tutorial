const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/customers", (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': 'wonil-seo',
        'birthday': '1111',
        'gender': 'male',
        'job': 'student'  
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'wonil-aaa',
            'birthday': '2222',
            'gender': 'female',
            'job': 'student'  
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'wonil-bbb',
            'birthday': '3333',
            'gender': 'male',
            'job': 'student'  
        }
    ]);

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});