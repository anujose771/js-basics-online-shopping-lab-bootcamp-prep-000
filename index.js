var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { itemName: itemPrice };
  newItem[itemPrice]= Math.floor(Math.random()*100);
  newItem[itemName] = item;
  console.log(`${newItem.itemName} has been added to your cart.`);
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
  delete cart.itemName;
}

function placeOrder(cardNumber) {
  if ( cardNumber == undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else{
    console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`);
    cart = nil;
  }
}
