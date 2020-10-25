const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))

app.get("/link" , function(req,res){
    res.render("link")
})

app.post("/link" , function(req,res){
    const name = req.body.nam;
    res.redirect('/'+name);
})

app.get("/:name",function(req,res){
    var name = req.params.name;
    res.render("index",{'name':name});
})

app.listen(1200)