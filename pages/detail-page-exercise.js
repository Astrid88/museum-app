// add event handler
function doesNotPassAllValidations(name, msg){
    // append errors
    
    
    

    const error = document.getElementsByClassName('error')
    error.innerHTML = 'ciao'
    
    let errorMsg
    if (!name || !msg){
        errorMsg = 'You forgot to fill in your name or message!'
        
        return true
    }
    else if (msg.length > 280){
        errorArea.appendChild(errorContainer)
        errorContainer.innerHTML = 'too long message!'
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
    
    // add errors
    const errorArea = document.querySelector('.button')
    const errorContainer = document.createElement('p')
    errorContainer.classList.add('error')
    errorArea.appendChild(errorContainer)
    

    


    
    
    

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
