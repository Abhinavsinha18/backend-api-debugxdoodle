const mongoose = require('mongoose');

let schema = mongoose.Schema({
    title: {
        type :String,
        required: true
    },
    subTitle: {
        type :String,
        required: true
    },
    metaTitle: {
        type :String,
        required: true
    },
    metaDescription: {
        type :String,
        required: true
    },
    fbTitle: {
        type :String,
        required: true
    },
    fbDescription: {
        type :String,
        required: true
    },
    twitterTitle: {
        type :String,
        required: true
    },
    twitterDescription: {
        type :String,
        required: true
    },
  
    keywords:{
        type: String,
        required : true
    },

    tags : {
        type : Array,
        required : true
    },
    category :{
        type : Array,
        required :true
        },
    twitterImage : {
        type : String,
    },
    fbImage : {
        type : String,
    },
    image : {
        type : Array,
    },  
    content : {
        type : String,
        required : true
    },

    createdAt: {
        type: Date,
        default: Date.now,
      }
})


const model =  mongoose.model('blogs',schema);

module.exports = model;