const btns = document.querySelectorAll(".btn")
const resetBtn = document.querySelector("#resetBtn")

const pX = document.querySelector("#pointX")
const pO = document.querySelector("#pointO")
// const pWinner = document.querySelector("#winner")

let gameActive = true
let turn = "x"

let pointX = 0
let pointO = 0

const p1Array = []
const p2Array = []

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

resetBtn.addEventListener("click", function() {
    btns.forEach((btn, i) => {
        
        setTimeout(() => {
            btn.style.color = "white"
            setTimeout(() => {
                btn.classList.remove("winC" + btn.innerHTML)
                btn.innerHTML = ""
            }, 100 * i)
        }, 150 * i)
    })

    this.classList.add("resetBtnAnimation")
    setTimeout(()=> this.classList.remove("resetBtnAnimation"), 1000)

    p1Array.length = 0
    p2Array.length = 0

    turn = "x"

    gameActive = true
})

const pieceOpacity = (array, btns, color) => {
    console.log(array.length);
    
    if(array.length === 3) {
        btns[array[0]].style.color = color
    }
}

const arrayQuery = (array, btns, symbol) => {
    for(let i = 0; i < btns.length; i++) {
        if (!!btns[i].innerHTML && !array.includes(i) && btns[i].innerHTML === symbol) {
            if(array.length === 3) {
                const oldIndex = array.shift()
                btns[oldIndex].innerHTML = ""
            }
            array.push(i)
            return i
        }
    }
}

const checkWinner = () => {
    for (const combo of winningCombination) {
        const [a, b, c] = combo
        if(btns[a].innerText && btns[a].innerText === btns[b].innerText && btns[a].innerText === btns[c].innerText) {
            
            btns[a].classList.add("winC" + btns[a].innerHTML)
            btns[b].classList.add("winC" + btns[a].innerHTML)
            btns[c].classList.add("winC" + btns[a].innerHTML)
        
        return btns[a].innerText
        }
    }
    return null
}

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        
        if(gameActive && !this.innerHTML) {
            this.innerHTML = turn

            if(turn === "x") {
                arrayQuery(p1Array, btns, "x")
                this.style.color = "rgba(230, 57, 70, 1)"
                pieceOpacity(p1Array, btns, "rgba(230, 57, 70, 0.5)")
            } else {
                arrayQuery(p2Array, btns, "o")
                this.style.color = "rgba(22, 127, 236, 1)"
                pieceOpacity(p2Array, btns, "rgba(22, 127, 236, 0.5)")
            }

            const winner = checkWinner()

            if(winner) {
                if(winner === "x") {
                    pointX++
                    pX.innerHTML = pointX
                }
                if(winner === "o") {
                    pointO++
                    pO.innerHTML = pointO
                }



                gameActive = false
            } else {
                turn = turn === "x" ? "o" : "x"
            }
        }
    })
})