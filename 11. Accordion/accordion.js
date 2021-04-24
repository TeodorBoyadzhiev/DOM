function toggle() {
    const more = document.querySelector(".button");
    const text = document.querySelector("#extra");

    text.style.display = (text.style.display == '' || text.style.display == "none") ? "block" : "none";
    
    more.textContent = more.textContent == 'More' ? 'Less' : 'More';
}