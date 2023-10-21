
const ul = document.querySelector("#list-container")
// console.log(task)

const addTask = (e) => {

    console.log(e.target.tagName)

    const input = document.querySelector("#input-box")
    const task = input.value
    console.log(task)
    const newTask = document.createElement('li')
    const del = document.createElement('span')
    del.classList.add('kk')

    newTask.innerHTML = task

    del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`

    newTask.appendChild(del)



    ul.appendChild(newTask)

}





const but1 = document.querySelector('button')
but1.addEventListener('click', addTask)


const doneTask = function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }

}


// const delTask = (e) => {
//     if (e.target.tagName === 'SPAN') {
//         const taskToDelete = e.target.parentElement; // Get the parent <li> element
//         taskToDelete.remove(); // Remove the task element
//     }
// }

const cross = document.querySelector('')


ul.addEventListener('click', doneTask)
cross.addEventListener('click', delTask)


