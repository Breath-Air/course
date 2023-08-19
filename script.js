hamburger = document.querySelector(".toggle-menu")
hamburger.onclick = function() {
     navbar = document.querySelector(".navlinks");
     navbar.classList.toggle("active");
}

const search = () =>{
     alert("still in progress")
}

document.getElementById("search").addEventListener("click",search)