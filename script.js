let players = localStorage.getItem(`players`)
  ? JSON.parse(localStorage.getItem(`players`))
  : Array(531).fill(null);

const toggleDropDownButtonRotate = () => {
  let dropDownButton = document.querySelector(".dropdownButton");

  
  
  dropDownButton.classList.toggle(`flippingDropdownButton`);
  
};

const toggleRegisterDropDownButtonRotate = () => {
  let registerDropDownButton = document.querySelector(".registerDropDownButton");

  
  
  registerDropDownButton.classList.toggle(`flippingDropdownButton`);
  
};

// const toggleRegisterDropDownButtonRotate = () => {
//   let registerDropDownButton = document.querySelector(".registerDropDownButton");
  
//   registerDropDownButton.classList.toggle(`flippingRegisterDropDownButton `);
// }


const toggleDropDownContent = () => {
  let dropDownContent = document.querySelector(".dropdown-content");

  // Toggle the display property of the dropdown content
  dropDownContent.style.display = dropDownContent.style.display === "none" ? "flex" : "none";
};

const toggleRegisterDropDownContent = () => {
  let registerDropDownContent = document.querySelector(".registerDropdown-content");
  
  registerDropDownContent.style.display = registerDropDownContent.style.display === "none" ? "flex" : "none";
}

const toggleRegisterDropDownNavLogic = () => {
  toggleRegisterDropDownButtonRotate()
  toggleRegisterDropDownContent()
}

// TOGGLING THE DROP DOWN ON AND OFF
const toggleDropDownNavLogic = () => {
    toggleDropDownButtonRotate()
    toggleDropDownContent()
//   let dropDownContent = document.querySelector(".dropdown-content");
//   let dropDownButton = document.querySelector(".dropdownButton");

//   // GetComputedStyle: This is JavaScript Method which will return an object containing the computed styles for an element
//   const computedStyle = window.getComputedStyle(dropDownContent);
// getPropertyValue: once you get the computedStyle, you can specify the PROPERTY OR CSS STYLE you want to look at "display" css in this case
//   const currentDisplay = computedStyle.getPropertyValue("display");

//   // the terinary statement says that if the display = none, it will return the value before the colon AKA display = "flex", If not it will return Display = "none"
//   dropDownContent.style.display = currentDisplay === "none" ? "flex" : "none";

//   // toggle the flip here
//   toggleDropDownButtonRotate();
};

// defining button variable by querySelecting .dropdownbutton
let dropDownButton = document.querySelector(".dropdownButton");

let registerDropDownButton = document.querySelector(".registerDropDownButton");

// event listener for clicking the button which will open the drop down
dropDownButton.addEventListener("click", toggleDropDownNavLogic);

registerDropDownButton.addEventListener("click", toggleRegisterDropDownNavLogic);

const setHeaderDynamically = () => {
  const header = $(`
        <header>
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
