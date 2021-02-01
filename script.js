const nav = document.getElementById('navigation')
const menu = document.getElementById("menu-open");
const closed = document.getElementById("menu-close");

const links = document.getElementById("links")


menu.addEventListener('click', () => {
    links.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    closed.classList.toggle('hidden');
    nav.classList.toggle('h-screen')
})

closed.addEventListener('click', () => {
    links.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    closed.classList.toggle('hidden');
    nav.classList.toggle('h-screen')
})