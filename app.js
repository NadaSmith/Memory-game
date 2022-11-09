const cardArray = [
    {
        name: 'First Look',
        img: '1.jpg',
    },
    {
        name: 'Second Look',
        img: '2.jpg',
    },
    {
        name: 'Third Look',
        img: '3.jpg',
    },
    {
        name: 'Fourth Look',
        img: '4.jpg',
    },
    {
        name: 'Fifth Look',
        img: '5.jpg',
    },
    {
        name: 'Seventh Look',
        img: '6.jpg',
    },
    {
        name: 'First Look',
        img: '1.jpg',
    },
    {
        name: 'Second Look',
        img: '2.jpg',
    },
    {
        name: 'Third Look',
        img: '3.jpg',
    },
    {
        name: 'Fourth Look',
        img: '4.jpg',
    },
    {
        name: 'Fifth Look',
        img: '5.jpg',
    },
    {
        name: 'Seventh Look',
        img: '6.jpg',
    }
] 

cardArray.sort(() => 0.5 - Math.random () ) // nice trick to sort an array checking if it is smaller or larger than 0.5 //

const gridDisplay = document.querySelector('#grid') // method looks through document to find the element grid //
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) { // start from 0 and if i is < 10 then increment i by 1 //
        const card = document.createElement ('img')
        card.setAttribute('src', '7.jpg' )
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card) // can use appendChild as well //
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '7.jpg')
        cards[optionTwoId].setAttribute('src', '7.jpg')
        alert('You have matched images' )
    }
    if (cardsChosen [0] == cardsChosen [1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', '8.jpg')
        cards[optionTwoId].setAttribute('src', '8.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', '7.jpg')
        cards[optionTwoId].setAttribute('src', '7.jpg')
        alert('Sorry, try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations, You Win!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id') // to know which card we clicked //
    cardsChosen.push(cardArray[cardId].name) // method to push an item into an array //
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}