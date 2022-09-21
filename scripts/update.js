//const options = {weekday: 'numeric', day: 'numeric', month: 'numeric', year:'numeric', }
let today = new Date();
document.getElementById('year').textContent = (' '+today.getFullYear()+' ');
document.getElementById('currentdate').textContent = (today.toLocaleDateString('en-US')) + '  '+today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
