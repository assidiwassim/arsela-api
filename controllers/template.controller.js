

const Template = require("../models/template.model")

module.exports={
    add:function(req,res) {
      
     
            const data = {
                _id: req.body._id,
                title: req.body.title,
                icon:req.body.icon,
                color:req.body.color,
                bgcolor:req.body.bgcolor,
                slug:req.body.slug,
                form:req.body.form
            }
      
            Template.create(data).then(template => {           
                res.status(201).json({ message: 'template created successfully',_id:template._id })
            })
            .catch(err => {
                res.status(500).json({ message: 'Internal Server Error' })
            })
      },
    update:function(req,res) {

        Template.findOne({_id: req.params.id}, function (err, template){
            if (err){
                res.status(500).json({ message:"Internal server error" }); 
            }else{
                if(template){

                    template.title=req.body.title
                    template.icon=req.body.icon
                    template.color=req.body.color
                    template.bgcolor=req.body.bgcolor
                    template.slug=req.body.slug
                    template.form=req.body.form

                    template.updated_at=new Date()
                    
                    template.save(function (err) {
                            if (err)  res.status(500).json({ message:"Internal server error" }); 
                            res.status(200).json({ status:"updated successfully"})
                        })
                }else{
                    res.status(422).json({ message: 'No Data' })
                }
            } 
        })

  },
  find:function(req,res) {
      
    Template.findOne({"_id":req.params.id})
    .exec((err, docs) => {
       
          if (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
          }

          return res.status(200).json(docs);

          
        });
},
all:function(req,res) {
      
    Template.find()
    .exec((err, docs) => {
       
          if (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
          }

          return res.status(200).json(docs);

          
        });
},
remove:function(req,res) {
    Template.remove({ _id : req.params.id }, function(err, callback){
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }
        res.status(200).json({ message:"data has been removed successfully"})
    })
}
       
}

