var express                 = require("express"),
	app 					= express(),
	seedDB	 				= require("./seed");
    mongoose                = require("mongoose"),
    passport                = require("passport"),
	bodyParser              = require("body-parser"),
	flash 					= require("connect-flash"),
	methodOverride 			= require('method-override'),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
	Comment 				= require("./models/comment"),
	Campground 				= require("./models/campground");
	passportLocalMongoose 	= require("passport-local-mongoose");



mongoose.connect("mongodb://localhost/yelp_camp");
//seedDB();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.use(require("express-session")({
	secret: "pass$wprd@(#)",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next(); 
});

var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campground");
var indexRoutes = require("./routes/index");

app.use(indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.get("*", function(req, res){
	res.send("<h1>this url does not exisit on this server</h1>");
});

app.listen(3000, function(){
	console.log("Yelp Camp Server Has Started");
});