const mongoose=require("mongoose");
const Schema=mongoose.Schema;
require("./user.js")
const Review=require("./review.js");
const { ref } = require("joi");
const listingSchema=new Schema({
     title:{
        type:String,
        required:true,
    },
     description:String,
     image:{
         url:String,
         filename:String
    },
     price:Number,
     location:String,
     country:String,
     reviews:[
          {
               type:Schema.Types.ObjectId,
               ref:"Review",
          }
     ],
     owner:{
          type:Schema.Types.ObjectId,
          ref:"User",
     }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
     if(listing) {
      await Review.deleteMany({_id : {$in: listing.reviews} });
     }
});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;
 //"https://unsplash.com/photos/coconut-tree-on-beach-DH_u2aV3nGM"