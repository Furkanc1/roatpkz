// localStorage.removeItem('userEmail');
// localStorage.removeItem('users');

let storedPlayers = localStorage.getItem(`users`);
let players = storedPlayers
  ? JSON.parse(storedPlayers)
  : Array(531).fill(null);

// Every User in out database
let storedUsers = localStorage.getItem(`users`);
let users = storedUsers ? JSON.parse(storedUsers) : [];

let storedUser = localStorage.getItem(`user`);
// Currently Logged In User
let user = storedUser ? JSON.parse(storedUser) : [];

const storeUserInLocal = (data) => {
    // define email + password as the ID of "email" & "password" from the signup form
    let email = document.getElementById('email').value
    let username = document.getElementById('userName').value
    let password = document.getElementById('password').value

    // Two Methods of storing data LOCALLY:
    // 1) 
    // setting the .VALUE of those ID's as local storage, (key value pairs) userEmail : email(variable above) // userPassword : password(variable above)
    localStorage.setItem('userEmail', email)
    // not too important just want it for the header
    localStorage.setItem('userName', username)
    localStorage.setItem('userPassword', password)
    
    // This is logic i dont understand too well, but it essentially defines a variable to check and see if a user exists in the database by referencing the users email
    let existingUser = users.some(user => user.email === email)

    // IF the user DOES NOT exist, then the if condition will .push() the NEWLY entered EMAIL + PASSWORD into the usersArray, and then set it as local storage as well under Key ( users : {username, email, password}, {username, email, password}, {username, email, password} ...etc )
    if(!existingUser) {
        users.push({username, email, password})
        localStorage.setItem('users', JSON.stringify(users))
        console.log("User successfully added", users)
    } else {
        console.log('Email already exists !')
    }

    // 2)
    // localStorage.userEmail = email
    // localStorage.userPassword = password

    // If the email does not exist, sign the user up by storing them in localstorage
    // If the email does exist => sign in logic
    // console.log(`User is trying to sign up`, data);
}

const checkUserInfoLogic = (data) => {
    let enteredEmail = document.getElementById('email').value
    let enteredPassword = document.getElementById('password').value
    // Commented this out because it was stopping me from loggin in using ALL users Info (it only allowed the LATEST user to log in)
    // let storedEmail = localStorage.getItem('userEmail')
    // let storedPassword = localStorage.getItem('userPassword')
    
    // new logic to compare entered emails + password against the array of ALL users:
    let storedUsers = localStorage.getItem('users')
    let users = storedUsers ? JSON.parse(storedUsers) : []

    // This version uses the some method to iterate through the array of users and check if at least one user has matching email and password (via-chatgpt)
    let userDoesExistCheck = users.some(user => user.email === enteredEmail && user.password === enteredPassword)

    // if the user DOES exist within the array of users stored in local storage, THEN we get success message
    if(userDoesExistCheck) {
        console.log('User Succesfully Signed In')
    } else {
        console.log('Email or Password was Incorrect.')
    }
    // Check if the email exists in ou localstorage, if it does, now check their password, if both match, log user in with localstorage
    // console.log(`User is trying to sign in`, data);
}



let forms = document.querySelectorAll(`form`);
if (forms && forms.length > 0) {
    forms.forEach(form => {
        form.addEventListener(`submit`, onFormSubmitEvent => {
            onFormSubmitEvent.preventDefault();

            let formThatWasSubmitted = onFormSubmitEvent.target;

            let emailField = formThatWasSubmitted?.email;
            let passwordField = formThatWasSubmitted?.password;

            // let { name: nameField, password: passwordField } = formThatWasSubmitted;

            let dataToPassToFunctions = {
                formThatWasSubmitted,
                email: emailField?.value,
                password: passwordField?.value,
            }

            if (formThatWasSubmitted.classList.contains(`signUpForm`)) {
                storeUserInLocal(dataToPassToFunctions);
            } else if (formThatWasSubmitted.classList.contains(`signInForm`)) {
                checkUserInfoLogic(dataToPassToFunctions);
            }
        })
    })
}

const setHeaderDynamically = () => {
  const header = $(`
        <header class="insertedDynamicallyFromJS">
            <div class="topbar flexRow">
                <div class="flexRow leftCol">
                    <div class="dropdown fontColorMain">More On Roat PKZ</div>
                    <div class="colContent spacer"></div>
                </div>
                <div class="middleCol">
                    <div class="topbarTimerMessage">A 10M Zerker Tournament starts in 0H 20M 48S</div>
                </div>
                <div class="flexRow rightCol">
                    <div class="colContent spacer">
                        <span>531 Players</span>
                        <span class="hideThisOnMobile">are online</span>
                    </div>
                    <div class="dropdown fontColorMain">Join Them</div>
                </div>
            </div>
            <nav class="navbar">
                <ul class="flexRow menu">
                    <li class="menuListItem"><a class="menuLink fontColorMain" href="#">Home</a></li>
                    <li class="menuListItem"><a class="menuLink fontColorMain" href="#">Forum</a></li>
                    <li class="menuListItem"><a class="menuLink fontColorMain" href="#">Donate</a></li>
                    <li class="menuListItem">
                        <a class="menuLink fontColorMain" href="#">
                            <div class="navbarLogo">
                                <img src="https://roatpkz.com/data/images/logonew.png" alt="ROAT PKZ">
                            </div>
                        </a>
                    </li>
                    <li class="menuListItem"><a class="menuLink fontColorMain" href="#">Hiscores</a></li>
                    <li class="menuListItem"><a class="menuLink fontColorMain" href="#">Download</a></li>
                    <li class="menuListItem"><a class="menuLink fontColorMain" href="#">Vote</a></li>
                </ul>
            </nav>
        </header>
    `);

  $(`body`).prepend(header);
};

// setHeaderDynamically();

const setCopyrightYearDynamically = () => {
  // jQuery
  let copyrightYearElement = $(`.year`);
  copyrightYearElement.html(new Date().getFullYear());

  // Vanilla JavaScript
  // let copyrightYearElementVanilla = document.querySelector(`.year`);
  // copyrightYearElementVanilla.innerHTML = new Date().getFullYear();
};

setCopyrightYearDynamically();

let currentTimeElement = $(`.currentTime`);
let playersCountElement = $(`.playersCount`);

setInterval(() => {
  currentTimeElement.html(moment().format(`hh:mm:ss A`));
}, 999);

playersCountElement.html(players.length);
