// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
//datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

let today = new Date();
document.getElementById('year').textContent = (' '+today.getFullYear()+' ');
document.getElementById('currentdate').textContent = (today.toLocaleDateString('en-US')) + '  '+today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
const day = today.getDay();
console.log(day);
if (day == 1 || day == 4){
    const banner = document.querySelector(".banner").style.display ="flex";
    banner
}



/* To interact with the menu */

function toggleMenu(){
    console.log("It Worked!");
    document.getElementById("primary_nav").classList.toggle("open");
    document.getElementById("hamburger_button").classList.toggle("open");
    

}

const x = document.getElementById("hamburger_button");
x.onclick = toggleMenu;

const button_x = document.getElementById("x_button");
button_x.onclick = toggleMenu;

document.querySelector(".banner_close").addEventListener("click",function(){
    this.closest(".banner").style.display = "none";
});