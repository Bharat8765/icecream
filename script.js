document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const flavor = event.target.dataset.flavor;
        const price = parseFloat(event.target.dataset.price);
        
        // Add to cart
        const listItem = document.createElement('li');
        listItem.textContent = `${flavor} - ₹${price}`;
        cartList.appendChild(listItem);
  
        // Update total price
        totalPrice += price;
        totalPriceElement.textContent = totalPrice.toFixed(2);
      });
    });
  
    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', () => {
      if (totalPrice > 0) {
        alert(`Thank you for your purchase! Total: ₹${totalPrice.toFixed(2)}`);
        cartList.innerHTML = '';  // Clear cart
        totalPrice = 0;
        totalPriceElement.textContent = '0';
      } else {
        alert('Your cart is empty!');
      }
    });
  });
  