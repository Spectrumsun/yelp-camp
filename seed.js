var mongoose = require ("mongoose");
var Campground = require("./models/campground");var Comment = require("./models/comment");



var data = [
    {
        name: "hahaha",
        image: "http://www.freeguidetonwcamping.com/Oregon_Washington_Main/Camping_Photos/Four_Seasons_Campground_2.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
    }, 
    {
        name: "Things fall apart",
        image: "http://www.freeguidetonwcamping.com/Oregon_Washington_Main/Camping_Photos/Four_Seasons_Campground_2.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
    }, 
    {
        name: "Torn the new man",
        image: "http://www.freeguidetonwcamping.com/Oregon_Washington_Main/Camping_Photos/Four_Seasons_Campground_2.jpg",
        description: "All the girls are complicated, all of them are you dont need to ask me. just take a look in the mirror"
    },
    {
        name: "The Great Beauty",
        image: "http://www.freeguidetonwcamping.com/Oregon_Washington_Main/Camping_Photos/Four_Seasons_Campground_2.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
    }
    
]

function seedDB(){
    Campground.remove({}, function (err) {
            if (err) {
                console.log(err)
            }
            console.log("remove campgrounds");
            data.forEach(function (seed) {
                Campground.create(seed, function (err, campground){
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("added")
                            Comment.create(
                                {
                                    text: "The lies of the govement",
                                    author:"Kim Bola" 
                                }, function(err, comment){
                                        if(err){
                                            console.log(err);
                                        }else{
                                            campground.comments.push(comment);
                                            campground.save()
                                        }

                            })
                            
                            }
                        })
                })
        });

}

module.exports = seedDB;