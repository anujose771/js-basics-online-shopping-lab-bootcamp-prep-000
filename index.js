var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  var itemPrice = Math.floor(Math.random()*100) +1;
  newItem[itemName] = itemPrice;
  console.log(`${item} has been added to your cart.`);
  cart.push(newItem);
  return cart;
}
function viewCart() {
    if(cart.length ===0){
      console.log("Your shopping cart is empty.");
    }
    else{
      var text = "In your cart, you have";
      for (var i = 0 ; i < cart.length ; i++) {
            text += `${item.itemName} at ${item.itemPrice}` ;
      }
    }
}

function total() {
  let sum = 0;
  for (var i of cart) {
    sum = sum + i[itemPrice];
  }
  return sum;
}

function removeFromCart(item) {
  if(!cart.hasOwnProperty(item)){
    console.log("That item is not in your cart.");
    return cart;
  }
  else{
    delete cart[item];
    return cart;
  }
}

function placeOrder(cardNumber) {
  if ( !cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else{
    console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`);
    cart = nil;
  }
}
