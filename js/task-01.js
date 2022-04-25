const countCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", countCategories.length);

for (const element of countCategories) {
  const headlineText = element.firstElementChild;
  console.log("Category:", headlineText.textContent);

  const childrenList = element.lastElementChild.children;
  console.log("Elements:", childrenList.length);
}
