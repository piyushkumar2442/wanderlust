require("./listing.js")
require("./review.js")

const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose);
module.exports =  mongoose.models?.User || mongoose.model("User", userSchema);
//const User = mongoose.models?.User || model("User", userSchema);