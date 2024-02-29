// This code has been deprecated

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