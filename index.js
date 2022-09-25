const body = document.querySelector("body");

const container = document.querySelector(".container");

const close = document.querySelector(".close");


document.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (e.clientY > 10) {
        container.style.display = "block";
        body.style.backgroundColor = "gray";

    }
});


close.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "none";
    body.style.display = "white";
});


document.addEventListener("click", (e) => {
    e.preventDefault();
    container.style.display = "none";
    body.style.display = "white";
}); 