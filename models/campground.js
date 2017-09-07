var mongoose = require ("mongoose");
mongoose.Promise = global.Promise;

var campgroundSchema = new mongoose.Schema({
	name: String,
	price: String,
	image: String,
	description: String,
	author: {
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "user"
		},
		username: String
	},
	comments:[
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

module.exports = mongoose.model("Campground", campgroundSchema);


/*Campground.create(
		{
			name:"Lagos Island", 
			image:"http://www.freeguidetonwcamping.com/Oregon_Washington_Main/Camping_Photos/Four_Seasons_Campground_2.jpg",
			description: "Only for the real men who have the mind for lazy"
		}, function (err, campground){
			if(err){
				console.log(err)
			}else{
				console.log("new camp created")
				console.log(campground)
			}
		});*/
