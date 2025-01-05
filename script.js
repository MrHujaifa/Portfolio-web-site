let menuList = document.getElementById("menu-list");

menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px"; 
    } else {
        menuList.style.maxHeight = "0px";
    }
}


let typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "React Developer", "JS Developer"], // Corrected 'Strings' to 'strings'
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});














