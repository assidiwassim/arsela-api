

const Process = require("../models/process.model")

module.exports={
    add:function(req,res) {
      
            const data = {
                _id: req.body._id,
                title: req.body.title,
                pages:req.body.pages,
                links:req.body.links
            }
        
            Process.create(data).then(process => {           
                res.status(201).json({ message: 'template created successfully',_id:process._id })
            })
            .catch(err => {
                res.status(500).json({ message: 'Internal Server Error' })
            })
      },
    update:function(req,res) {

        Process.findOne({_id: req.params.id}, function (err, process){
            if (err){
                res.status(500).json({ message:"Internal server error" }); 
            }else{
                if(process){

                    process.title=req.body.title
                    process.pages=req.body.pages
                    process.links=req.body.links

                    process.updated_at=new Date()
                    
                    process.save(function (err) {
                            if (err)  res.status(500).json({ message:"Internal server error" }); 
                            res.status(200).json({ status:"updated successfully"})
                        })
                }else{
                    res.status(422).json({ message: 'No Data' })
                }
            } 
        })

  },
  findOneAndUpdate:function(req,res) {

    const data = {
        _id: req.body._id,
        title: req.body.title,
        pages:req.body.pages,
        links:req.body.links
    }

    Process.findOneAndUpdate({_id: data._id},data,{new: true,upsert: true}, function (err, process){
        if (err){
            res.status(500).json({ message:"Internal server error" }); 
        }else{
            console.log(process)
            res.status(200).json({ status:"updated successfully",process:process})
        } 
    })

},
  find:function(req,res) {
      
    Process.findOne({"_id":req.params.id})
    .exec((err, docs) => {
       
          if (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
          }

          return res.status(200).json(docs);

          
        });
},
all:function(req,res) {
      
    Process.find()
    .exec((err, docs) => {
       
          if (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
          }

          return res.status(200).json(docs);

          
        });
},
remove:function(req,res) {
    Process.remove({ _id : req.params.id }, function(err, callback){
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
        res.status(200).json({ message:"data has been removed successfully"})
    })
}
       
}

