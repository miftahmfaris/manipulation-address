var arrayAddress = checkLocalStorage();
var add_button = document.getElementById("addButton");
var full_name = document.getElementById("fullName");

function showAddress() {
  listAddressBook.innerHTML = "";

  for (var i = 0; i < arrayAddress.length; i++) {
    let li = document.createElement('li')
    let listAddress = document.createTextNode(arrayAddress[i].fullName)
    li.setAttribute("id", "index_" + i)
    li.setAttribute("onclick", `destroy(${i})`)

    li.appendChild(listAddress);
    listAddressBook.appendChild(li);
  }
}

function addAddress() {
  if (full_name.value !== "") {
    var objectAddress = {};
    objectAddress.fullName = full_name.value;
    arrayAddress.push(objectAddress);
  } else {
    alert("Please insert Your Name")
  }
  full_name.value = "";
  return arrayAddress;
}

function checkLocalStorage() {
  if (localStorage.addressBook) {
    const arrayContact = JSON.parse(localStorage.addressBook)
    return arrayContact;
  } else {
    localStorage.addressBook = "[]";
    return [];
  }
}

function storeAddressToLocalStorage() {
  localStorage.addressBook = JSON.stringify(addAddress());
}

function callAddThenShow() {
  storeAddressToLocalStorage()
  showAddress()
}

add_button.addEventListener("click", callAddThenShow);
full_name.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    add_button.click();
  }
});

showAddress();