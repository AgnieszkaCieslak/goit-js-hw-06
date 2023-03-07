const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const marker = document.querySelector("ul#ingredients");

const arrayList = [];
for (let i = 0; i < ingredients.length; i++) {
  arrayList.push(document.createElement("li"));
  arrayList[i].textContent = ingredients[i];
  arrayList[i].classList.add("item");
  marker.append(arrayList[i]);
}
