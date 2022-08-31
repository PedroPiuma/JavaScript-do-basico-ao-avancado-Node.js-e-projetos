window.onload = () => {
    const wins = ['1,2,3', '4,5,6', '7,8,9', '1,4,7', '2,5,8', '3,6,9', '1,5,9', '3,5,7']
    let gameMode = undefined
    let flag = 1
    let xPoints = 0
    let circlePoints = 0
    let xValues = ''
    let circleValues = ''
    const game = document.querySelector('#game')
    const box = [...document.querySelectorAll('#game tr td')]
    const multiplayer = document.querySelector('#multiplayer')
    const singleplayer = document.querySelector('#singleplayer')
    const mainBtns = document.querySelector('.main-btns')
    const scoreX = document.querySelector('#scoreboard-x')
    const scoreCircle = document.querySelector('#scoreboard-circle')
    const result = document.querySelector('#result')

    const randomValue = max => Math.floor(Math.random() * max)
    const endGame = player => {
        if (player === 'x') {
            xPoints++
            scoreX.innerHTML = `${xPoints}`
        } else if (player === 'circle') {
            circlePoints++
            scoreCircle.innerHTML = `${circlePoints}`
        }
        const boxsChecked = [...document.querySelectorAll('[gameValue][local]')]
        boxsChecked.forEach(box => box.removeAttribute('gameValue'))
        flag = 1
        xValues = ''
        circleValues = ''
        gameMode = undefined
        addEventsAndAttributes()
        setTimeout(() => {
            result.innerHTML = player !== 'Velha' ? `Vitória do jogador ${player.toUpperCase()}` : `${player}!`
            setTimeout(() => result.classList.add('hidden'), 2500)
            result.classList.remove('hidden')
            box.forEach(box => box.innerHTML = '')
            mainBtns.classList.remove('hidden')
            game.classList.add('hidden')
        }, 200)
    }
    const checkStatus = () => {
        const boxsChecked = [...document.querySelectorAll('[gameValue][local]')]
        boxsChecked.forEach(el => el.removeEventListener('click', click))
        const xs = boxsChecked.filter(box => box.attributes.gameValue.value === 'x')
        const circles = boxsChecked.filter(box => box.attributes.gameValue.value === 'circle')

        const updateXsValues = () => {
            xValues = ''
            xs.forEach(x => xValues += x.attributes.local.value)
            wins.forEach(win => {
                let match = 0
                for (let i = 0; i < xValues.length; i++) {
                    win.indexOf(xValues[i]) >= 0 ? match++ : ''
                    if (match === 3) endGame('x')
                }
            })
        }

        const updateCircleValues = () => {
            circleValues = ''
            circles.forEach(circle => circleValues += circle.attributes.local.value)
            wins.forEach(win => {
                let match = 0
                for (let i = 0; i < circleValues.length; i++) {
                    win.indexOf(circleValues[i]) >= 0 ? match++ : ''
                    if (match === 3) endGame('circle')
                }
            })
        }

        updateXsValues()
        updateCircleValues()
    }
    const multiplayerClick = event => {
        event.target.removeEventListener('click', click)
        event.target.innerHTML = `<img src="./icons-${flag === 1 ? 'x' : 'circle'}.png" alt="">`
        flag === 1 ? event.target.setAttribute('gameValue', 'x') : event.target.setAttribute('gameValue', 'circle')
        flag = flag === 2 ? 1 : 2
        checkStatus()
        const emptyBox = box.filter(td => td.children.length === 0)
        emptyBox.length === 0 ? endGame('Velha') : ''
    }
    const singleplayerClick = event => {
        event.target.removeEventListener('click', click)
        event.target.innerHTML = `<img src="./icons-x.png" alt="">`
        event.target.setAttribute('gameValue', 'x')
        const emptyBox = box.filter(td => td.children.length === 0)
        const randomBox = emptyBox[randomValue(emptyBox.length)]
        randomBox?.setAttribute('gameValue', 'circle')
        if (emptyBox.length === 0) endGame('Velha')
        else randomBox.innerHTML = `<img src="./icons-circle.png" alt="">`
        checkStatus()
    }
    const click = event => gameMode === 'multiplayer' ? multiplayerClick(event) : gameMode === 'singleplayer' ? singleplayerClick(event) : ''
    const startGame = mode => {
        mainBtns.classList.add('hidden')
        game.classList.remove('hidden')
        gameMode = mode
    }
    const addEventsAndAttributes = () => box.forEach((box, index) => {
        box.addEventListener('click', click)
        box.setAttribute('local', index + 1)
    })
    addEventsAndAttributes()
    multiplayer.addEventListener('click', () => startGame('multiplayer'))
    singleplayer.addEventListener('click', () => startGame('singleplayer'))
}
