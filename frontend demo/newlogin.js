const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add("right-panel-active")
);

signInButton.addEventListener('click', () =>
    container.classList.remove("right-panel-active")
);


let inp = document.querySelector("input");
inp.addEventListener("input", (ded) => {
    if (ded.data !== null) {
        console.log(ded.data);
    }
});


let btn = document.getElementById("signUp");
btn.addEventListener("click", function () {
    alert("button clicked");
});

let np = document.querySelector("input");
np.addEventListener("focus", () => {
    np.style.border = "red 2px";
})

