import express from "express";

const app = express();

app.use(express.static("public"));

const randomnumbers = [1,25,574]

app.get("/randomnumber", (req, res) =>{
    res.send({data: randomnumbers});
});

app.get("/simulatenewnumbers", (req,res) =>{
    const newnumber = getRandomInt(0,100);
    randomnumbers.push(newnumber);

    res.send({data:newnumber })
});


function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}


const PORT = 8080;
app.listen(PORT, () => console.log('server is runnung port', PORT));