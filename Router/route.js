const express=require("express");
const router=express.Router();
const {home , login , createBlog}=require("../controllers/Auth");
router.post("/",home);
router.post("/login",login);
router.post("/createBlog",createBlog);





module.exports=router;