
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add("right-panel-active")
);

signInButton.addEventListener('click', () =>
    container.classList.remove("right-panel-active")
);

let pass = document.querySelector(".password");
let name = document.querySelector("#name");
let form = document.querySelector("form");
let inputs = document.querySelector("input");
form.addEventListener("submit",(dets)=>{
    dets.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans = regex.test("vijay12@domain.co.in")
    console.log(ans);
    const regex2 = /^[a-zA-Z0-9_]{3,20}$/;
    let ans2 = regex2.test(`${inputs.value}`);
    console.log(ans2);
});

const toggleBtn = document.getElementById("C");
let isDark = false;

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  isDark = !isDark;
  toggleBtn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
});

