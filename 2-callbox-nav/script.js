const inventoryDropdown = document.getElementsByClassName("inventory-dropdown");
const inventory = document.getElementsByClassName("inventory");

// jquery to toggle class from inventory to inventory.clicked
// opens and closes the inventory dropdown
$(inventoryDropdown).on("click", function () {
  $(inventory).toggleClass("clicked");
});
