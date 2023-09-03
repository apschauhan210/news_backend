const express = require('express');
const app = express();
app.use(express.json());

app.get("/fetch_news", async (req, res) => {
    // console.log(req.body);
    if(req.body.url) {
        const response = await fetch(req.body.url);
        const newsData = await response.json();
        return res.json(newsData);
    }
    return res.json("URL required to fetch news");
})

app.get("/", (req, res) => {
    res.json("Welcome to News API");
})


const port = process.env.port || 3030;
app.listen(port, () => {
    console.log("Server started");
})