
const ul = document.querySelector("#list-container")
let store



const addTask = () => {





    const input = document.querySelector("#input-box")
    const task = input.value
    if (task === " ") {
        alert("you have to add some text")

    }
    else {
        const newTask = document.createElement('li')
        const del = document.createElement('span')


        newTask.innerHTML = task

        del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`

        newTask.appendChild(del)



        ul.appendChild(newTask)
        input.value = ""

    }



}





const but1 = document.querySelector('button')
but1.addEventListener('click', addTask)


const doneTask = function (e) {
    console.log(e.target)

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')

    }
    else if (e.target.tagName === 'svg') {
        e.target.parentElement.parentElement.remove()
        console.log(e.target.parentElement)
    }

}









ul.addEventListener('click', doneTask)



