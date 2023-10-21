const {rawListeners} = require('../../model/user/user')
const Usersdb = require('../../model/user/user')



exports.userCreate = (req,res)=>{

    if(!req.body){
        res.status(400).send({ message: "Content can not be empty!" })
     return;
 }
 
 const newUsersdb = new Usersdb({
     email:req.body.email,
     userName:req.body.userName,
     password:req.body.password
    
 })
 
 newUsersdb.save(newUsersdb)
 .then(data=>{
     res.send(data)
     // res.redirect("/")
     console.log(data)
 })
 .catch(err=>{
     res.status(500).send({message:err.message || "cannot save new user"
     });
 });
 
 }
 



 
exports.budjetReportsFind = (req,res)=>{
    Usersdb.find()
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send({message:err.message || "cannot find budjet report"
    });
  })
}

// retrieve the single users data from database
exports.usersFind = (req, res)=>{
if(req.params.id){
    const id = req.params.id;
    Usersdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"not found users id" + id});
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot find users with id" + id});
    })
}else{
    Usersdb.find()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot find Users"
        });
    })
    
}
}


