var timer = document.getElementById('timer')
var start = document.getElementById('start')
var submit = document.getElementById('submit')
var questionTitle = document.getElementById('questionTitle')
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')
var wrong = document.getElementById('results-text')
var submitScore = document.getElementById('submit-score')
var initialsOfUser = document.getElementById('initials-value')
var leaderboardButton = document.getElementById('leaderboard-button')
var scoreGetter = document.getElementById('scoreGetter')
var displayLeaderboard = document.getElementById('leaderboard')
var leaderboardData = document.getElementById('leaderboard-data')

var checkA = document.getElementById('checkA')
var checkB = document.getElementById('checkB')
var checkC = document.getElementById('checkC')
var checkD = document.getElementById('checkD')

var questionNumber = 1
var playerScore = 0



var leaderboard = []

var time = 99
init()
function init() {
    JSON.parse(localStorage.getItem("leaderboard"));
}

function storeData(e) {
    e.preventDefault();

    
    var player = {
        intitials: initialsOfUser.value,
        score: playerScore
    }

    leaderboard.push(player)
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    
    displayLeaderboard.setAttribute("style", "displaty:flex")
    leaderboardData.textContent = storedInitials

}

start.addEventListener("click", function() {
    var timeStart = setInterval(() => {
        start.setAttribute("style", "display:none;")
        timer.setAttribute("style", "display:flex;")
        time--;
        timer.textContent = time
        questionChecker()



            if(time > 0 && questionNumber !== 6) {
                questionTitle.setAttribute('style', 'display:flex;')
                a.setAttribute('style', 'display:flex;')
                b.setAttribute('style', 'display:flex;')
                c.setAttribute('style', 'display:flex;')
                d.setAttribute('style', 'display:flex;')
                
            } else if (questionNumber === 6) {
                questionTitle.setAttribute('style', 'display:none;')
                a.setAttribute('style', 'display:none;')
                b.setAttribute('style', 'display:none;')
                c.setAttribute('style', 'display:none;')
                d.setAttribute('style', 'display:none;')
                timer.setAttribute("style", "display:none;")
                scoreGetter.textContent = "Your score was: " + playerScore
                time = 99
                questionNumber = 1
                clearInterval(timeStart)
                console.log(time)

            } else {
                questionTitle.setAttribute('style', 'display:none;')
                a.setAttribute('style', 'display:none;')
                b.setAttribute('style', 'display:none;')
                c.setAttribute('style', 'display:none;')
                d.setAttribute('style', 'display:none;')
                clearInterval(timeStart)
                console.log('work')
                start.setAttribute("style", "display:flex;")
                timer.setAttribute("style", "display:none;")
                time = 99
                questionNumber = 1
                playerScore = 0
            }

        


    }, 1000);
})



checkA.addEventListener("click", function(){
        if(questionNumber === 1) {

        questionNumber = questionNumber + 1
            console.log(questionNumber)
            playerScore += 3

        }  else {
            wrong.setAttribute('style', 'display: flex;')
            wrong.textContent = 'Wrong!'
            playerScore -= 1

        }
    })

checkB.addEventListener("click", function(){
        if(questionNumber === 2) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)
            questionChecker()
            playerScore += 3

        }  else if(questionNumber === 3) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)
            questionChecker()
            playerScore += 3
        } else {
            wrong.setAttribute('style', 'display: flex;')
            wrong.textContent = 'Wrong!'
            playerScore -= 1

        }

       
    })


checkC.addEventListener("click", function(){
        if(questionNumber === 5) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)
            questionChecker()
            playerScore += 3

        }  else {
            wrong.setAttribute('style', 'display: flex;')
            wrong.textContent = 'Wrong!'
            playerScore -= 1
            

        }
    })


checkD.addEventListener("click", function(){
        if(questionNumber === 4) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)
            questionChecker()
            playerScore += 3

        }  else {
            wrong.setAttribute('style', 'display: flex;')
            wrong.textContent = 'Wrong!'
            playerScore -= 1

        }
    })

function questionChecker(event) {
    if(questionNumber === 1) {
        questionTitle.textContent = 'What does "document.getElementbyId" do in javascript?'
        checkA.textContent = 'Targets an ID in your HTML document'
        checkB.textContent = 'Selects an HTML class'
        checkC.textContent = 'acts as an event listener'
        checkD.textContent = 'creates a new HTML file'
        wrong.setAttribute('style', 'display: none;')

    
    }
    
    if(questionNumber === 2) {
        questionTitle.textContent = 'What does "addEventListener" do in javascript?'
        checkA.textContent = 'Targets a class in your HTML document'
        checkB.textContent = 'adds a function that starts based on an event that occurs'
        checkC.textContent = 'Styles your h1'
        checkD.textContent = 'opens a new browser'
        wrong.setAttribute('style', 'display: none;')

        console.log('hi')
    }
    
    if(questionNumber === 3) {
        questionTitle.textContent = 'What does ".innerHTML" do?'
        checkA.textContent = 'selects a class'
        checkB.textContent = 'dynamically inputs html code from javascript'
        checkC.textContent = 'styles your html'
        checkD.textContent = 'prevents defaulting'
        wrong.setAttribute('style', 'display: none;')

    }
    
    if(questionNumber === 4) {
        questionTitle.textContent = 'What does preventing default do in javascript?'
        checkA.textContent = 'Selects an id'
        checkB.textContent = 'Stops us from losing our house'
        checkC.textContent = 'Styles our HTML'
        checkD.textContent = 'Stops us from refreshing the page when an event occurs'
        wrong.setAttribute('style', 'display: none;')

    }
    
    if(questionNumber === 5) {
        questionTitle.textContent = 'Why do we add HTML dynamically though javascript'
        checkA.textContent = 'We dont'
        checkB.textContent = 'It looks cooler'
        checkC.textContent = 'To allow for a more interactive application'
        checkD.textContent = 'All of the above'
        wrong.setAttribute('style', 'display: none;') 

    }

    if(questionNumber === 6) {
        submitScore.setAttribute("style", "display:flex;") 
    }

}

leaderboardButton.addEventListener("click", storeData)