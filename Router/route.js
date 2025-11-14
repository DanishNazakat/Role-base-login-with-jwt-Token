// const express=require("express");
// const router=express.Router();
// const {home , login , createBlog ,getAllBlogs}=require("../controllers/Auth");
// router.post("/",home);
// router.post("/login",login);
// router.post("/createBlog",createBlog);
// router.get("/allblogs", getAllBlogs);





// module.exports=router;




const express = require("express");
const router = express.Router();

const { home, login, createBlog, getAllBlogs } = require("../controllers/Auth");
const { verifyToken, verifyAdmin } = require("../controllers/middleware");

router.post("/", home);
router.post("/login", login);

// ADMIN ONLY
router.post("/createBlog", verifyAdmin, createBlog);

// USER + ADMIN
router.get("/allblogs", verifyToken, getAllBlogs);

module.exports = router;
