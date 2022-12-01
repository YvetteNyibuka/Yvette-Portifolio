var admins =[
    {
        username: "Yvette",
        password: "Yvette@123"
    },
    {
        username: "Fab",
        password: "test"
    }
   
]

function getInfo(){
    var username = document.getElementById('username').value;
    var password = document.getElementById("pwd").value;
    var btn = document.getElementById("btn");
    for (i= 0; i<admins.length;i++){
        if(username == admins[i].username && password == admins[i].password) {
        window.location.assign("admin.html");
        }
       
    
    }
}