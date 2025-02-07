import express from "express";

const app = express();

app.get("/", (req, res) =>{
    res.send({data:"secend express server"})
})

const PORT = 8080;