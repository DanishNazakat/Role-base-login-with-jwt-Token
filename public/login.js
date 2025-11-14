
// let loginBtn = document.getElementById('loginBtn');


// // loginBtn.addEventListener('click',()=>{
// //     alert('event Fired')
// // })
// loginBtn.addEventListener('click', async () => {
//     let Email = document.getElementById('Email').value;
//     let password = document.getElementById('Password').value;
//     console.log('event fired', Email,password)
//     try {

//         const res = await axios.post('http://localhost:3000/api/login',{
//           Email,
//           password  
//         })
        
//         if(res.data.status === 200){
//             window.open('./home.html')
//         }
//         else{
//             alert("Invalid Email or Password")
//         }

//     } catch (err) {
//         console.log(err)
//     }
// })



let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;

    try {
        const res = await axios.post(
            "http://localhost:3000/api/login",
            { Email, password: Password },
            { withCredentials: true } // VERY IMPORTANT
        );

        if (res.data.status === 200) {
            if (res.data.role === "admin") {
                window.location.href = "home.html";
            } else {
                window.location.href = "./viewBlog.html";
            }
        } else {
            alert("Invalid Login");
        }

    } catch (err) {
        alert("Login Failed");
        console.log(err);
    }
});
