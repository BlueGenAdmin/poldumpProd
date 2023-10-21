const { response } = require('express');
const { rawListeners } =  require('../../model/admin/units')
const UnitDb = require('../../model/admin/units')



exports.unitsCreate = (req,res)=>{
    if(!req.body){
        response.status(400).send({message:"Content Empty"})
        return;
    }

    const newUnit = new UnitDb({
        unit:req.body.unit,
    })
    newUnit.save(newUnit)
    .then(data=>{
        res.send(data);
        // response.redirect('/')
        console.log(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot save unit"
    });
})

}


// return unit data and single data

exports.unitsFind = (req,res)=>{
    UnitDb.find()
 .then(data=>{
    res.send(data)
 })
 .catch(err=>{
    res.status(500).send({message:err.message || "cannot find unit"
    });
})
}


// retrieve the single unit data from database
exports.unitsFindId = (req,res)=>{
    if(req.params.id){
        const id = req.params.id;
    UnitDb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"not found unit with id" + id});
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot find unit with id" + id});
    })

    }else{
        UnitDb.find()
      .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot find unit"
        });
    })
    }
}





exports.unitDelete = (req,res)=>{
    const id = req.params.id
    UnitDb.findByIdAndRemove(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`not found unit with id ${id}`});
        }else{
            res.send({message:"Data deleted successfully"
        })
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot delete unit with id" + id
    });
})
}


//update a report data from the database
exports.unitUpdate = (req,res) =>{
    if(!req.body){
        return res.status(400).send({message:"Data to update is Empty"})
    }
    const id = req.params.id;
    UnitDb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update Data ${id}.Data not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error Update Data"})
    })
}