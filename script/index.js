var arrayAddress = checkLocalStorage();
var add_button = document.getElementById("addButton");
var full_name = document.getElementById("fullName");

function template(arrayAddress, index) {
  return `
  <span id="list${index}" onclick=editAddress(${index})>${arrayAddress.fullName}</span>
  <span id="destroy${index}" onclick=destroyAddress(${index})>+</span>
  <span id="edit${index}" onclick=addEditAddress(${index})>-</span>
  `
}

function showAddress() {
  listAddressBook.innerHTML = "";

  arrayAddress.forEach((arrayAddress, index) => {
    const element = document.createElement("li")
    element.innerHTML = template(arrayAddress, index)
    listAddressBook.append(element);
  })
  // for (var i = 0; i < arrayAddress.length; i++) {
  //   let li = document.createElement('li')
  //   let listAddress = document.createTextNode(arrayAddress[i].fullName)
  //   li.id = "index_" + i //set new attribue id
  //   li.setAttribute("onclick", "destroy" + i) //set new attribue id
  //
  //   li.appendChild(listAddress);
  //   listAddressBook.appendChild(li);
  // }
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
// document.getElementById(`edit${index}`).("dblclick", editAddress)

showAddress();