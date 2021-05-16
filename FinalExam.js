let user = [
    { 
        Email:"name@gmail.com",
        Phone:01234,
        Password:123456,
        UserName:"name"
    },
    { 
        Email:"name123@gmail.com",
        Phone:56789,
        Password:789012,
        UserName:"eman"
    },
    {
        Email:"tennguoidung@gmail.com",
        Phong:32413,
        Password:321442,
        UserName:"tennguoidung" 
    }
]

localStorage.setItem("authentication",JSON.stringify(user));



let info = document.getElementById("info")

info.addEventListener("submit",(e)=> {
    e.preventDefault()
    
    for(el of user) {
        if(el.UserName == info.username.value && el.Password == info.psw.value) {
            console.log("Success")
            
            window.location.replace("https://www.youtube.com/")
            break;
        }
        console.log("error")
    }
}) 
