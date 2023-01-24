// Section Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden")
        } else {
            entry.target.classList.remove("show");
        }
    })
})

document.querySelectorAll(".hidden")
    .forEach(element => observer.observe(element));

// Project Tile Hover
const projectTileHover = (parent) => {
    parent.getElementsByClassName("project-image")[0].classList.add("project-image-hover"); 
    parent.getElementsByClassName("info")[0].classList.add("info-hover");
}

const projectTileLeave = (parent) => {
    parent.getElementsByClassName("project-image")[0].classList.remove("project-image-hover");
    parent.getElementsByClassName("info")[0].classList.remove("info-hover");
}