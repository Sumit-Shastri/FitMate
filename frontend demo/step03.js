document.addEventListener("DOMContentLoaded",()=>{
    let height = localStorage.getItem("userheight");
    let weight = localStorage.getItem("userWeight");
    let gender = localStorage.getItem("usergender");

    console.log("Your height: ", height );
    console.log("Your weight: ",weight );
    console.log("ur gender: ", gender);

    const btnres = document.querySelector(".res");
    const para = document.querySelector(".con");
    btnres.addEventListener("click",(e)=>{
        e.preventDefault();
            bodyfat();
            para.style.display = "block";
            console.log(btnres);
            gsap.from(para,{
                opacity:0,
                delay: 2,
                y:70,
                stagger:1,
                duration: 1
            })
        });

        function bodyfat(){
    const neck = document.querySelector("#Neck").value;
    const waist = document.querySelector("#waist").value;
    const hips = document.querySelector("#hips").value;
    
    if(!neck || !waist || !hips ){
     document.querySelector("#calcu").innerHTML = `<b>Bhaadkau Thik se Daal!</b>`;
     return;
    }
    let bodyFat = 86.010 * Math.log10(waist - neck) 
                  - 70.041 * Math.log10(height) 
                  + 36.76;

     let fatMass = (bodyFat / 100) * weight;
      let leanMass = weight - fatMass;
      console.log(bodyFat);
      console.log(fatMass);
      console.log(leanMass)

       document.getElementById("calcu").innerHTML = `
        <b>Body Fat %:</b> <span>${bodyFat.toFixed(2)}%</span>
        <b>Fat Mass:</b> <span>${fatMass.toFixed(1)} kg</span>
        <b>Lean Mass:</b> <span>${leanMass.toFixed(1)} kg</span>
      `;
}
});