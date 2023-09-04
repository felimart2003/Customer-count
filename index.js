let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function add() {
count += 1
countEl.textContent = count
}

function sub() {
  if (count > 0){
    count -= 1
  }
  countEl.textContent = count
}

function save() {
  let countStr = count + ", "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}