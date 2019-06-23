var express = require("express"), 
    mongoose = require("mongoose"), 
    bodyParser = require("body-parser"), 
    app = express();
mongoose.connect("mongodb://localhost:27017/yelpCamp", {useNewUrlParser: true});
var yelpSchema = new mongoose.Schema({
    name : String,
    img : String,
    desc : String
});
var campGrounds = mongoose.model("camp",yelpSchema);

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    campGrounds.find({},function(err,camp){
        if(err){
            console.log("Failed to render!");
        }else{
            res.render("index", {campSites:camp});            
        }
    });
});
app.post("/campgrounds",function(req,res){
    var name = req.body.name;
    var img = req.body.img;
    var desc = req.body.desc;
    campGrounds.create({
    name : name,
    img : img,
    desc : desc
}, function(err, camp){
    if(err){
        console.log(err);
    }else{
        res.redirect("/campgrounds");
    }
});
    
});


app.get("/campgrounds/new", function(req, res) {
   res.render("new"); 
});
app.get("/campgrounds/:id", function(req, res) {
    campGrounds.findById(req.params.id, function(err, obj){
        if(err){
            console.log(err);
        }else{
            res.render("show", {camp : obj});
        }
    });
    
});
app.listen(process.env.PORT, process.env.IP,function(){console.log("Yelpcamp Server Started!")});