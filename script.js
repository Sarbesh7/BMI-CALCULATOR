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
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100;

        if (weight > 0 && height > 0) {
            const BMI = (weight / (height * height)).toFixed(2);
            resultDiv.textContent = `Your BMI is: ${BMI}`;
        } else {
            resultDiv.textContent = "Please enter valid height and weight values.";
        }
    });
});