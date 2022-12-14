var form = `<div>
  <div class="form-group">
    <label for="blog">Blog title</label>
    <input type="text" class="form-control" id="blog" aria-describedby="emailHelp" placeholder="blog title">
  </div>

  <div class="form-group">
    <label for="file">Blog image</label>
    <input type="file" class="form-control" id="image" aria-describedby="emailHelp" placeholder="image">
  </div>

  <div class="form-group mt-3">
    <label for="content">content</label>
    <textarea rows="4" cols="50"
     class="form-control" id="content" placeholder="blog content"></textarea>
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-1">NO</th>
      <th clsaa="col-3">Blog Title</th>
      <th clsaa="col-4">Content</th>
      <th clsaa="col-4">Image</th>
      <th clsaa="col-2">Edit</th>
      <th clsaa="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
  
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].blog}</td>
      <td>${details[i].content}</td>
      <td>${details[i].image}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let blog = document.getElementById("blog");
    let content = document.getElementById("content");
    let pic = document.getElementById("image").files[0];
    // var image = `<img src=${URL.createObjectURL(pic)} width="200" height="200">`


    if (blog.value == 0) {
        alert("name is Empty");
        return
    }
    let data = {
        blog: blog.value,
        content: content.value,
        image:  `<img src=${URL.createObjectURL(pic)} width="200" height="190">`
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(content.value)
    table();
    blog.value = "";
    content.value = "";
    image.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
  <div class="form-group">
    <label for="blog">Update blog</label>
    <input type="text" value="${details[index].blog}" class="form-control" id="newblog" aria-describedby="emailHelp" placeholder="Update Your blog">
  </div>
  <div class="form-group">
    <label for="file">Update Picture</label>
    <input type="file" value="${details[index].pic}" class="form-control" id="newimage" aria-describedby="emailHelp" placeholder="Update Your image">
  </div>
  <div class="form-group mt-3">
    <label for="content">content</label>
    <input type="content" value="${details[index].content}" class="form-control" id="newcontent" placeholder="Update Your content">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    
};
function update(index) {
    let newBlog = document.getElementById('newblog');
    let newContent = document.getElementById('newcontent');
    let newpic = document.getElementById("newimage").files[0];

    details[index] = {
        blog: newBlog.value,
        content: newContent.value,
        image:  `<img src=${URL.createObjectURL(newpic)} width="250" height="230">`
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;

}






// let querry = `<table class="tab">
// <thead>
//   <tr>
//     <th clsaa="col-1">NO</th>
//     <th clsaa="col-2">Names</th>
//     <th clsaa="col-3">Email</th>
//     <th clsaa="col-4">Phone</th>
//     <th clsaa="col-5">Message</th>
//   </tr>
// </thead>
// <tbody>`

// for (let i = 0; i < querry.length; i++){
//   querry = querry + `<tr>
//       <td>${i + 1}</td>
//       <td>${querry[i].name}</td>
//       <td>${querry[i].email}</td>
//       <td>${querry[i].phone}</td>
//       <td>${querry[i].message}</td>
//     </tr> `;
// }
// querry = querry+`</tbody>
// </table>`;
// document.getElementById("test").innerHTML = querry;

// querry = [];