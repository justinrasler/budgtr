const express = require('express');
const app = express();
const budget = require('./models/budget');
// const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
// app.use(methodOverride('_method'))


app.get('/budget/', (req,res) => {
    res.render('index.ejs', {allBudget: budget})
});

app.get('/budget/new', (req,res) => {
    res.render('new.ejs')
});

app.post('/budget', (req, res) => {
    budget.push(req.body)
    res.redirect('/budget')
})

app.get('/budget/:indexOfBudgetArray', (req, res) => {
    res.render("show.ejs", {budgets: budget[req.params.indexOfBudgetArray]})
  })

app.listen(3000, () => {
    console.log("listening on port 3000")
})
