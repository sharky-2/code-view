const target_more = document.getElementById("target-more")
const button_more = document.getElementById("button-more")
button_more.addEventListener("click", function() {
    target_more.scrollIntoView({ behavior: "smooth" })
})
const target_home = document.getElementById("target-home")
const button_home = document.getElementById("header-button-1")
button_home.addEventListener("click", function() {
    target_home.scrollIntoView({ behavior: "smooth" })
})