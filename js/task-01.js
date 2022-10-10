const categoriesRef = document.querySelector('#categories');
console.log("Number of categories:", categoriesRef.children.length);

for (const item of categoriesRef.children) {
   const headerTextContent = item.firstElementChild.textContent;
   console.log("Category:", headerTextContent)
   
   const childrenOfsubCategory = item.lastElementChild.children;
   console.log("Elements:", childrenOfsubCategory.length)
}