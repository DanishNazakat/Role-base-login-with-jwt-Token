
let loginBtn = document.getElementById('loginBtn');


// loginBtn.addEventListener('click',()=>{
//     alert('event Fired')
// })
loginBtn.addEventListener('click', async () => {
    let Email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    console.log('event fired', Email,Password)
    try {

        const res = await axios.post('http://localhost:3000/api/login',{
          Email,
          password  
        })
        
        if(res.data.status === 200){
            window.open('./home.html')
        }
        else{
            alert("Invalid Email or Password")
        }

    } catch (err) {
        console.log(err)
    }
})



