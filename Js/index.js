let closeMenu = document.getElementById("close-menu");
let opneMenu = document.getElementById("open-menu");
let nav = document.querySelector("nav");

document.addEventListener("click", (e) => {
    if(e.target === opneMenu) {
        nav.style.right = "0px";
    } else if(e.target === closeMenu) {
        nav.style.right = "-300px";
    }
});

