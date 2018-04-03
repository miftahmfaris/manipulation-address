var arrayAddress = []

function addAddress() {
  var objectAddress={};
  objectAddress.fullName = document.getElementById("fullName").value;
  objectAddress.address = document.getElementById("address").value;
  objectAddress.phoneNumber = document.getElementById("phoneNumber").value;
  arrayAddress.push(objectAddress);
  return arrayAddress;
}

function showAddress() {
}

document.getElementById("addButton").addEventListener("click",function() {
  localStorage.setItem("arrayAddress", JSON.stringify(arrayAddress))
  for (var i = 0; i < arrayAddress.length; i++) {
    var list = document.createElement("li");
    var listAddress = document.createTextNode(arrayAddress[i].fullName);
  }

  list.appendChild(listAddress);
  document.body.appendChild(list);
  localStorage.getItem("arrayAddress",JSON.parse(arrayAddress))
  console.log(arrayAddress);
})

function clearStorage() {
  localStorage.clear();
}
