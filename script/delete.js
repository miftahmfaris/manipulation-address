function destroyAddress(index) {
  arrayAddress.splice(index, 1);
  localStorage.addressBook = JSON.stringify(arrayAddress)
  showAddress();
}