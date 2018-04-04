var arrayAddress = checkLocalStorage();
var add_button = document.getElementById("addButton");
var full_name = document.getElementById("fullName");

function showAddress() {
  listAddressBook.innerHTML = "";

  for (var i = 0; i < arrayAddress.length; i++) {
    let li = document.createElement('li')
    let listAddress = document.createTextNode(arrayAddress[i].fullName)
    li.setAttribute("id", "index_" + i)

    li.appendChild(listAddress);
    listAddressBook.appendChild(li);
  }
}

function addAddress() {
  var objectAddress = {};
  objectAddress.fullName = full_name.value;
  arrayAddress.push(objectAddress);
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
showAddress();