let players = localStorage.getItem(`players`)
  ? JSON.parse(localStorage.getItem(`players`))
  : Array(531).fill(null);

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