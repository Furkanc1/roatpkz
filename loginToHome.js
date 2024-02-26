
const goBackToHomeAfterSignin = () => {
    location.href = './index.html'
}

document.querySelector('#loginBtn').addEventListener('click', goBackToHomeAfterSignin)