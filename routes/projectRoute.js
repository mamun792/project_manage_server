const express=require("express");

const router=express.Router();


router.get("/",(req,res)=>{
    res.json({message:"get all projects"});
});

router.get("/:id",(req,res)=>{
    res.json({message:"get project by id"});
});

router.post("/",(req,res)=>{
    res.json({message:"create project"});
});

router.put("/:id",(req,res)=>{
    res.json({message:"update project"});
});

router.delete("/:id",(req,res)=>{
    res.json({message:"delete project"});
});

module.exports=router;