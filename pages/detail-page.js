// add event handler
function doesNotPassAllValidations(name, msg){
    // append errors
    
    if (!name || !msg){
        alert('You forgot to fill in your name or message!')
        return true
    }
    else if (msg.length > 280){
        alert('too long message!')
        return true
    }
    else {
        return false
    }
    
}
function submitComment() {
    
    //get values on submit
    const inputField = document.querySelector('#name')
    const name = inputField.value

    const textArea = document.querySelector('#msg')
    const msg = textArea.value
    

    if (doesNotPassAllValidations(name, msg) === true) {
        return null
    }
   
    else {
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
        // append comment to the comment section
        const commentSection = document.getElementById('comments')
        commentSection.appendChild(comment)
        // reset form values
        inputField.value = null
        textArea.value = null
    }
    
}