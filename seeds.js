var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Desert Hill", 
        image: "https://farm3.staticflickr.com/2595/3816270408_272e5ee5ed.jpg", 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Beauty Hill", 
        image: "https://farm8.staticflickr.com/7407/9647405948_b2bcd3ab57.jpg", 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "No Hill", 
        image: "https://farm8.staticflickr.com/7399/13675154513_134d33d853.jpg", 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    
];

function seedDB() {
    // body...
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
    console.log("removed campgrounds!");
    data.forEach(function(seed) {
        // body...
        Campground.create(seed, function(err, campground) {
            if(err) {
                console.log(err);
            } else {
                console.log("added a new campground");
                Comment.create(
                    {
                        text: "This is a good place, but I wanna Internet!",
                        author: "Angela"
                    }, function(err, comment) {
                        if (err) {
                            console.log(err);
                        } else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created a new comment!");
                        }
                    }
                )
            }
        })
    })
});
    
}
module.exports = seedDB;
