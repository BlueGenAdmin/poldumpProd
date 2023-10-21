const { rawListeners } =  require('../../model/admin/budjetsReportSchem');
const BudjetReportsdb = require('../../model/admin/budjetsReportSchem');




exports.budjetReportsCreate = (req,res)=>{
    // validate the request

    if(!req.body){
       res.status(400).send({ message: "Content can not be empty!" })
    return;
}

const newBudjetReport = new BudjetReportsdb({
    unit:req.body.units,
    office:req.body.office,
    firstQuarter:req.body.firstQuarter,
    secondQuarter:req.body.secondQuarter,
    thirdQuarter:req.body.thirdQuarter,
    fourthQuarter:req.body.fourthQuarter,
    grandTotal:req.body.grandTotal
})

newBudjetReport.save(newBudjetReport)
.then(data=>{
    // res.send(data)
    res.redirect("/budgetReports")
    console.log(data)
})
.catch(err=>{
    res.status(500).send({message:err.message || "cannot save budjet report"
    });
});

}


// return budjet data and single data

exports.budjetReportsFind = (req,res)=>{
    BudjetReportsdb.find()
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send({message:err.message || "cannot find budjet report"
    });
  })
}

// retrieve the single budjet data from database
exports.budjetReportsFindId = (req, res)=>{
if(req.params.id){
    const id = req.params.id;
    BudjetReportsdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"not found budjet with id" + id});
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot find budjet with id" + id});
    })
}else{
    BudjetReportsdb.find()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot find budjet report"
        });
    })
    
}
}


//delete a report data from the database

exports.budjetReportsDelete = (req,res)=>{
    const id = req.params.id
    BudjetReportsdb.findByIdAndRemove(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`not found budjet with id ${id}`});
        }else{
            res.redirect("/budgetReports")
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "cannot delete budjet with id" + id
    });
})
}


//update a report data from the database
exports.budjetReportsUpdate = (req,res) =>{
    if(!req.body){
        return res.status(400).send({message:"Data to update is Empty"})
    }
    const id = req.params.id;
    BudjetReportsdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    
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


exports.budjetReportsGroup = async (req,res) => {
    try{
        const result = await BudjetReportsdb.aggregate([
            {
              '$group': {
                '_id': '$unit', 
                'offices': {
                  '$addToSet': '$office'
                }, 
                'id': {
                  '$addToSet': '$_id'
                }, 
                'firstQuarter': {
                  '$addToSet': '$firstQuarter'
                }, 
                'secondQuarter': {
                  '$addToSet': '$secondQuarter'
                }, 
                'thirdQuarter': {
                  '$addToSet': '$thirdQuarter'
                }, 
                'fourthQuarter': {
                  '$addToSet': '$fourthQuarter'
                }
              }
            }
          ])
        return res.status(200).send(result)
    }catch(err){
        return res.status(500).send({message:"Error Aggregate"
    })
}
}