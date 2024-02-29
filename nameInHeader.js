const setUserNameInHeader = () => {
    // DEFINE username as what we stored in local storage as username in the ./script.js
    let username = localStorage.getItem('userName')
    // select where we want to insert the changes we are going to make DYNAMICALLY
    let dynamicNameInsertSpan = document.querySelector(".userNameAreaForInsertion")
    
    // if username EXISTS, (meaning there is something in local storage called username (key) and has a value (key value pair) it will run the success condition which dynamically populates (used Concating method as well))
    if (username) {
        dynamicNameInsertSpan.textContent = `Welcome, Sir ${username}`
    } else {
        // else just a hard coded, welcome sir, guest
        dynamicNameInsertSpan.textContent = `Welcome Sir, Guest`
    }
}

// need to call the function in order for it to work (duh)
// setUserNameInHeader();