// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', evt => {
    evt.preventDefault();
   const product = form.elements.product;
   const qty = form.elements.qty;
   addProd(product.value , qty.value);
   product.value = '';
   qty.value = '';
});

const addProd = (prod, q) => {
  let newProd = document.createElement('li');
  newProd.innerText = `${q} ${prod}s`;
  list.appendChild(newProd);
};
