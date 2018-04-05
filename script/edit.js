function editAddress(index) {
  full_name.value = JSON.parse(localStorage.addressBook)[index].fullName;
}

function addEditAddress(index) {
  var edit = full_name.value;
  arrayAddress[index].fullName = edit;
  localStorage.addressBook = JSON.stringify(arrayAddress);
  full_name.value = ""
  showAddress();
}

function changeSpanToInput() {

}