const countCategories = document.querySelectorAll("li.item");
console.log('Number of categories:', countCategories.length);

for (const element of countCategories) {
  const headlineText = element.querySelector("h2");
  console.log('Category:', headlineText.textContent);
  const itemName = element.querySelectorAll("li");
  console.log('Elements:', itemName.length);
}