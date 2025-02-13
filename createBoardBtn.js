const container = document.querySelector('#containerBoard')

    for(let i = 1; i < 10; i++) {
        let btn = document.createElement('button')
        btn.classList.add(`c${i}`, 'btn')
        container.appendChild(btn)
    }