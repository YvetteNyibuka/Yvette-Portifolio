const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
// document.getElementById("testthis").innerHTML=window.localStorage.getItem(details.blog);

// document.getElementById("testthis").innerHTML=localStorage.key(details.blog);

function table() {
  let table = `<div class="table">

<div style= "display:flex; margin-left:2rem; flex-wrap: wrap;">`;
let Data = localStorage.getItem("details");
details = JSON.parse(Data);

  for (let i = 0; i < details.length; i++){
      table = table + `
    <div style= " margin-left:2rem; margin-top:3rem">
    ${details[i].image} <br>
  
     <p>${details[i].blog} <p> <br>
     
    <p class ="text">${details[i].content.substring(0,5)+'...'} </p>
  

  <button class="Readmore" onclick="more(this)" id="read" style = "width: 20pz; padding: 8px; color: #ffffff; background: none #061649; 
	border: none; border-radius: 6px; font-size: 18px;cursor: pointer;margin: 12px 0;">ReadMore</button>

   </div>
   `;
  };
  table = table+`</div>
  </div>`;

  document.getElementById("b").innerHTML = table;
};



table();







// var displayPost = (elem) => {
//   let Data = localStorage.getItem("details");
// details = JSON.parse(Data);
//   var t = document.getElementById("text")
//   for (var j = 0; j < details.length; j++){

//     elem.innerHTML= details[j].content
//   }
// };


 
// var readButton = document.getElementById("read");
     
// var more = details[i].content;
// function contentNumber(){
//   var count = 0;
//   for(let j = 0; j < more.length /2; i++){
//   count++;
//   }
//   return count;
// }

// function dispNone(){
//   if(contentNumber()){
//     for(var k = more.length/2; k < more.length; k++){
//       more[i].style.diplay="none";
//     }
//   //  var el =  document.createElement('span');
//   //   el.setAttribute('id', 'readMore');
// }



// }
// dispNone()


//soring queries in local storage

// function store(){
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email-id").value;
//   let phone = document.getElementById("phone").value;
//   let message = document.getElementById("message").value;

//   localStorage.setItem('full-name', name);
//   localStorage.setItem('email', email);
//   localStorage.setItem('phone', phone);
//   localStorage.setItem('message', message);
// }


//Contact form validation

function formValidation()
{
var uname = document.registration.name;
var uemail = document.registration.email;
var uphone = document.registration.phone;


if(allLetter(uname))
{

if(ValidateEmail(uemail))
{
if(validatePhone(uphone, 7,12))
{

}
}
} 

return false;

}


// Javascript name validation

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

//email validation


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

// phone validation

function validatePhone(uphone,mx,my)
{
var uphone_len = uphone.value.length;
if (uphone_len == 0 ||uphone_len >= my || uphone_len < mx)
{
alert("Phone number should not be empty / length be between "+mx+" to "+my);
uphone.focus();
return false;
}
else{
  alert('Form Successfully Submitted');
  window.location.reload()
  return true;

   
}
}