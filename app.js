/* import azathoth from './assets/Ancients/Azathoth.png';
import cthulhu from './assets/Ancients/Cthulthu.png';
import iogSothoth from './assets/Ancients/IogSothoth.png';
import shubNiggurath from './assets/Ancients/ShubNiggurath.png';
import Ancients from '../assets/Ancients/index.js' */
import {ancientsData} from './data/ancients.js'
import cardsDataBlue from './data/mythicCards/blue/index.js'
import cardsDataGreen from './data/mythicCards/green/index.js'
import cardsDataBrown from './data/mythicCards/brown/index.js'

//сумма карт всех
function sumCard(god) {
const sumGreenCards = ancientsData[god].firstStage.greenCards + ancientsData[god].secondStage.greenCards + ancientsData[god].thirdStage.greenCards
const sumBrownCards = ancientsData[god].firstStage.brownCards + ancientsData[god].secondStage.brownCards + ancientsData[god].thirdStage.brownCards
const sumBlueCards = ancientsData[god].firstStage.blueCards + ancientsData[god].secondStage.blueCards + ancientsData[god].thirdStage.blueCards

//массивы с легкими средними и тяжелыми картами

function addCard(cards, arr, difficulty) {
    cards.forEach(el => {
        el.difficulty === difficulty ? arr.push(el.cardFace) : ""
    })
}

//зеленые карты
let arrEasyGreen = []
let arrNormalGreen = []
let arrHardGreen = []
addCard(cardsDataGreen, arrEasyGreen, 'easy')
addCard(cardsDataGreen, arrNormalGreen, 'normal')
addCard(cardsDataGreen, arrHardGreen, 'hard')

//коричневые карты
let arrEasyBrown = []
let arrNormalBrown = []
let arrHardBrown = []
addCard(cardsDataBrown, arrEasyBrown, 'easy')
addCard(cardsDataBrown, arrNormalBrown, 'normal')
addCard(cardsDataBrown, arrHardBrown, 'hard')

//синие карты
let arrEasyBlue = []
let arrNormalBlue = []
let arrHardBlue = []
addCard(cardsDataBlue, arrEasyBlue, 'easy')
addCard(cardsDataBlue, arrNormalBlue, 'normal')
addCard(cardsDataBlue, arrHardBlue, 'hard')

let newArrEasyGreen = []
let newArrEasyBrown = []
let newArrEasyBlue = []

//если карт больше чем требуется в игре, выбираем рандомным образом
if (currentLvl == 'easy') {
    if (sumGreenCards < arrEasyGreen.length) {
        random(sumGreenCards, arrEasyGreen, newArrEasyGreen)
    }
    if (sumBrownCards < arrEasyBrown.length) {
        random(sumBrownCards, arrEasyBrown, newArrEasyBrown)
    }
    if (sumBlueCards < arrEasyBlue.length) {
        random(sumBlueCards, arrEasyBlue, newArrEasyBlue)
    }

    //если карт меньше чем требуется здесь добавляем
    if (sumGreenCards >= arrEasyGreen.length) {
        arrEasyGreen.forEach(el => {
            newArrEasyGreen.push(el)
        })
        random(sumGreenCards - arrEasyGreen.length, arrNormalGreen, newArrEasyGreen)
    } 
    if (sumBrownCards >= arrEasyBrown.length) {
        arrEasyBrown.forEach( el => {
            newArrEasyBrown.push(el)
        })
        random(sumBrownCards - arrEasyBrown.length, arrNormalBrown, newArrEasyBrown)
    } 
    if (sumBlueCards >= arrEasyBlue.length) {
        arrEasyBlue.forEach( el => {
            newArrEasyBlue.push(el)
        })    
        random(sumBlueCards - arrEasyBlue.length, arrNormalBlue, newArrEasyBlue)
    }
}

if (currentLvl == 'normal') {
    let arrNormalCardGreen = arrEasyGreen.concat(arrNormalGreen, arrHardGreen)
    let arrNormalCardBrown = arrEasyBrown.concat(arrNormalBrown, arrHardBrown)
    let arrNormalCardBlue = arrEasyBlue.concat(arrNormalBlue, arrHardBlue)
    random(sumGreenCards, arrNormalCardGreen, newArrEasyGreen)
    random(sumBrownCards, arrNormalCardBrown, newArrEasyBrown)
    random(sumBlueCards, arrNormalCardBlue, newArrEasyBlue)

}

if (currentLvl == 'hard') {
        if (sumGreenCards < arrHardGreen.length) {
            random(sumGreenCards, arrHardGreen, newArrEasyGreen)
        }
        if (sumBrownCards < arrHardBrown.length) {
            random(sumBrownCards, arrHardBrown, newArrEasyBrown)
        }
        if (sumBlueCards < arrHardBlue.length) {
            random(sumBlueCards, arrHardBlue, newArrEasyBlue)
        }
    
        //если карт меньше чем требуется здесь добавляем
        if (sumGreenCards >= arrHardGreen.length) {
            arrHardGreen.forEach(el => {
                newArrEasyGreen.push(el)
            })
            random(sumGreenCards - arrHardGreen.length, arrNormalGreen, newArrEasyGreen)
        } 
        if (sumBrownCards >= arrHardBrown.length) {
            arrHardBrown.forEach( el => {
                newArrEasyBrown.push(el)
            })
            random(sumBrownCards - arrHardBrown.length, arrNormalBrown, newArrEasyBrown)
        } 
        if (sumBlueCards >= arrHardBlue.length) {
            arrHardBlue.forEach( el => {
                newArrEasyBlue.push(el)
            })    
            random(sumBlueCards - arrHardBlue.length, arrNormalBlue, newArrEasyBlue)
        }

}

//формируем три массива по этапам

let stageOneGreenCard = ancientsData[god].firstStage.greenCards
let stageOneBrownCard = ancientsData[god].firstStage.brownCards
let stageOneBlueCard = ancientsData[god].firstStage.blueCards
let stageTwoGreenCard = ancientsData[god].secondStage.greenCards
let stageTwoBrownCard = ancientsData[god].secondStage.brownCards
let stageTwoBlueCard = ancientsData[god].secondStage.blueCards
let stageThreeGreenCard = ancientsData[god].thirdStage.greenCards
let stageThreeBrownCard = ancientsData[god].thirdStage.brownCards
let stageThreeBlueCard = ancientsData[god].thirdStage.blueCards

//три массива с этапами будем замешивать в функции shuffle
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5)
}

//stage 1
let arrStageOne = []
let arrStageOneGreen = []
let arrStageOneBrown = []
let arrStageOneBlue = []
function random(num, arr, stage) {
    let m = {}
    for (let i = 0; i < num; i++) {
        let rand = Math.floor(Math.random() * (arr.length - i))
        stage.push(((rand in m) ? m[rand] : arr[rand]))
        let l = arr.length - i - 1
        m[rand] = (l in m) ? m[l] : arr[l]
    }
    stage.forEach(el => {
        arr.splice(arr.indexOf(el), 1)
        })
}

random(stageOneGreenCard, newArrEasyGreen, arrStageOneGreen) 
random(stageOneBrownCard, newArrEasyBrown, arrStageOneBrown) 
random(stageOneBlueCard, newArrEasyBlue, arrStageOneBlue)

arrStageOne = arrStageOne.concat(arrStageOneGreen, arrStageOneBrown, arrStageOneBlue)

shuffle(arrStageOne)
console.log(arrStageOne)

//stage 2
let arrStageTwo = []
let arrStageTwoGreen = []
let arrStageTwoBrown = []
let arrStageTwoBlue = []
random(stageTwoGreenCard, newArrEasyGreen, arrStageTwoGreen) 
random(stageTwoBrownCard, newArrEasyBrown, arrStageTwoBrown) 
random(stageTwoBlueCard, newArrEasyBlue, arrStageTwoBlue)

arrStageTwo = arrStageTwo.concat(arrStageTwoGreen, arrStageTwoBrown, arrStageTwoBlue)

shuffle(arrStageTwo)
console.log(arrStageTwo)

//stage 3
let arrStageThree = []
let arrStageThreeGreen = []
let arrStageThreeBrown = []
let arrStageThreeBlue = []
random(stageThreeGreenCard, newArrEasyGreen, arrStageThreeGreen) 
random(stageThreeBrownCard, newArrEasyBrown, arrStageThreeBrown) 
random(stageThreeBlueCard, newArrEasyBlue, arrStageThreeBlue)

arrStageThree = arrStageThree.concat(arrStageThreeGreen, arrStageThreeBrown, arrStageThreeBlue)

shuffle(arrStageThree)
console.log(arrStageThree)

const numCounter = document.querySelectorAll('.counter-list li')
numCounter[0].textContent = ancientsData[god].firstStage.greenCards
numCounter[1].textContent = ancientsData[god].firstStage.brownCards
numCounter[2].textContent = ancientsData[god].firstStage.blueCards
numCounter[3].textContent = ancientsData[god].secondStage.greenCards
numCounter[4].textContent = ancientsData[god].secondStage.brownCards
numCounter[5].textContent = ancientsData[god].secondStage.blueCards
numCounter[6].textContent = ancientsData[god].thirdStage.greenCards
numCounter[7].textContent = ancientsData[god].thirdStage.brownCards
numCounter[8].textContent = ancientsData[god].thirdStage.blueCards

//Достаем карты
let cardClick = document.querySelector('.card-bottom img')
let card = document.querySelector('.card-bottom')
let cardImage = document.querySelector('.card-top img')
let generalArr = arrStageThree.concat(arrStageTwo, arrStageOne)
let gen = []
const newGame = document.querySelector('.button__new-game');
//папка
cardImage.src = `./assets/MythicCards/${generalArr[generalArr.length - 1].slice(2, -4).replace(/[0-9]/g,'')}/${generalArr[generalArr.length - 1]}`

newGame.addEventListener('click', () => {
    window.location.reload()
})
//переключение картинок
cardClick.addEventListener('click', () => {
    gen.push(generalArr[generalArr.length - 1])
    generalArr.pop()
    cardImage.src = `./assets/MythicCards/${generalArr[generalArr.length - 1].slice(2, -4).replace(/[0-9]/g,'')}/${generalArr[generalArr.length - 1]}`
    if (generalArr.length == 1) {
        card.style.display = 'none'
        newGame.style.display = 'block'
    }
})
}

//выбор бога
const godImg = document.querySelectorAll('.god li img')
let currentGod
for (const god of godImg) {
    god.addEventListener("click", () => {
        godImg.forEach(el => {
            el.classList.remove('active')
            el.style.border = 'none';
        })
        god.classList.toggle('active')
        god.style.border = '2px solid white'
        currentGod = god.src.slice(38, -4)
    })
}

//вытянул переменную бога и лвл
function ok () {
    currentGod
    currentLvl
}

//выбор лвл
const allLvl = document.querySelectorAll('.level div')
let currentLvl
for (const lvl of allLvl) {
    lvl.addEventListener("click", () => {
        allLvl.forEach(el => {
            el.classList.remove('active')
            el.style.border = 'none';
        })
        lvl.classList.toggle('active')
        lvl.style.border = '2px solid white'
        if (lvl.textContent == 'Очень легкий' || lvl.textContent == 'Легкий') {
            currentLvl = 'easy'
        }
        if (lvl.textContent == 'Средний') {
            currentLvl = 'normal'
        }
        if (lvl.textContent == 'Высокий' || lvl.textContent == 'Очень высокий') {
            currentLvl = 'hard'
        }
    })
}

//замешивание
const startGame = document.querySelector('.button');
startGame.addEventListener('click', () => {
    ancientsData.forEach(el => {
        ok()
        let currentGodNum
        if (el.name.toLowerCase() == currentGod.toLowerCase()) {
            if (currentGod.toLowerCase() == 'azathoth'.toLowerCase()) {
                currentGodNum = 0
            }
            if (currentGod.toLowerCase() == 'cthulhu'.toLowerCase()) {
                currentGodNum = 1
            }
            if (currentGod.toLowerCase() == 'iogSothoth'.toLowerCase()) {
                currentGodNum = 2
            }
            if (currentGod.toLowerCase() == 'shubNiggurath'.toLowerCase()) {
                currentGodNum = 3
            }            
            sumCard(currentGodNum)
        }

    })
})



