var timer = document.getElementById('timer')
var start = document.getElementById('start')

var time = 99

start.addEventListener("click", function() {
    var timeStart = setInterval(() => {
        start.setAttribute("style", "display:none;")
        time--;
        timer.textContent = time
       
            if(time === 0) {
                clearInterval(timeStart)
                console.log('work')
                start.setAttribute("style", "display:flex;")
                timer.setAttribute("style", "display:none;")
            }
        
    }, 100);
    
})