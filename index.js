var timer = document.getElementById('timer')
var start = document.getElementById('start')
var questionTitle = document.getElementById('questionTitle')
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')

var time = 99

start.addEventListener("click", function() {
    var timeStart = setInterval(() => {
        start.setAttribute("style", "display:none;")
        timer.setAttribute("style", "display:flex;")
        time--;
        timer.textContent = time
       
            if(time === 0) {
                clearInterval(timeStart)
                console.log('work')
                start.setAttribute("style", "display:flex;")
                timer.setAttribute("style", "display:none;")
                
            }

            if(time > 0) {
                questionTitle.setAttribute('style', 'display:flex;')
                a.setAttribute('style', 'display:flex;')
                b.setAttribute('style', 'display:flex;')
                c.setAttribute('style', 'display:flex;')
                d.setAttribute('style', 'display:flex;')
                console.log('hio')
            } else {
                questionTitle.setAttribute('style', 'display:none;')
                a.setAttribute('style', 'display:none;')
                b.setAttribute('style', 'display:none;')
                c.setAttribute('style', 'display:none;')
                d.setAttribute('style', 'display:none;')
                console.log('hio')
            }


            if(time===0) {
                time = 99
            }
    }, 100);
})




