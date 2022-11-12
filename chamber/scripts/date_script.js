let date_now = new Date();

let input_format = document.getElementById("date");
let date_format = (date_now.toLocaleDateString('en-US')) + '  '+date_now.getHours() + ':' + date_now.getMinutes() + ':' + date_now.getSeconds();
input_format.setAttribute('value',date_format);