// // Exercise 32
// const title = document.querySelector('#title')
// console.log(title)

// const text = document.querySelectorAll(".text")
// console.log(text)

// // Exercise 33

// function changeContent(){
//     title.innerHTML ="Welcome To DOM"
//     content.innerHTML = "I am learning JavaScript DOM"
// }

// Exercise 34


// function Adding(){
//     const list = document.querySelector('#list')
//     const newItem =document.createElement('li')
//     newItem.textContent = 'New Item'
//     list.appendChild(newItem)
// }

// function Removing(){
//     if(list.lastChild){
//         list.removeChild(list.lastChild)

//     }else{
//         alert("No Elements")
//     }
// }

// Exercise 35

function ChangeImage(){
    const image = document.querySelector('#image')
    const url = prompt('Enter Your Image')
    const color  =prompt('Enter the border color')
    const width =prompt('Enter image width')
    const height  =prompt('Enter image height ')
    const radius  =prompt('Enter image radius ')

        image.setAttribute('src',url)
    
   image.style.border = "3px solid " + color;
    image.style.width = width + "px";
    image.style.height = height + "px";
    image.style.borderRadius = radius + "px";
}