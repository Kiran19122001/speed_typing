let timer = document.getElementById("timer")

let quoteDisplay = document.getElementById("quoteDisplay")
let quoteInput = document.getElementById("quoteInput")

let result = document.getElementById("result")

let submitBtn = document.getElementById("submitBtn")
let resetBtn = document.getElementById("resetBtn")

let spinner = document.getElementById("spinner")
let butn = document.getElementById("butn")

let start = document.getElementById("start")
let interval = null;
spinner.classList.remove("d-none")

let options = {
    method: "GET"
}
let url = "https://apis.ccbp.in/random-quote"
let quote = null
let funCall = async () => {

    const response = await fetch(url, options)
    const result = await response.json()

    spinner.classList.add("d-none")
    quoteDisplay.innerText=result.content

    
}
fetch(url, options)
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        spinner.classList.add("d-none")
        butn.style.display = "block"
        butn.addEventListener('click', () => {
            spinner.classList.remove("d-none")
            clearInterval(interval)
            timer.textContent = 0
            quoteDisplay.textContent =""
            funCall()
        })
        quote = JSON.stringify(jsonData.content)
        quoteDisplay.textContent = JSON.parse(quote)
    })
submitBtn.addEventListener("click", function() {
    let timerValue = timer.textContent
    clearInterval(interval)
    if (quoteDisplay.textContent !== quoteInput.value) {
        result.textContent = "You typed incorrect sentense"
    } else {
        if (quoteInput.value !== "") {
            if (quoteDisplay.textContent === quoteInput.value) {
                let time = timerValue
                result.textContent = "Congrats! You typed in " + time + " seconds"
            }
        }
    }
})
resetBtn.addEventListener("click", function() {
    quoteInput.value = ""
    clearInterval(interval)
    timer.textContent = 0
    result.textContent=""

})
start.addEventListener("click", () => {
    let count = 0
     interval =setInterval(function () {
        count += 1
        timer.textContent = count

    }, 1000)
    
})