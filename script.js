const API_URL = "https://api.adviceslip.com/advice";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => { 
        console.log(data);
        updatePage(data);
    })
    
function updatePage(data) {
    const id = data.slip.id;
    const advice = data.slip.advice;
    console.log(id);
    console.log(advice);
    document.querySelector(".js-slip-number").innerHTML = id;
    document.querySelector(".js-slip-advice").innerHTML = advice;
}
