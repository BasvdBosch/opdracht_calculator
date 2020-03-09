import {calculate} from './calculate.js';

  function actie(e) {
  console.log(e.target.value);
    const uitkomst = calculate(document.getElementById('a').value, document.getElementById('b').value, e.target.value);
    document.getElementById('result').innerHTML = uitkomst;
  }
// document.getElementById("getal").addEventListener("change", function(event){
//   console.log(event.target.value);
// });

document.getElementById("operator").addEventListener("change", actie);