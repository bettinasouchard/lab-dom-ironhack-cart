// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector(".price span");
  // emplacement prix de base now stocked dans const price
  let priceValue = price.innerHTML;
  // prix de base extrait de l'emplacement 

  const quantity = product.querySelector(".quantity input");
  // emplacement quantité now stocked dans const qt
  let quantityValue = quantity.value;
  // nb quantité extrait de l'emplacement

  let subtotalPrice = parseFloat(priceValue * quantityValue);
  // prix X quantité arrondi ( 10$ x 3)
  
  const subtotal = product.querySelector(".subtotal span");
  // emplacement du subtotal now stocked dans const subtotal

  subtotal.textContent = subtotalPrice;
  // remplace ce que contenait subtotal(le textContent) par subtotalPrice aka ( 10$ x 3)

  return subtotalPrice;
  // renvoi 30$
}


  

function calculateAll() {
 
  const allProducts = document.getElementsByClassName('product');
  // parents des produits
  let totalPrice = 0;
  // pars de 0
  const totalPriceDisplay = document.querySelector('#total-value span');
  // target ce qui affiche le prix final
  for (let i = 0; i < allProducts.length; i++) {
  // loop dans la liste des produits  
    totalPrice += updateSubtotal(allProducts[i]);
  // on ajoute à 0 le total des produits trouvés (0 + serviette X 2 + canard X 1 ... )  
  }
  totalPriceDisplay.textContent = totalPrice.toFixed(2);
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
