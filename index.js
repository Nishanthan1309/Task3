let sidenavber = document.querySelector(".side-navbar")
let taggle = document.querySelector(".navbar-taggle")
let closebtn = document.querySelector(".side-btn")
taggle.addEventListener("click", function () {
    sidenavber.style.right = "0"
})
closebtn.addEventListener("click", function () {
    sidenavber.style.right = "-60%"
})

let skill = document.querySelector(".active-skill")
let experience = document.querySelector(".experience")
let education = document.querySelector(".education")
function openlink(comeevent, element) {
    let detailstab = document.querySelectorAll(".details-tap")
      detailstab.forEach(tab => {
        tab.classList.remove("active-tab")
    })

    element.classList.add("active-tab")

    if (comeevent === "experience") {
        education.style.display = "none"
        skill.style.display = "none"
        experience.style.display = "block"


    } else if (comeevent === "education") {
        education.style.display = "block"
        skill.style.display = "none"
        experience.style.display = "none"

    } else {
        education.style.display = "none"
        skill.style.display = "block"
        experience.style.display = "none"

    }
}