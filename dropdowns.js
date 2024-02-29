let allDropdownCols = document.querySelectorAll(`.dropdownCol`);

if (allDropdownCols && allDropdownCols.length > 0) {
    allDropdownCols.forEach(dropdownCol => {
        dropdownCol.addEventListener(`click`, e => {
            
            let containerToConsider = e.target.parentElement;
            
            if (containerToConsider) {
                if (containerToConsider.classList.contains(`dropdownCol`) == false) {    
                   containerToConsider = e.target;
                }
            }

            let dropdownBtn = containerToConsider.querySelector(`.dropdownButton`);
            let dropdownContent = containerToConsider.querySelector(`.dropdown-content`);

            let logoutButtonClicked = dropdownBtn.classList.contains(`dropdownButtonLogout`);

            if (logoutButtonClicked) {
                localStorage.removeItem(`user`);
                window.location.reload();
            } else {
                dropdownBtn.classList.toggle(`flippingDropdownButton`);
                dropdownContent.classList.toggle(`expanded`);
            }

        })
    })
}

// const toggleDropDownButtonRotate = () => {
// let dropDownButton = document.querySelector(".dropdownButton");



// dropDownButton.classList.toggle(`flippingDropdownButton`);

// };

// const toggleRegisterDropDownButtonRotate = () => {
// let registerDropDownButton = document.querySelector(".registerDropDownButton");



// registerDropDownButton.classList.toggle(`flippingDropdownButton`);

// };

// // const toggleRegisterDropDownButtonRotate = () => {
// //   let registerDropDownButton = document.querySelector(".registerDropDownButton");

// //   registerDropDownButton.classList.toggle(`flippingRegisterDropDownButton `);
// // }


// const toggleDropDownContent = () => {
// let dropDownContent = document.querySelector(".dropdown-content");

// // Toggle the display property of the dropdown content
// dropDownContent.style.display = dropDownContent.style.display === "none" ? "flex" : "none";
// };

// const toggleRegisterDropDownContent = () => {
// let registerDropDownContent = document.querySelector(".registerDropdown-content");

// registerDropDownContent.style.display = registerDropDownContent.style.display === "none" ? "flex" : "none";
// }

// const toggleRegisterDropDownNavLogic = () => {
// toggleRegisterDropDownButtonRotate()
// toggleRegisterDropDownContent()
// }

// // TOGGLING THE DROP DOWN ON AND OFF
// const toggleDropDownNavLogic = () => {
//     toggleDropDownButtonRotate()
//     toggleDropDownContent()
// //   let dropDownContent = document.querySelector(".dropdown-content");
// //   let dropDownButton = document.querySelector(".dropdownButton");

// //   // GetComputedStyle: This is JavaScript Method which will return an object containing the computed styles for an element
// //   const computedStyle = window.getComputedStyle(dropDownContent);
// // getPropertyValue: once you get the computedStyle, you can specify the PROPERTY OR CSS STYLE you want to look at "display" css in this case
// //   const currentDisplay = computedStyle.getPropertyValue("display");

// //   // the terinary statement says that if the display = none, it will return the value before the colon AKA display = "flex", If not it will return Display = "none"
// //   dropDownContent.style.display = currentDisplay === "none" ? "flex" : "none";

// //   // toggle the flip here
// //   toggleDropDownButtonRotate();
// };

// // defining button variable by querySelecting .dropdownbutton
// let dropDownButton = document.querySelector(".dropdownButton");

// let registerDropDownButton = document.querySelector(".registerDropDownButton");

// // event listener for clicking the button which will open the drop down
// dropDownButton.addEventListener("click", toggleDropDownNavLogic);

// registerDropDownButton.addEventListener("click", toggleRegisterDropDownNavLogic);