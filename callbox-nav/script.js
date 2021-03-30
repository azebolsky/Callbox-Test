const inventoryDropdown = document.getElementsByClassName("inventory-dropdown");
const inventory = document.getElementsByClassName("inventory");

$(inventoryDropdown).on("click", function () {
  $(inventory).toggleClass("clicked");
});
