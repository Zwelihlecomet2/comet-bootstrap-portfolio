// 

window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("scrolling", window.scrollY > 0)
})