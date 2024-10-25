const btns = document.querySelectorAll("#button")
const pWinner = document.querySelector("#winner")

let endGame = true

const p1Array = []
const p2Array = []

const arrayQuery = (array, btns, symbol) => {
    
    for(let i = 0; i < btns.length; i++) {

        if(!!btns[i].innerHTML && !array.includes(i) && btns[i].innerHTML == symbol) {
            if(array.length == 3) {
                const test = array.shift()
                btns[test].innerHTML = ""
            }
            array.push(i)
            console.log(array)
            return i
        }
    }
    
}

const winner = (player) => {
    
    if(!endGame) {
        pWinner.innerText = `O ${player} venceu!`
    }

}

const gameRole = (n1, n2, n3) => {
    if(btns[n1].innerHTML == btns[n2].innerHTML && btns[n1].innerHTML == btns[n3].innerHTML && !!btns[n1].innerHTML) {
        
        endGame = !endGame
    }
}

const announceWinner = (player) => {
    gameRole(0, 1, 2)
    gameRole(3, 4, 5)
    gameRole(6, 7, 8)

    gameRole(0, 3, 6)
    gameRole(1, 4, 7)
    gameRole(2, 5, 8)

    gameRole(0, 4, 8)
    gameRole(2, 4, 6)

    winner(player)
}

let turn = "x"

btns.forEach(function(btn) {
        
        btn.addEventListener("click", function() {
            // console.log(this);
            if(endGame && !this.innerHTML) {
                this.innerText = turn

                arrayQuery(p1Array, btns, "x")
                arrayQuery(p2Array, btns, "o")
                
                announceWinner(turn)

                turn == "x" ? turn = "o" : turn = "x"

                
            }
        })
})