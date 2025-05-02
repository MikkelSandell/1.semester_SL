import fs from 'fs'; //file system

// const response = await fetch('https://www.proshop.dk/Baerbar')
// const resault = await response.text()
// fs.writeFileSync("index.html", resault)

import { load } from 'cheerio'; //cheerio is a fast, flexible, and lean implementation of core jQuery designed specifically for the server

const page = await fs.readFileSync('index.html', "utf-8") //read the file index.html

const $ = load(page) //load the page into cheerio

$("product [product]").each((index, element) =>{
    const name = $(element).find(".side-product-link").text()
    const price = $(element).find(".site-currency-lg").text()

    console.log(name.trim, price);
    console.log("===================================");
});