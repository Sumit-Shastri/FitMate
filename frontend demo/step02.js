let sub = document.querySelector("#cal");
sub.addEventListener("click",()=>{
    console.log("clicked");
    BmiCal();
   

});

function BmiCal() {
    const height = parseFloat(document.querySelector("#height").value)/100;
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#sttus");
    console.log(result)

    

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
        delay: 3,
        duration: 1,
        y:30,
        opacity:0,
        stagger:0.5,
        yoyo:true,
        scrollTrigger:{
        trigger:"fnt",
        scrub:2
}
    })
}

const elastic = document.querySelector(".curve");

var path = `M 30 30 Q 100 60 200 60`

var fpath = `M 30 30 Q 100 30 250 30`


elastic.addEventListener("mousemove",(dets)=>{
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    console.log(dets)
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.5,
        ease:"power3.out"
    })
})
elastic.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:fpath},
        duration:0.6,
        ease:"elastic.out(1.2,0.2)"
    })
})