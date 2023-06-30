function show() {
  var div = document.getElementById("add");
  var saveBtn = document.getElementById("save");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
    saveBtn.style.display = "none";
  }
}

function add() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var age = document.getElementById("age").value;
  var startDate = document.getElementById("date").value;

  var item = {
    name: name,
    address: address,
    age: age,
    startDate: startDate,
  };
  var listUser = localStorage.getItem("list-User")
    ? JSON.parse(localStorage.getItem("list-User"))
    : [];
  listUser.push(item);
  localStorage.setItem("list-User", JSON.stringify(listUser));
  renderUser();
  clear();
}

function renderUser() {
  var listUser = localStorage.getItem("list-User")
    ? JSON.parse(localStorage.getItem("list-User"))
    : [];
  var index = document.getElementById("index").value;
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var age = document.getElementById("age").value;
  var startDate = document.getElementById("date").value;
  var user = `<tr>
        
    </tr>`;

  listUser.map((value, index) => {
    user += `<tr><th scope='row'> ${index + 1} </th><td> ${
      value.name
    }   </td><td> ${value.address}   </td><td>  ${value.age} </td><td> ${
      value.startDate
    } </td><td><div class='d-flex justify-content-around '><button onclick ='editUser(${index})'> <i class='fa-solid fa-user-pen'></i> </button> <button onclick='Delete( ${index} )'><i class='fa-solid fa-trash-can'></i></button></div></td></tr>`;
  });

  document.getElementById("data").innerHTML = user;
}

function clear() {
  document.getElementById("index").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("age").value = "";
  document.getElementById("date").value = "";
}

function editUser(index) {
  var listUser = localStorage.getItem("list-User")
    ? JSON.parse(localStorage.getItem("list-User"))
    : [];
  document.getElementById("index").value = index;
  document.getElementById("name").value = listUser[index].name;
  document.getElementById("address").value = listUser[index].address;
  document.getElementById("age").value = listUser[index].age;
  document.getElementById("date").value = listUser[index].startDate;
  document.getElementById("add").style.display = "block";
  document.getElementById("save").style.display = "inline-block";
  document.getElementById("addBtn").style.display = "none";
}

function Delete(index) {
  var listUser = localStorage.getItem("list-User")
    ? JSON.parse(localStorage.getItem("list-User"))
    : [];
  listUser.splice(index, 1);
  localStorage.setItem("list-User", JSON.stringify(listUser));
  renderUser();
}

function confirmUser() {
  renderUser();
  clear();
  document.getElementById("add").style.display = "none";
  document.getElementById("addBtn").style.display = "inline-block";
}

function saveChange() {
  var listUser = localStorage.getItem("list-User")
    ? JSON.parse(localStorage.getItem("list-User"))
    : [];
  var index = document.getElementById("index").value;
  var nameEdit = document.getElementById("name").value;
  var addressEdit = document.getElementById("address").value;
  var ageEdit = document.getElementById("age").value;
  var startDateEdit = document.getElementById("date").value;
  console.log(index);
  listUser[index] = {
    name: nameEdit,
    address: addressEdit,
    age: ageEdit,
    startDate: startDateEdit,
  };
  localStorage.setItem("list-User", JSON.stringify(listUser)); // luu lai
  renderUser();
}

window.onload = function () {
  renderUser();
};
