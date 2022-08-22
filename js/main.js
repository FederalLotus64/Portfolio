let images = ["images/placeholder.png", "images/placeholder.png", "images/placeholder.png"];
let dots = document.querySelectorAll(".dot");
let active = 0;
let items;

if (document.querySelector(".showcase")) {
    items = document.querySelector(".showcase").children;
    dots[active].classList.toggle("active");
    items[0].style.backgroundImage = "none";
    items[1].style.backgroundImage = "url(" + images[0] + ")";
    items[2].style.backgroundImage = "url(" + images[1] + ")";
}

window.onclick = (e) => {
    let icon = document.querySelectorAll("header img")[0];
    let dropdown = document.getElementsByClassName("dropdown")[0];
    if (e.target == icon) {
        dropdown.classList.toggle("show");
    } else if (e.target != icon) {
        dropdown.classList.remove("show");
    }

    if (e.target == document.querySelectorAll(".arrow")[0] && active > 0) {
        dots[active].classList.remove("active");
        active--;
        dots[active].classList.toggle("active");
        items[0].style.backgroundImage = "url(" + images[active-1] + ")";
        items[1].style.backgroundImage = "url(" + images[active] + ")";
        items[2].style.backgroundImage = "url(" + images[active+1] + ")";
    } else if (e.target == document.querySelectorAll(".arrow")[1] && active < (dots.length - 1)) {
        dots[active].classList.remove("active");
        active++;
        dots[active].classList.toggle("active");
        items[0].style.backgroundImage = "url(" + images[active-1] + ")";
        items[1].style.backgroundImage = "url(" + images[active] + ")";
        items[2].style.backgroundImage = "url(" + images[active+1] + ")";
    }

    if (e.target == document.querySelector("form input[type='submit']")) {
        alert("Form is currently not functioning. Thanks for your patience.")
    }
}

function Send() {
    /* Yes, these are API keys. However, they have no use outside this application. In other words, ignore them since they are literaly useless. */
    /*emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', '#emailform')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });*/

    document.getElementById("emailform").reset();
}