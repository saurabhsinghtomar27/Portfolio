const checkbtn = document.querySelector("#check");
const menu = document.querySelector(".menu");
checkbtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log('vl');
})