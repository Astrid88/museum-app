// add event handler
function submitComment() {
    //get values on submit
    const inputField = document.querySelector('#name')
    const name = inputField.value
   
    const textArea = document.querySelector('#msg')
    const msg = textArea.value
    // create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    // adjust the elements we created
    h3.innerHTML = `${name} said: `
    p.innerHTML = `"${msg}"`
    comment.classList.add('comment')
    // append children to comment
    comment.appendChild(h3)
    comment.appendChild(p)
    console.log(comment)
}