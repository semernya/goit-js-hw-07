const categoriesList = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesList.length);

categoriesList.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
      console.log("Elements: ", category.lastElementChild.children.length);
});
