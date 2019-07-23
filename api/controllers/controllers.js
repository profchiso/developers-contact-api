const mongoose = require('mongoose');
const Developer = mongoose.model('developers');

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+'T'+time;

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


//controller update all developers record by id

exports.update_all_developers_details =(req,res)=>{
    Developer.findOneAndUpdate(
        {_id : req.params.developerId},
        {
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            stack: req.body.stack,
            dateAdded: dateTime,
            dateModified: dateTime
        },
        {overwrite: true},
        (err)=>{
            if(!err){
                res.send(`update of ${req.params.developerId} successful`);
            }else{
                res.send(err);
            }
        }
      )
};

//to update some developers record by id
exports.update_some_developers_details =(req,res)=>{
    Developer.updateOne({_id: req.params.developerId},{$set: req.body},
        (err)=>{
            if(!err){
                res.send(`update successful for ${req.params.developerId}`)
            }else{
                res.send(err);
            }
        }
        )
};

// controller to delete the developer
exports.delete_a_developer =(req,res)=>{
    Developer.deleteOne({_id : req.params.developerId},(err,developer)=>{
        if(!err){
            res.json({status: `developer with id ${req.params.developerId} deleted`});
        }else{
            res.send(err);
        }
    })
}

//controller to view all developer in a particular Stack

exports.list_all_developer_in_same_stack= (req,res)=>{
    Developer.find({stack: req.params.developersStack},(err,stack)=>{
        if(!err){
            res.json(stack);
        }else{
            res.send(err);
        }
    })

};
