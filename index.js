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
  let table = `<table class="table">
<thead>

</thead>
<tbody>`;
let Data = localStorage.getItem("details");
details = JSON.parse(Data);

  for (let i = 0; i < details.length; i++){
      table = table + `<tr>
  
    <td style="font-size:30px; font-weight:700; text-align:center; width:150px">${details[i].blog}</td>
    <td style="font-size:20px; font-weight:300; text-align:center; padding-left:5rem;">${details[i].content}</td>
    <td style="padding-left:2rem;">${details[i].image}</td>
  </tr> `;
  };
  table = table+`</tbody>
  </table>`;
  document.getElementById("b").innerHTML = table;
};
table()