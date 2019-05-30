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
    // append comment to the comment section
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    
    /*
    instead of changing all the values one by one of the form, we could use a loop
    
    const listOfInputsValue = [name, msg]
    // reset form values
    for (let i = 0; i< listOfInputsValue.length; i++){
        listOfInputsValue[i] = null
    }
    I have grouped the values of the input of the form in an array
    and then changed them. for this form it is not really needed, 
    but in case we want to add more input fields (eg. 10), it will be easier
    to mantain it. we could use the same way also for appending comments to the comment section.  
    */
    // reset form values
    inputField.value = null
    textArea.value = null
    console.log(comment)
}