

     function btn(val) {
         document.getElementById("calc-output").innerHTML += val;
     }
     function btnClean(){
        document.getElementById("calc-output").innerHTML = "";
     }
     function btnPlus() {
        document.getElementById("calc-output").innerHTML += "+";
     }
     function btnLess() {
        document.getElementById("calc-output").innerHTML += "-";
     }
     function btnMultiply() {
        document.getElementById("calc-output").innerHTML += "*";
     }
     function btnDivision() {
        document.getElementById("calc-output").innerHTML += "/";
     }

     function btnEgal() {
	      var egal = eval(document.getElementById('calc-output').innerHTML);
	      document.getElementById('resultat').innerHTML = egal;
      }
