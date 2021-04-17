         function displayShow() {
		 var x = document.getElementsByClassName("hide");
		 var i;
		 for (i=0;i<x.length;i++){
			 x[i].style.visibility = "visible";
		 }
         }

	function result(){
		var restext = [
			"This frequency resonates with the crystal α-Al2O3 indicating kindness and warmth in your astral field. This kindness will be taken advantage of by your peers and you will die penniless and alone.", 
			"This frequency resonates with the crystal NaCl indicating saltiness in your astral field. You are quick to anger but dissolve easily in water. Every drop of water you drink weakens the bonds that hold you together. Avoid it at all costs.", 
			"This frequency resonates with the crystal Graphitic Nanodiamond indicating headstrongness under a soft outer shell. Every word you write in the story of your life erodes you. Eventually your diamond core is exposed, ripping through the page and taking your loved ones with you. Try writing with a pen next time."];

		document.getElementById("freq").innerHTML = "Your individual frequency is: "+Math.random()*1000 + " Hz";

		document.getElementById("res").innerHTML = restext[Math.floor(Math.random()*restext.length)];
	}
