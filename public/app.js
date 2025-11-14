
// let submitBtn = document.getElementById('submitBtn');

// submitBtn.addEventListener('click', async () => {
//     let Name = document.getElementById('Name').value;
//     let Email = document.getElementById('Email').value;
//     let Password = document.getElementById('Password').value;

//     console.log("Event Fired:", Name, Email, Password);

//     try {
//         const res = await axios.post('http://localhost:3000/api/', {
//             Name,
//             Email,
//             password: Password
//         });
//         console.log("Response from server:", res.data);
//         // alert(res.data.message);
//           window.open('login.html');

//     } catch (err) {
//         alert("Signup Failed")
//         console.error("Error:", err);
        
//     }
// });


let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async () => {
    let Name = document.getElementById('Name').value;
    let Email = document.getElementById('Email').value;
    let Password = document.getElementById('Password').value;
    let Role = document.getElementById('Role').value;

    try {
        const res = await axios.post("http://localhost:3000/api/", {
            Name,
            Email,
            password: Password,
            role: Role
        });

        alert("Signup successful!");
        window.location.href = "login.html";
    } catch (err) {
        alert("Signup failed");
        console.log(err);
    }
});
