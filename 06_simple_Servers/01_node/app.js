import express from 'express';

const app =express();

app.get("/", (req, res) => {
    res.send({data: "root rout"});
});

app.get("/grettings", (req, res) => {
    res.send({data: "halløj"});
});


app.listen(8080);