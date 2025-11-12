const express=require("express");
const router=express.Router();
const {home , login , createBlog ,getAllBlogs}=require("../controllers/Auth");
router.post("/",home);
router.post("/login",login);
router.post("/createBlog",createBlog);
router.get("/allblogs", getAllBlogs);





module.exports=router;