const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const date=require(__dirname+"/date.js");
var items=["Buy Food","Cook Food","Eat Food"];
var workitems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.listen(3000,function(){
    console.log("Server Started");
});

app.get("/",function(req,res){
    var day=date.getdate();
    
    res.render("list",{eday:day, nitems:items}); 
});

app.post("/",function(req,res){
    var item=req.body.newitem;
    if(req.body.button==="Work"){
        workitems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
    
});

app.get("/work",function(req,res){
    res.render("list",{eday:"Work", nitems:workitems}); 
})