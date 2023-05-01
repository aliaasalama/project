// select all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll("button");
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});