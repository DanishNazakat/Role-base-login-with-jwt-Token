// const mongoose=require("mongoose");
const { BaseCollection } = require("mongoose");
const {User , blogs} = require("../dbschema/schema");
const hashy = require("hashy");
// async function home(req, res) {
//     try {
//         const { Name, Email, password } = req.body;
//         hashy.hash(password, function (err, hash) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log("generated password ", hash);
//             const newUser = new User({ Name, Email, password: hash });
//             newUser.save();
//             console.log(newUser);
//             res.send({
//                 status: 200,
//                 message: "User added successfully",
//             });

//         })
//         // res.send("HELLO WORLD")

//     } catch (err) {
//         res.send("ERROR")
//         console.log(err)

//     }
// }

async function home(req, res) {
    try {
        const { Name, Email, password, role } = req.body;

        hashy.hash(password, function (err, hash) {
            if (err) return console.log(err);

            const newUser = new User({
                Name,
                Email,
                password: hash,
                role
            });

            newUser.save();

            res.send({
                status: 200,
                message: "User added successfully"
            });
        });
    } catch (err) {
        res.send("ERROR");
    }
}



const jwt = require("jsonwebtoken");

async function login(req, res) {
    try {
        const { Email, password } = req.body;
        const check = await User.findOne({ Email });

        if (!check) {
            return res.send({ status: 404, message: "Invalid Email or Password!" });
        }

        hashy.verify(password, check.password, function (error, success) {
            if (error || !success) {
                return res.send({ status: 404, message: "Invalid Email or Password!" });
            }

            // Generate token
            const token = jwt.sign(
                { id: check._id, role: check.role },
                "MY_SECRET_KEY",
                { expiresIn: "1d" }
            );

            // Store cookie
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax"
            });

            res.send({
                status: 200,
                message: "Login successful",
                role: check.role
            });
        });

    } catch (err) {
        res.send("Invalid user");
    }
}

    function createBlog (req,res){

        try{
           const {tittle,authorName,blogContent}= req.body;
           console.log(tittle,authorName,blogContent);

           let newblogs =  new blogs ({tittle, authorName, blogContent});
           newblogs.save();
           console.log(newblogs);
           console.log(blogs.length);

           res.send({
            status : 200,
            message : "blog added Successfulluy"
           })
        }catch(err){
            console.log("function is not ",err)

        }
    }



    // get blog

    async function getAllBlogs(req, res) {
  try {
    const allBlogs = await blogs.find(); 
    res.send({
      status: 200,
      message: "Get all blogs",
      data: allBlogs
    });
  } catch (err) {
    console.log("Error fetching blogs:", err);
    res.status(500).send({
      status: 500,
      message: "Error fetching blogs"
    });
  }
}

module.exports = { home, login,createBlog ,getAllBlogs }


