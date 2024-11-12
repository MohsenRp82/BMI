let $ = document
let heightResult = $.querySelector(".height-result")
let weightResult = $.querySelector(".weight-result")
let heightRange = $.querySelector(".person-height-range")
let weightRange = $.querySelector(".person-weight-range")
let BMIResult = $.querySelector(".BMI-result h2")
let resultScope = $.querySelector(".scope")

function heightHandler() {
    heightResult.innerHTML = heightRange.value
    bmiHandler()
}

function weightHandler() {
    weightResult.innerHTML = weightRange.value
    bmiHandler()
}
function bmiHandler(){
    let bmiValueResult = (weightRange.value / (Math.pow(heightRange.value/100 , 2))).toFixed(1)
    BMIResult.innerHTML = bmiValueResult
    if (bmiValueResult < 18.5) {
        resultScope.innerHTML = "UnderWeight"
    } else if (18.5 <= bmiValueResult && bmiValueResult < 25) {
        resultScope.innerHTML = "Normal"
    } else if (25 < bmiValueResult && bmiValueResult <= 29.9) {
        resultScope.innerHTML = "OverWeight"
    } else if (bmiValueResult >= 30) {
        resultScope.innerHTML = "Obese"
    }
}


heightRange.addEventListener("input", heightHandler)
weightRange.addEventListener("input", weightHandler)