// const mongoose=require("mongoose");
const { BaseCollection } = require("mongoose");
const {User , blogs} = require("../dbschema/schema");
const hashy = require("hashy");
async function home(req, res) {
    try {
        const { Name, Email, password } = req.body;
        hashy.hash(password, function (err, hash) {
            if (err) {
                return console.log(err);
            }
            console.log("generated password ", hash);
            const newUser = new User({ Name, Email, password: hash });
            newUser.save();
            console.log(newUser);
            res.send({
                status: 200,
                message: "User added successfully",
            });

        })
        // res.send("HELLO WORLD")

    } catch (err) {
        res.send("ERROR")
        console.log(err)

    }
}
async function login(req, res) {
    try {
        const { Email, password } = req.body;
        const check = await User.findOne({ Email });
        hashy.verify(password, check.password, function (error, success) {
            if (error) {
                return console.error(error);
            }

            if (success) {
                res.send({
                    status: 200,
                    message: "server code is failed"
                })
            } else {
                 res.send({
                    status: 404,
                    message: "invalid Email or Password!"
                })
             
            }
            res.send("invalid")
        });
        console.log("user login successfuly");
    } catch (err) {
        res.send(
            "Invalid user", err
        )

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
module.exports = { home, login,createBlog  }