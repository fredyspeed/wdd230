/* This program record the times that is visited the page and days passed */
const drinks_send = document.querySelector("#drinks_sends");

if (!localStorage.getItem("number_drink_send")) {
	drinks_send.textContent = `you haven't sent drink specials yet `;
} else {
	drinks_send.innerHTML = 'you haven sent <strong> ' +localStorage.getItem("number_drink_send")+ '</strong>  drink specials';
}




