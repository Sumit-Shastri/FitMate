const signInbtn = document.querySelector('.signInbtn');
const signUpbtn = document.querySelector('.signUpbtn');
const boxx = document.querySelector('.boxx');

signUpbtn.addEventListener('click', () => {
    boxx.classList.toggle('active');
})