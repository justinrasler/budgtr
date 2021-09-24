const express = require('express');
const app = express();
const budget = require('./models/budget');



app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))



app.get("/budget", (req, res) => {
    const savings = budget.reduce(
      (acc, budgets) => acc + budgets.amount, 0
    );
    res.render("index.ejs", {savings: savings, allBudget: budget})
})

app.get('/budget/new', (req,res) => {
    res.render('new.ejs')
});

//found number constructor on mdn to put all numbers together in savings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
app.post('/budget', (req, res) => {
    budget.push(req.body)
    req.body.amount = Number(req.body.amount)
    res.redirect('/budget')
})

app.get('/budget/:indexOfBudgetArray', (req, res) => {
    res.render("show.ejs", {budgets: budget[req.params.indexOfBudgetArray]})
  })

  
app.listen(3000, () => {
    console.log("listening on port 3000")
})
