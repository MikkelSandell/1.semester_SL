import express, { response } from 'express';


const app = express();

app.get("/expressData", (req, res) =>{
    //java script object, den har baldt andet en prototype object den bliver lavet om til json med send comanden
    res.send({data: "This is the data from Express"});
}); 

app.get("/requestFastAPIData", async (req, res) =>{
    const response = await fetch("http://127.0.0.1:8000/fastapiData");
    const resault = await response.json();

    res.send({data: resault.data});
});

app.get("/names/:name", (req, res) => {
    console.log(req.params.name);
    res.send( {data: `Your name is ${req.params.name}`});
})

app.get("/fullnames/:firstName/:lastName", (req, res) => {
    const { firstName, lastName } = req.params;
    
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
    
    res.send({ data: `Your name is ${firstName} ${lastName}` });
});

app.get("/hobbies", (req, res) => {
    const hobbies = req.query.hobbies;

    if (!hobbies) {
        return res.status(400).send({ error: "Please provide hobbies as query parameters." });
    }

    // Convert hobbies string to an array if it's a single string
    const hobbiesArray = Array.isArray(hobbies) ? hobbies : hobbies.split(",");

    console.log(`Hobbies received: ${hobbiesArray.join(", ")}`);

    res.send({ data: `Your hobbies are: ${hobbiesArray.join(", ")}` });
});



const PORT = 8080;
app.listen(PORT, () => console.log('server started on', PORT));