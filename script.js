/* let butt = document.querySelector(".butt");
let heightInput = document.querySelector(".height");
let weightInput = document.querySelector(".weight");

butt.addEventListener("click", function() {
    let weight = parseFloat(weightInput.value); // Get weight as number
    let height = parseFloat(heightInput.value) / 100; 

    if (weight > 0 && height > 0) {
        let BMI = weight / (height * height); // Correct BMI formula
     
        res.innerHTML = "YOUR BMI IS: " + BMI.toFixed(2);

    } else {
        res.innerHTML ="Please enter valid height and weight values.";
    }   
});
 */
document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resDiv = document.getElementById("res");
    const resultDiv = document.getElementById("result");
    const cm=document.getElementById("cm");
    const ft=document.getElementById("ft");
    const noteDiv = document.getElementById("note");



    function toggleButtons(activeBtn, inactiveBtn) {
        activeBtn.style.backgroundColor = "#00bcd4";
        activeBtn.style.color = "white";
        activeBtn.style.boxShadow = "0 0 10px white"; // Glow effect
    
        inactiveBtn.style.backgroundColor = "white";
        inactiveBtn.style.color = "black";
        inactiveBtn.style.boxShadow = "none"; // Remove glow
        activeBtn.classList.add("active");
        inactiveBtn.classList.remove("active");
    }





cm.addEventListener("click",function(){

    toggleButtons(cm, ft);
    heightInput.placeholder = "Enter your height in cm"
    weightInput.placeholder = "Enter your weight in kg"

    
    calculateBtn.addEventListener("click", function() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100;

        if (weight > 0 && height > 0) {
            
            const BMI = (weight / (height * height)).toFixed(2);
            if (BMI<18.5){
            resultDiv.textContent = `Your BMI is: ${BMI}`;
            resultDiv.textContent = "You are underweight";
            noteDiv.textContent ="<u>Note</u>: The BMI may not be accurate for people with greater muscle mass (such as athletes) or in older people and others who have lost muscle mass."

            } else if (BMI>=18.5 && BMI<24.9){
                resDiv.textContent = `Your BMI is: ${BMI}`;
                resultDiv.textContent = "You are normal weight";
                 noteDiv.textContent ="Note: The BMI may not be accurate for people with greater muscle mass (such as athletes) or in older people and others who have lost muscle mass."



            } else if (BMI>=25 && BMI<29.9){
                resDiv.textContent = `Your BMI is: ${BMI}`;
                resultDiv.textContent = "You are overweight";
                noteDiv.textContent ="Note: The BMI may not be accurate for people with greater muscle mass (such as athletes) or in older people and others who have lost muscle mass."



            } else if(BMI>=30){
                resDiv.textContent = `Your BMI is: ${BMI}`;
                resultDiv.textContent = "You are obese";
                 noteDiv.textContent ="Note: The BMI may not be accurate for people with greater muscle mass (such as athletes) or in older people and others who have lost muscle mass."
            }


        }
         else {
            resultDiv.textContent = "Please enter valid height and weight values.";
        }
    });
});
ft.addEventListener("click", function(){
      


    toggleButtons(ft, cm);

 heightInput.placeholder = "Enter your height in feet"
    weightInput.placeholder = "Enter your weight in lbs"


    calculateBtn.addEventListener("click", function() {
        const weight = parseFloat(weightInput.value) * 0.453592;
        const height = parseFloat(heightInput.value) * 0.3048;

        if (weight > 0 && height > 0) {
            
            const BMI = (weight / (height * height)).toFixed(2);
            if (BMI<18.5){
            resultDiv.textContent = `Your BMI is: ${BMI}`;
            resultDiv.textContent = "You are underweight";
            } else if (BMI>=18.5 && BMI<24.9){
                resDiv.textContent = `Your BMI is: ${BMI}`;
                resultDiv.textContent = "You are normal weight";
            } else if (BMI>=25 && BMI<29.9){
                resDiv.textContent = `Your BMI is: ${BMI}`;
                resultDiv.textContent = "You are overweight";
            } else if(BMI>=30){
                resDiv.textContent = `Your BMI is: ${BMI}`;
                resultDiv.textContent = "You are obese";
            }


        }
         else {
            resultDiv.textContent = "Please enter valid height and weight values.";
        }
    });








})
});