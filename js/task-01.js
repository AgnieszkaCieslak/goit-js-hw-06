const log = (param, text = "RESULT: ") => {
    console.log(text, param);
  };
//---------------------------------------------
const liItemList = document.querySelectorAll('li.item');

 log(`Number of categories: ${liItemList.length}`);
 liItemList.forEach(item => {
     const category = item.querySelector ("h2").textContent;
    
 const elementsList = item.querySelectorAll(':scope >ul >li').length;
 log(`Category: ${category}`);
 log(`Elements: ${elementsList}`);
 });