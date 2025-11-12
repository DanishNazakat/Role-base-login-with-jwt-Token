// blog section
function opendiv() {
    let closeicon = document.getElementById('closeicon');
    let blogform = document.getElementById('blogform');
    blogform.style.display = "flex";
    document.body.style.overflow = "hidden";

}
function closediv() {
    let closeicon = document.getElementById('closeicon');
    let blogform = document.getElementById('blogform');
    blogform.style.display = "none";
    document.body.style.overflow = "scroll";
}


// blog Content
let createBlog = document.getElementById('blogs');

createBlog.addEventListener('click', async () => {
    try {
        let tittle = document.getElementById('blogTittleinp').value;
        let authorName = document.getElementById('authorNameinp').value;
        let blogContent = document.getElementById('blogContent').value;


        console.log(tittle, authorName, blogContent);


        let res = await axios.post("http://localhost:3000/api/createBlog", {
            tittle,
            authorName,
            blogContent
        })
        console.log("Response from server" + res.data)
        alert("blog successfuly created");
        let blogform = document.getElementById('blogform');
        blogform.style.display = "none";
        document.body.style.overflow = "scroll";

         let line = document.createElement('hr');

        let main = document.querySelector(".main");
        let blogSeciton = document.createElement('div');
        blogSeciton.setAttribute("class", "blogSeciton");


        let blogtittle = document.createElement('h1');
        blogtittle.setAttribute("id", "blogtittle");
        blogtittle.innerText = tittle;


        let blogdescription = document.createElement("p");
        blogdescription.setAttribute("id", "blogdescription")
        blogdescription.innerText = blogContent;

        let authorDetails = document.createElement('div');
        authorDetails.setAttribute("class", "authorDetails")

        let authorNamen = document.createElement('div');
        authorNamen.setAttribute("id", "authorName");
        authorNamen.innerText = authorName;


        let puslishDate = document.createElement('div');
        puslishDate.setAttribute("id", "puslishDate");
        let D = new Date();
        let day = D.getDate();
        let month = D.getMonth();
        let year = D.getFullYear();
        puslishDate.innerText = `${day} - ${month + 1} - ${year}`;
        // blogSeciton.innerText = "Asad";
        // blogSeciton.style.color = "Black";
        main.append(blogSeciton);
        console.log(blogSeciton);
        blogSeciton.append(blogtittle);
        blogSeciton.append(blogdescription);
        blogSeciton.append(authorDetails);
        authorDetails.append(authorNamen);
        authorDetails.append(puslishDate)
        blogSeciton.append(line)
        // main.appendChild(blogdescription)
       
    } catch (err) {
        console.log(err)
    }

})  




