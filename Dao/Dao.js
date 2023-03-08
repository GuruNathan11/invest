
 const { use } = require('../Routes/routes');

var users = require('../Model/Models.js');

exports.Dao_index = function(req,callback)
{
    users.get(function (err,user){
        if (err)
            callback.json({
                status : "Error",
                message: err
            });
            callback.json({
                status : "Success",
                message: "Get User investment Details Successfully",
                data   : user
            });
    });
};


exports.Dao_view = function (req,callback) 

{
    users.findById({_id:req.params.user_id}, function (err,user) 
    {
        if(err)
             {callback.send(err)}
else{
    if(user===null){
callback.json({
    message: "No such id is found"
})
    }
else{
             callback.json({
            message : "User investment Details",
            data    : user
        });
     }
    }
    });    

    }

    exports.Dao_update = function (req, callback) {
        users.findById({_id: req.params.user_id}, function (err, user) {
            if (err)
            callback.send(err); 
            user.name = req.body.name;
        
            //save and check errors
           user.save(function (err) {
                if (err)
                    callback.json(err)
                    callback.json ({
                    message: "User investment Details Updated Successfully",
                    data   : user
                    });
            });
        });
    }; 
    

exports.Dao_Delete = function (req,callback)
{
    users.deleteOne({_id:req.params.user_id}, function (err,user)
    {
        if (err)
        callback.send(err)
        callback.json({
            status : "Success",
            message: "*** User investment Details Deleted Successfully ***",
            data   : user
        });
    });
};

exports.Dao_delall = function (req,callback){
    users.deleteMany({}, function(err,user){
        if (err) callback.send(err);
        callback.json({
            message : "All Stock details are deleted successfully",
            data    : user
        });
    });
};
