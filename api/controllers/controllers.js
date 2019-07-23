const mongoose = require('mongoose');
const Developer = mongoose.model('developers');
//controller to view all developers
exports.list_all_developers =(req,res)=>{
    Developer.find({},(err,developer)=>{
        if(!err){
            res.json(developer)
        }else{
            res.send(err);
        }

    });
};

//controller to add a developer
exports.add_developer =(req,res)=>{
    let newDeveloper = new Developer(req.body);

    newDeveloper.save((err,developer)=>{
        if(!err){
            res.json(developer)
        }else{
            res.send(err);
        }

    });  
};

//controller to view a developer by id
exports.read_a_developer = (req,res)=>{
    Developer.findById({_id: req.params.developerId},(err,developer)=>{
        if(!err){
            res.json(developer);
        }else{
            res.send(err);
        }

    });

};


//controller update developers record by id

exports.update_all_developers_details =(req,res)=>{
    Developer.findOneAndUpdate({_id : req.params.developerId},req.body,{new: true}),(err,developer)=>{
        if(!err){
            res.json(developer);
        }else{
            res.send(err);
        }
    }

};

// controller to delete the developer
exports.delete_a_developer =(req,res)=>{
    Developer.remove({_id : req.params.developerId},(err,developer)=>{
        if(!err){
            res.json({status: 'developer delited'});
        }else{
            res.send(err);
        }
    })
}


//controller to view all developer in a particular Stack

exports.list_all_devloper_in_same_stack= (req,res)=>{
    Developer.find({stack: req.params.developersStack},(err,stack)=>{
        if(!err){
            res.json(stack);
        }else{
            res.send(err);
        }
    })

};
