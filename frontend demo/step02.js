document.addEventListener("DOMContentLoaded",()=>{
let sub = document.querySelector("#cal");
sub.addEventListener("click",()=>{
    console.log("clicked");
    BmiCal();
});

    
function BmiCal() {
    const height = parseFloat(document.querySelector("#height").value)/100;
    const weight = parseFloat(document.querySelector("#weight").value);

    const result = document.querySelector("#sttus");
    console.log(result);

    if (!weight || !height || weight <= 0 || height <= 0) {
        result.value = "Insaan hi hoo na aap?";
        setTimeout(() => {
            result.value = "";
        }, 5000);
        return; 
    };

  
    const bmi = (weight / (height * height)).toFixed(1);
    let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.5) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    result.value = `BMI: ${bmi} (${status})`;

  
    gsap.registerPlugin(ScrollTrigger);
    const fnt = document.querySelector(".speedo-cont");
    fnt.style.display = "initial";
    console.log(fnt);
    gsap.from(fnt,{
        delay: 1,
        duration: 1,
        y:30,
        opacity:0,
        stagger:0.8,
        yoyo:true,
        scrollTrigger:{
        trigger:"fnt",
        scrub:2
}
    })
}
const next = document.querySelector(".next");
const hover = document.querySelector(".hvr");
next.addEventListener("click",()=>{
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    if (!heightInput || !weightInput) {
            console.error("❌ #height or #weight input not found in HTML");
            return;
        }

    localStorage.setItem("userheight",height);
    localStorage.setItem("userWeight",weight);

    window.location.href = "step03.html";
});

next.addEventListener("mouseenter",()=>{
    gsap.to(hover,{
        x:100,
        opacity:1,
        zIndex: 1,
        ease: "power2.out"
    })
})
next.addEventListener("mouseleave",()=>{
    gsap.to(hover,{
        x:0,
        opacity:0,
        zIndex: -1,
        ease: "power3.out"
    })
});
});