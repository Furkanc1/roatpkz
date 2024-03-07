// This code has been deprecated

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

// Set Header Component w/ jQuery
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