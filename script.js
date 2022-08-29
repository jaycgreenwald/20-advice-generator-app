// fetch the data
async function start() {
    const response = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
    const data = await response.json()
    console.log(data)
    displayAdvice(data.slip)
}

start()

// fetch new advice slip when button clicked
document.querySelector(".js-btn-round").addEventListener("click", start)

// display the slip id and advice
function displayAdvice(adviceSlip) {
    // document.querySelector(".js-slip-number").innerHTML = adviceSlip.id
    document.querySelector(".js-slip-number").innerHTML = `ADVICE #${adviceSlip.id}`
    document.querySelector(".js-slip-advice").innerHTML = adviceSlip.advice
}
