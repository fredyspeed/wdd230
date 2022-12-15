/* last modification */
const date = new Date(document.lastModified);
console.log((date.toLocaleDateString('en-US')) + '  '+date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
document.getElementById('lastmodification').textContent = (date.toLocaleDateString('en-US')) + '  '+date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
