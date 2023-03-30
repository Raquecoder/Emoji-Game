let figthers= [ "🐉", "🐦", "🐀" , "🐬","🐒","🐢","🐕","🐝","🦒",
  "🐈","🤖", "🐘","🐸","🕷️","🐖"," 🐇","🦄","🐻", "🐟"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
 
    let randomIndexOne=  Math.floor (Math.random() * figthers.length)
    let randomIndexTwo = Math.floor(Math.random()* figthers.length)

    stageEl.textContent = figthers[randomIndexOne] + " vs " + figthers[randomIndexTwo]
})
 


