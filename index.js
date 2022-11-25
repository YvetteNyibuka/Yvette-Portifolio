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
     
    <p>${details[i].content} </p>
   </div>
   `;
  };
  table = table+`</div>
  </div>`;
  document.getElementById("b").innerHTML = table;
};
table()