
"use strict";

/*function CtoF() {
    var x = Number(document.getElementById('x').value);
    document.getElementById('result1').innerHTML = ((x*9)/5)+32;
    return false;
}
function FtoC() {
    var x = Number(document.getElementById('y').value);
    document.getElementById('result2').innerHTML = ((x-32)*5)/9;
    return false;
}

document.getElementById('go1').addEventListener('click', CtoF);
document.getElementById('go2').addEventListener('click', FtoC);*/
function temperatureConverter1(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}

function temperatureConverter2(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputF").innerHTML = (valNum-32) / 1.8;
}
