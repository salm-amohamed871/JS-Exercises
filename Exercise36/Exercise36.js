const colorPicker = document.querySelector("#colorPicker")
const colorPerview = document.querySelector("#colorPerview")
const colorHistory = document.querySelector("#colorHistory")
const clearHistory = document.querySelector("#clearHistory")

colorPicker.addEventListener("change", function(){
   const color = colorPicker.value
   colorPerview.style.backgroundColor = colorPicker.value

   const newItem = document.createElement('li')
   newItem.textContent = colorPicker.value
   colorHistory.appendChild(newItem)
})
clearHistory.addEventListener("click", function(){
    colorHistory.innerHTML = ""
})