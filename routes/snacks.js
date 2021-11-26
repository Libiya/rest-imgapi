const express = require('express');
const snack = require('../models/snack');
const router= express.Router()
const Snack = require('../models/snack');


 // getting all snacks
 
 router.get('/', async(req,res) =>{
      try{ const snacks = await snack.find();
         res.json(snacks);
        }
        catch (err){ res.json({message:err}); 
    }
});

// getting a snack by id

router.get('/:snackid', async(req,res) =>{
     try{ const snack = await Snack.findById(req.params.snackid); res.json(snack); 
    }
    catch(err){ res.json({message:err}); 
} 
});

//http route methods

//create a snack
router.post('/',(req,res)=>{
    const snack=new Snack({
        customer:{name:req.body.customer.name,
            phno:req.body.customer.phno,
            mailid:req.body.customer.mailid},
        item:{snack:req.body.item.snack,
            price:req.body.item.price,
            type:req.body.item.type
        },
    });
    snack.save().
    then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    })
});

// deleting a snack

router.delete('/:snackid', async(req,res) =>{
     try{
          const removesnack = await Snack.deleteOne({_id: req.params.snackid});
      res.json(removesnack); 
    }
    catch(err){
         res.json({message:err}); 
        } 
    }); 

// updating a snack by id

router.patch('/:snackid', async(req,res) =>{
     try{ 
         const snack = await Snack.findOne({_id: req.params.snackid});
         if(req.body.customer){
             if(req.body.customer.name){
             snack.customer.name=req.body.customer.name;
         }
         if(req.body.customer.phno){
            snack.customer.phno=req.body.customer.phno;
        }
        if(req.body.customer.mailid){
            snack.customer.mailid=req.body.customer.mailid;
        }}
        if(req.body.item){
        if(req.body.item.snack){
            snack.item.snack=req.body.item.snack;
        }
        if(req.body.item.price) {
            snack.item.price=req.body.item.price;
        }
        if (req.body.item.type) {
            snack.item.type=req.body.item.type;
            
        }
    }
        await snack.save();
        res.json(snack);
    } catch(err){ 
        res.json({message:err});
    }
});


module.exports=router;