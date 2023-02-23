var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name : {
        required : true,
        type     : String
    },
   active:{
    type : Boolean,
    default : true
   },
   type:{
type: String,
default : "investment"
   },
    created_at : {
        type : Date,
        default : Date.now
    }
});
Schema.path('name').validate(async (name) =>{
  const nameCount = await mongoose.models.type.countDocuments({ name })
  return !nameCount
},'Name already exists');

var users = module.exports = mongoose.model('type',Schema);
module.exports.get = function(callback, limit) {
    users.find(callback).limit(limit);
};