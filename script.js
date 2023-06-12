const btn = document.getElementById('btn');
const nav = document.getElementById('.selling');

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
});