const listEl = document.getElementById('categories');
const listItems = listEl.children;

console.log(`Number of categories: `, listEl.children.length);
[...listItems].forEach(item =>
    console.log(`Category: ${item.firstElementChild.textContent} 
Elements:`, item.lastElementChild.children.length));
