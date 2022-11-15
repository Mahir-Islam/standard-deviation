var column = '<td><input class="val" type="text"></input></td><td><input class="freq" type="text"></input></td>';
var defs = "";

function modify(x) {
	var rna = document.getElementById("list");

	switch(x) {

	case 1:
		rna.insertAdjacentHTML('beforeend',column);
		break;
		lopes++;
	case 2:
		defs = '<table class="table" id="list"><tbody><tr>	<th align="left">Value</th>	<th align="left">Frequency</th>	<th><input type="submit" id="p" name="add" value="New column" onclick="modify(1);"></input></th>	<th><input type="submit" id="n" name="add" value="Cancel" onclick="modify(2);"></input></th></tr><tr><td><input class="val" type="text"></input></td><td><input class="freq" type="text"></input></td><td><input id="e" type="submit" value="Calculate" onclick="calc();"></td><td><input id="e" type="submit" value="Made by Mahir" onclick="alert(\'For more, go to github.com/mahv\');"></td></tr></tbody></table></div>';
		rna.innerHTML = defs;
		break;
	}
}

var x̄ = 0;
var σ2 = 0;
var σ = 0;
var Σx = 0;
var Σx2 = 0;
var x = 0;
var n = 0;
var Σ = 0;


function calc() {

	x̄ = 0;
	σ2 = 0;
	σ = 0;
	Σx = 0;
	Σx2 = 0;
	x = 0;
	n = 0;
	Ξ = 0;


	var vals = document.getElementsByClassName("val");
	var freqs =document.getElementsByClassName("freq");

	for(i = 0, l = vals.length; i < l; i++) {

		Σx  += parseFloat(freqs[i].value)*parseFloat(vals[i].value); 
		Σx2 += parseFloat(freqs[i].value)*(parseFloat(vals[i].value)*parseFloat(vals[i].value));
		n += parseInt(freqs[i].value);
	}

	x̄ = Σx/n;
	Ξ = Σx2/n;

	σ2 = Ξ - (x̄*x̄);
	σ = Math.sqrt(σ2);

	document.getElementById("sum").value = Σx;
	document.getElementById("lenf").value = n;
	document.getElementById("mean").value = x̄;
	document.getElementById("variance").value = σ2;
	document.getElementById("sxs").value = Σx2;
	document.getElementById("sdev").value = σ;
}


