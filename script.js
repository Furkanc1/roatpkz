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
let user = storedUser ? JSON.parse(storedUser) : null;

let editProfileForm = document.querySelector(`.editProfileForm`);

if (user != null) {
    // User is Sign In
    console.log(`Current User(s)`, users);
    console.log(`Currently Logged In User`, user);
    let dynamicNameInsertSpan = document.querySelector(".userNameAreaForInsertion");
    dynamicNameInsertSpan.innerHTML = `Welcome, Sir ${user?.displayName}`;

    let hideTheseOnLoggedIn = document.querySelectorAll(`.hiddenOnLoggedIn`);
    if (hideTheseOnLoggedIn && hideTheseOnLoggedIn.length > 0) {
        hideTheseOnLoggedIn.forEach(itemWeWantToHide => {
            itemWeWantToHide.classList.add(`hidden`);
        })
    }

    if (editProfileForm) {
        let statusField = editProfileForm?.editStatus;
        let usernameField = editProfileForm?.edittedUserName;

        statusField.value = user?.status;
        usernameField.value = user?.username;
    }
} else {
    let hideTheseOnLoggedOut = document.querySelectorAll(`.hiddenOnLoggedOut`);
    if (hideTheseOnLoggedOut && hideTheseOnLoggedOut.length > 0) {
        hideTheseOnLoggedOut.forEach(itemWeWantToHide => {
            itemWeWantToHide.classList.add(`hidden`);
        })
    }
}

let roles = {
    Subscriber: {
        level: 1,
        type: `Subscriber`
    },
    Follower: {
        level: 2,
        type: `Follower`
    },
    User: {
        level: 3,
        type: `User`
    },
    Premium: {
        level: 4,
        type: `Premium`
    },
    Investor: {
        level: 5,
        type: `Investor`
    },
    Mod: {
        level: 6,
        type: `Mod`
    },
    Stakeholder: {
        level: 7,
        type: `Stakeholder`
    },
    Admin: {
        level: 8,
        type: `Admin`
    },
    Developer: {
        level: 9,
        type: `Developer`
    },
    Owner: {
        level: 10,
        type: `Owner`
    },
}

const capitalizeFirstLetter = (stringOfLettersWeWantToCapitalizeTheFirstLetterOf) => {

    // EXAMPLE: test
    let uppercasedFirstLetter = stringOfLettersWeWantToCapitalizeTheFirstLetterOf.charAt(0).toUpperCase();
    // EXAMPLE: T

    let restOfTheWord = stringOfLettersWeWantToCapitalizeTheFirstLetterOf.slice(1);
    // EXAMPLE: est

    let capitalizedWord = uppercasedFirstLetter + restOfTheWord;
    // EXAMPLE: Test

    return capitalizedWord;
}

const storeUserInDatabase = (userToSignUp) => {

    users.push(userToSignUp);
    localStorage.setItem(`users`, JSON.stringify(users));
    
    console.log(`User To Sign Up`, userToSignUp);
    console.log(`Updated Users`, users);

    location.href = './login.html';

    // define email + password as the ID of "email" & "password" from the signup form
    // let email = document.getElementById('email').value
    // let username = document.getElementById('userName').value
    // let password = document.getElementById('password').value

    // Two Methods of storing data LOCALLY:
    // 1) 
    // setting the .VALUE of those ID's as local storage, (key value pairs) userEmail : email(variable above) // userPassword : password(variable above)

    // localStorage.setItem('userEmail', email)
    // not too important just want it for the header

    // localStorage.setItem('userName', username)
    // localStorage.setItem('userPassword', password)
    
    // This is logic i dont understand too well, but it essentially defines a variable to check and see if a user exists in the database by referencing the users email
    // let existingUser = users.some(user => user.email === email)

    // IF the user DOES NOT exist, then the if condition will .push() the NEWLY entered EMAIL + PASSWORD into the usersArray, and then set it as local storage as well under Key ( users : {username, email, password}, {username, email, password}, {username, email, password} ...etc )
    // if (!existingUser) {
    //     users.push({username, email, password})
    //     localStorage.setItem('users', JSON.stringify(users))
    //     console.log("User successfully added", users)
    // } else {
    //     console.log('Email already exists !')
    // }

    // 2)
    // localStorage.userEmail = email
    // localStorage.userPassword = password

    // If the email does not exist, sign the user up by storing them in localstorage
    // If the email does exist => sign in logic
    // console.log(`User is trying to sign up`, data);
}

const signInLogic = (userTryingToSignInOrSignUpData) => {
    // let enteredEmail = document.getElementById('email').value
    // let enteredPassword = document.getElementById('password').value
    // Commented this out because it was stopping me from loggin in using ALL users Info (it only allowed the LATEST user to log in)
    // let storedEmail = localStorage.getItem('userEmail')
    // let storedPassword = localStorage.getItem('userPassword')
    
    // new logic to compare entered emails + password against the array of ALL users:
    // Get Latest Snapshot of Users
    // let storedUsers = localStorage.getItem('users')
    // let users = storedUsers ? JSON.parse(storedUsers) : []

    // This version uses the some method to iterate through the array of users and check if at least one user has matching email and password (via-chatgpt)
    let enteredEmail = userTryingToSignInOrSignUpData?.email;
    let userExistsInDB = users.some(usr => usr.email === enteredEmail);

    // if the user DOES exist within the array of users stored in local storage, THEN we get success message
    if (userExistsInDB) {
        let enteredPassword = userTryingToSignInOrSignUpData?.password;
        let userFromDBToSignInWithCorrectPassword = users.find(usr => usr.email === enteredEmail && usr.password === enteredPassword);

        if (userFromDBToSignInWithCorrectPassword) {

            let modifiedUserToSignIn = {
                updated: new Date().toLocaleString(),
                lastSignIn: new Date().toLocaleString(),
                ...userFromDBToSignInWithCorrectPassword,
            }

            console.log('User Succesfully Signed In', modifiedUserToSignIn);

            // Add modified user back to Database
            users = users.map(usr => {
                if (usr?.email == modifiedUserToSignIn?.email) {
                    return modifiedUserToSignIn;
                } else {
                    return usr;
                }
            })
            localStorage.setItem(`users`, JSON.stringify(users));

            // Sign User In
            localStorage.setItem(`user`, JSON.stringify(modifiedUserToSignIn));
            location.href = './';
        } else {
            console.log('Email or Password was Incorrect.');
        }
    } else {
        console.log('Email does not exist in Database, Sign Up.');
        // location.href = './signup.html';
    }
    // Check if the email exists in ou localstorage, if it does, now check their password, if both match, log user in with localstorage
    // console.log(`User is trying to sign in`, data);
}

// STUCK HERE !!
const updateProfileLogic = (usersData, userTryingToEditProfile) => {
    // console.log("Info", userTryingToEditProfile)
    let enteredPassword = usersData?.password;
    // let usersPassword = users.some(usr => usr.password === enteredPassword);
    // ChatGPT Suggestion:
    let userMatch = users.find(usr => usr.password === enteredPassword);


    let updatedUsername = userTryingToEditProfile?.username;
    let password = userTryingToEditProfile?.password;
    let updatedStatus = userTryingToEditProfile?.status;
    // let email = userTryingToEditProfile?.email

    let usersUpdatedData = {
        updated: new Date().toLocaleString(),
        ...userTryingToEditProfile,
        username: updatedUsername,
        // email: enteredPassword,
        // password: password,
        status: updatedStatus,
    }
    console.log("users new data to replace with old:", usersUpdatedData)
    console.log(userER)
    // if the password matched with the users actual account password, then do the following:
    if (userMatch) {
        console.log("You just entered first if condition,")
        if (user) {
            console.log("You just entered the nested If Condition")
            // Add updated user back to Database
            user = users.map(update => {
            if (update?.password == userMatch?.password) {
                console.log("You made it HERE", userMatch)
                return userMatch;
            } else {
                console.log("something went wrong with nested If statement!")
                console.log("Nested Else (return update): ", update)
                return update;

            }  
        })
        // console.log("usersData", usersData)
        localStorage.setItem(`users`, JSON.stringify(user));
        // console.log("userTryingToEdit:", userTryingToEditProfile)
        console.log("updatedProfile(official):", usersUpdatedData)
        } else {
            console.log("password was incorrect!")
        }
    } else {
        // console.log("userTryingToEdit:", userTryingToEditProfile)
        // console.log("usersData", usersData)
    }
}


// chat GPT's Method: I officially give up GG (doesnt work either)
// const updateProfileLogic = (userTryingToEditProfile) => {
//     console.log("Info", userTryingToEditProfile);

//     // Check if the user is currently logged in
//     if (user) {
//         let enteredEmail = user.email;
//         let userIndex = users.findIndex(usr => usr.email === enteredEmail);

//         if (userIndex !== -1) {
//             // Update the user's profile
//             let updatedUser = {
//                 updated: new Date().toLocaleString(),
//                 ...userTryingToEditProfile,
//                 email: enteredEmail,
//             };

//             // Update user in the users array
//             users[userIndex] = updatedUser;

//             // Update local storage
//             localStorage.setItem(`users`, JSON.stringify(users));

//             console.log("Updated Profile:", updatedUser);
//         } else {
//             console.log("User not found in the database.");
//         }
//     } else {
//         console.log("User not logged in.");
//     }
// };

let forms = document.querySelectorAll(`form`);
if (forms && forms.length > 0) {
    forms.forEach(form => {
        // Listen for whenever the form is submitted
        form.addEventListener(`submit`, onFormSubmitEvent => {
            // Preventing the default behavior of forms where they wanna refresh and throw data into the URL
            onFormSubmitEvent.preventDefault(); 

            // If you console.log(onFormSubmitEvent), you will see all the data that the Submit Event comes with for free
            // Inside of that free Submit Event data, there is a property called target, which is the form at the moment of from submit
            // console.log(`Form Submit Event`, onFormSubmitEvent);
            let formThatWasSubmitted = onFormSubmitEvent.target;
            // For Authentication Forms Only
            if (formThatWasSubmitted.classList.contains(`authForm`)) {
                // This destructuring example is doing the same thing as the lines below but in one line
                // let { email: emailField, username: usernameField password: passwordField } = formThatWasSubmitted;

                let isSignUpForm = formThatWasSubmitted.classList.contains(`signUpForm`);
                let isSignInForm = formThatWasSubmitted.classList.contains(`signInForm`);
                
                let emailField = formThatWasSubmitted?.email;
                let passwordField = formThatWasSubmitted?.password;
                // let user = storedUser ? JSON.parse(storedUser) : null;
                
                let lowercasedEmail = emailField?.value?.toLowerCase();
                let lowercasedEmailName = lowercasedEmail?.split(`@`)[0];
    
                // We define Data to Pass To Functions
                let userTryingToSignInOrSignUp = {
                    email: lowercasedEmail,
                    password: passwordField?.value,
                    
                    // Conditional Properties inside of Objects
                    // ...(isSignUpForm && {
                    //     username: usernameField?.value
                    // })
                }
                // let usersPwd = {
                    // email: lowercasedEmail,
                    // password: passwordField?.value,
                    
                    // Conditional Properties inside of Objects
                    // ...(isSignUpForm && {
                    //     username: usernameField?.value
                    // })
                // }

                // let LoggedInUserModel = {
                //     roles: [roles.User],
                //     status: `Hello, I'm New`,
                //     username: usernameField?.value,
                //     date: new Date().toLocaleString(),
                // }

                // We define Data to Pass To Functions
                // let userTryingToEditProfile = {
                //     ...usersPwd,
                //     username: usernameField?.value,
                //     password: passwordField?.value,
                //     status: statusField?.value,
                // }

                // define logged in User model

                // console.log(`Data to Pass To Functions Before Modifications`, dataToPassToFunctions);
    
                // If Sign Up
                if (isSignUpForm) {

                    // Check if the User Exists
                    let userEmailsOnly = users.map(usr => usr.email);
                    let usersEmailExistsInDB = userEmailsOnly.includes(userTryingToSignInOrSignUp.email);
                    if (usersEmailExistsInDB) {
                        console.log(`User already exists`);
                        location.href = './login.html';
                    } else {
                        let usernameField = formThatWasSubmitted?.userName;
                        let lowercasedEmailName = lowercasedEmail?.split(`@`)[0];
    
                        // We create the User Model we want to store
                        let userToSignUp = { 
    
                            // Here we are cloning all the previous properties from the object
                            ...userTryingToSignInOrSignUp, 
    
                            // Custom Properties
                            roles: [roles.User],
                            status: `Hello, I'm New`,
                            username: usernameField?.value,
                            date: new Date().toLocaleString(),
                            displayName: capitalizeFirstLetter(lowercasedEmailName),
                        };
    
                        // console.log(`Data to Pass To Functions on Sign Up`, dataToPassToFunctions);
    
                        storeUserInDatabase(userToSignUp);
                    }

                // If Sign In 
                } else if (isSignInForm) {
                    signInLogic(userTryingToSignInOrSignUp);
                } 
                // else if (editProfileForm) {
                //     updateProfileLogic(usersPwd,userTryingToEditProfile)
                // }
            } else {
                let isEditProfileForm = formThatWasSubmitted.classList.contains(`editProfileForm`);

                if (isEditProfileForm) {
                    let statusField = formThatWasSubmitted?.editStatus;
                    let usernameField = formThatWasSubmitted?.edittedUserName;
    
                    let formData = {
                        status: statusField?.value,
                        username: usernameField?.value,
                    }
    
                    // Form Error
                    if (
                        (!formData?.status 
                        || formData?.status == ``)
                        && (!formData?.username 
                        || formData?.username == ``)
                    ) {
                        alert(`Please Fill Out Something`);
                        return;
                    } else {
                        // Form is Good
                        // We need to update the logged in user with these parameters
                        console.log(`Update Profile Parameters`, {
                            user,
                            users,
                            formData,
                        });
                    
                        // To update this user, we need to update them within the overall users array
                        let modifiedUser = null;
                        let modifiedUsers = users.map(usr => {
                            // Update the profile of the currently logged in user
                            if (usr?.email == user?.email) {
                                let newUsername = formData?.username != `` ? formData?.username : usr?.username;
                                modifiedUser = {
                                    ...usr,
                                    username: newUsername,
                                    updated: new Date().toLocaleString(),
                                    displayName: capitalizeFirstLetter(newUsername),
                                    status: formData?.status != `` ? formData?.status : usr?.status,
                                };
                                return modifiedUser;
                            } else {
                                // if the user is not the one that is currently logged in, dont modify anything, just return the same user we had
                                return usr;
                            }
                        })
    
                        users = modifiedUsers;
                        localStorage.setItem(`user`, JSON.stringify(modifiedUser));
                        localStorage.setItem(`users`, JSON.stringify(users));

                        window.location.reload();
                    }
                }
            }

        })
    })
}

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