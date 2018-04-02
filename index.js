var arrayAddress = []

function addAddress() {
  var name = document.getElementById("fullName").value;

  arrayAddress.push(name)
  return arrayAddress;
}

function showAddress() {
  return arrayAddress
}