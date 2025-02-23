const addCardBtn = document.querySelector('.add')
const container = document.querySelector('.container')

const cardList = document.querySelectorAll('.card')

let count = 1

addCardBtn.addEventListener('click',()=>{
    const newCard =document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
container.addEventListener('click', (e) =>{
    if(e.target !== container){
        e.target.remove()
    }
}
)






//Event Delegation is a way of to optimise our code
// it is  pattern in js to handle the Events more efficiently
// if we want to use addEventListener on childs of a parent
// due to event bubbling children events will be captured at the parents 
/// here in this we repositioned  div Outside the container