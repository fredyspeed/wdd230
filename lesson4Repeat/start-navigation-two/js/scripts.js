function toggleMenu(){
    console.log("It Worked!");
    document.getElementById("primary_nav").classList.toggle("open");
    document.getElementById("hamburger_button").classList.toggle("open");

}

const x = document.getElementById("hamburger_button");
x.onclick = toggleMenu;