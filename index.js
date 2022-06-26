var timer = document.getElementById('timer')
var start = document.getElementById('start')
var submit = document.getElementById('submit')
var questionTitle = document.getElementById('questionTitle')
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')

var checkA = document.getElementById('checkA')
var checkB = document.getElementById('checkB')
var checkC = document.getElementById('checkC')
var checkD = document.getElementById('checkD')

var questionNumber = 1

var time = 99

start.addEventListener("click", function() {
    var timeStart = setInterval(() => {
        start.setAttribute("style", "display:none;")
        timer.setAttribute("style", "display:flex;")
        time--;
        timer.textContent = time
       

            if(time > 0) {
                questionTitle.setAttribute('style', 'display:flex;')
                a.setAttribute('style', 'display:flex;')
                b.setAttribute('style', 'display:flex;')
                c.setAttribute('style', 'display:flex;')
                d.setAttribute('style', 'display:flex;')
                
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
            }

        


    }, 100);
})


checkA.addEventListener("click", function(){
        if(questionNumber === 1) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)

        }
    })

checkB.addEventListener("click", function(){
        if(questionNumber === 2) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)

        }

        if(questionNumber === 3) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)

        }
    })


checkC.addEventListener("click", function(){
        if(questionNumber === 5) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)

        }
    })


checkD.addEventListener("click", function(){
        if(questionNumber === 4) {
            questionNumber = questionNumber + 1
            console.log(questionNumber)

        }
    })


    



