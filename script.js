let storedPlayers = localStorage.getItem(`players`);
let players = storedPlayers
  ? JSON.parse(storedPlayers)
  : Array(531).fill(null);

// Every User in out database
let storedUsers = localStorage.getItem(`users`);
let users = storedUsers ? JSON.parse(storedUsers) : [];

let storedUser = localStorage.getItem(`user`);
// Currently Logged In User
let user = storedUser ? JSON.parse(storedUser) : [];

// source: https://stackoverflow.com/questions/34299555/javascript-login-register-with-localstorage 
const userEmail = document.getElementById("email")
const userPassword = document.getElementById("password")

const storingUserInfo = () => {
    localStorage.setItem("email", userEmail.value)
    localStorage.setItem("password", userPassword.value)
}


const checkUserInfo = () => {
    let emailFormData = localStorage.getItem("email")
    let passwordFormData = localStorage.getItem("password")

    let userEmail = document.getElementById("email")
    let userPassword = document.getElementById("password")

    if(userEmail.value !== emailFormData || userPassword !== passwordFormData) {
        console.log("Email or Password is Incorrect!", )
    } else {
        console.log("You are logged in!", )
    }
}

const signUpLogic = (data) => {
    let emailFormData = localStorage.getItem("email")
    // let passwordFormData = localStorage.getItem("password")

    if(userEmail.value === emailFormData) {
        // signInLogic();
        console.log("Email Already Exists")
    } else {
        storingUserInfo();
        console.log("User Signed Up!")
    }
    // If the email does not exist, sign the user up by storing them in localstorage
    // If the email does exist => sign in logic
    console.log(`User is trying to sign up`, data);
}

const signInLogic = (data) => {
    let emailFormData = localStorage.getItem("email")
    let passwordFormData = localStorage.getItem("password")

    if (userEmail.value !== emailFormData || userPassword.value !== passwordFormData) {
        console.log("User Does Not Exist OR Incorrect Password!")

    // } else if (userEmail.value === emailFormData && userPassword.value === passwordFormData) {
    //     console.log("User Successfully signed in (sign in Logic)")
    
    } else {
        console.log("User Info was not stored correctly or doesnt exist")
    }
    // Check if the email exists in ou localstorage, if it does, now check their password, if both match, log user in with localstorage
    console.log(`User is trying to sign in`, data);
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
                signUpLogic(dataToPassToFunctions);
            } else if (formThatWasSubmitted.classList.contains(`signInForm`)) {
                signInLogic(dataToPassToFunctions);
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