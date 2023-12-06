const valueEl = document.querySelector(".value");
const btnEl = document.querySelectorAll(".btn");
let count = 0;

btnEl.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const style = e.currentTarget.classList;
        if (style.contains("decrease")) {
            count--;
        } else if (style.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        valueEl.textContent = count;
    });
});
