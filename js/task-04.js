const counterValue = document.querySelector('#value');
counterValue.textContent = '0';

const addDecrement = () => { 
  return counterValue.textContent = `${Number(counterValue.textContent) - 1}`
};

const addIncrement = () => { 
  return counterValue.textContent = `${Number(counterValue.textContent) + 1}`
};

const decrementCounterValue = document.querySelector('[data-action="decrement"]');
decrementCounterValue.addEventListener('click', addDecrement);

const incrementCounterValue = document.querySelector('[data-action="increment"]');
incrementCounterValue.addEventListener('click', addIncrement);