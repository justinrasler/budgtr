const express = require("express");
const app = express()
const budget = require("./models/budget")


app.use(express.static('public'))

app.get("/budget", (req,res) => {
    res.render('index.ejs', {allBudget:budget})
})
app.get("/budget/:indexOfBudgetArray", (req,res) => {
    res.send(budget[req.params.indexOfBudgetArray])
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})
