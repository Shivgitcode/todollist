
const ul = document.querySelector("#list-container")
// console.log(task)

const addTask = (e) => {

    console.log(e.target.tagName)

    const input = document.querySelector("#input-box")
    const task = input.value
    console.log(task)
    const newTask = document.createElement('li')

    newTask.innerText = task;
    newTask.classList.add('k')

    ul.appendChild(newTask)

}





const but1 = document.querySelector('button')
but1.addEventListener('click', addTask)


const doneTask = function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }

}

ul.addEventListener('click', doneTask)

