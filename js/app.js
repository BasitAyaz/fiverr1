var percentage = 0;
var totalNumber = 12;

function next(){
    percentage++
    var annual = (percentage/totalNumber) *100;
    var final = Math.round(annual)
    console.log(final)
    document.getElementById('showPercent').style.width = `${final}%`
    document.getElementById('percentageNumber').innerHTML = final
    var firstName = document.getElementById('first_Name').value
    document.getElementById('firstName1').innerHTML = firstName
    document.getElementById('firstName2').innerHTML = firstName
}
function select(e){
    e.className = 'selected'
}
function showCVinput(){
    document.getElementById('input_CV').style.display = 'block'
}