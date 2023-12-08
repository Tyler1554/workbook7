"use strict";
//get html elements
let categorySelect = document.querySelector("#category-select-drop");
let cardTitle = document.querySelector("#card-title");
let cardText = document.querySelector("#card-text");
let cardFooter = document.querySelector("#card-footer");
let selectValue = "";


// fetch functions
async function loadCategories() {
  let response = await fetch("http://localhost:8081/api/categories");
  let data = await response.json();
  return data;
}
async function loadProducts() {
  let response = await fetch("http://localhost:8081/api/products");
  let data = await response.json();
  return data;
}

//load drop function
function loadCategoriesDropDown(categories) {
  for (const category of categories) {
    let option = document.createElement("option");
    option.innerText = category.name;
    option.value = category.categoryId;
    categorySelect.appendChild(option);
  }
}
//load table function
function loadSelectedTable(products) {
  for (const product of products) {
    selectValue = categorySelect.value;
    if (selectValue == product.categoryId) {
      cardTitle.innerText = product.productName;
      cardText.innerText = product.unitPrice;
      cardFooter.innerText = product.unitsInStock;
    }
  }
}

//wire up
window.onload = async function () {
  let categories = await loadCategories();
  let products = await loadProducts();
  loadCategoriesDropDown(categories);
};
