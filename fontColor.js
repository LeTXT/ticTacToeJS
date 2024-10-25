const buttons = document.querySelectorAll(".btn")

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if(!!this.innerHTML) {
            if(this.innerHTML === "x") {
                this.style.color = "rgba(230, 57, 70, 1)"
            }
            if(this.innerHTML === "o") {
                this.style.color = "rgba(22, 127, 236, 1)"
            }
        }
    })
})