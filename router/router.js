const mongoose = require("mongoose");
const express = require("express");
const router = new express.Router();
const Data = require("../model/studinfo");
const Result = require("../model/studresult")
const bodyParser = require("body-parser");

router.get("/studinfo", async (req, res) => {
    const mydata = await Data.find();
    res.send(mydata);
  });
router.post("/studinfo",async(req,res)=>{
    const  mydata = new Data({
        name:req.body.name,
        course:req.body.course,
        sem:req.body.sem,
   })
    await mydata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "Error":err
            })
        }
        else{
            res.status(200).json({
                "Added":msg
            })
        }
    })
})
router.delete("/studinfo/:id", async (request, response) => {
    const _id = request.params.id;
    const mydata = await Data.findByIdAndDelete(_id);
    response.send(mydata);
  });
  router.patch("/studinfo/:id", async (request, response) => {
    // update
    const _id = request.params.id;
    const mydata = await Data.findByIdAndUpdate(_id, request.body, {
      new: true,
    });
    response.send(mydata);
  });

router.post("/studresult",async(req,res)=>{
    const  mydata = new Result({
        name:req.body.name,
        marks:req.body.marks,
        result:req.body.result,
   })
    await mydata.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "Error":err
            })
        }
        else{
            res.status(200).json({
                "Added":msg
            })
        }
    })
})
module.exports = router;