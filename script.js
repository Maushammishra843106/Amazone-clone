let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    const item = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: parseFloat(button.dataset.price),
    };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(${item.name} added to cart!);
  });
});
