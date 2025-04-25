import express from 'express';
const app = express();

//lt --port 8000 -s teammate123
// lt --port 8080 -s mikkel2
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/githubwebhookjson", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);

});

app.post("/githubwebhookform", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});