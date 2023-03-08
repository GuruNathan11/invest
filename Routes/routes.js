
let router = require('express').Router();

router.get('/',function(req,res){
    res.json({
        status : 'API Works',
        message : 'Welcome to Investment'
    });
});

const users = require('../Model/Models');
const countermodel =require('../Model/Models');
console.log(countermodel);
    router.post('/add', (req,res) => {
        var user = new users();
        user.name = req.body.name;
        user.save((err,users) =>{ 
            if (err) { 
                return res.status(400).send({ 
                    message : err
                }); 
            } 
            else { 
                return res.status(201).send({ 
                    message : "Investment added successfully.",
                    data : user
                }); 
            } 
        }); 
    
    }); 
    



var Controller = require('../Controller/Controller.js');
router.route('/users')
.get(Controller.index)

router.route('/users/:user_id')
.get(Controller.view)
.patch(Controller.update)
.put(Controller.update)
.delete(Controller.Delete);
router.route('/del-all')
.post(Controller.delall)


module.exports = router;
