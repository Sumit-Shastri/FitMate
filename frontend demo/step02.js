let sub = document.querySelector("#cal");
sub.addEventListener("click",()=>{
    console.log("clicked");
    BmiCal()
});

function BmiCal() {
    const height = parseFloat(document.querySelector("#height").value)/100;
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#status");
    console.log(result)

    

    if (!weight || !height || weight <= 0 || height <= 0) {
        result.value = "Insaan hi hoo na aap?";
        setTimeout(() => {
            result.value = "";
        }, 5000);
        return; 
    };

  
    const bmi = (weight / (height * height)).toFixed(2);
    let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.5) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    result.value = `BMI: ${bmi} (${status})`;

const suii = document.querySelector("svg line");

const minBMI = 10;
const maxBMI = 40;
const minAngle = -90;  
const maxAngle = 90;  

const clampedBMI = Math.max(minBMI, Math.min(bmi, maxBMI));

const angle = ((clampedBMI - minBMI) / (maxBMI - minBMI)) * (maxAngle - minAngle) + minAngle;
console.log(angle);

gsap.to(suii, {
    duration: 1,
    rotation: angle,
    transformOrigin: "140px 140px" 
})
    console.log(suii);

const txt = document.querySelector("#bmi-text");
txt.textContent = "";
txt.textContent = `BMI = ${bmi}`; 

};
