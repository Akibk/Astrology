         function displayShow() {
		 var x = document.getElementsByClassName("hide");
		 var i;
		 for (i=0;i<x.length;i++){
			 x[i].style.visibility = "visible";
		 }
         }

	function celeb_start() {
		 var x = document.getElementsByClassName("hide2");
		 var i;
		 for (i=0;i<x.length;i++){
			 x[i].style.visibility = "visible";
		 }
         }

	function celeb_res() {
		var res = Math.random()*10
		document.getElementById("celeb_res").innerHTML = "The overlap of you and your celebrity's soul spectra is..."+res.toFixed(2)+"%. <br><br> Don't lose hope if your number is too low! The universe doesn't give us our destinies at birth. Your credit card number is also important! <br> If your low score is giving you distress, contemporary neuroscience has shown generosity can cause soul spectra to align. <br> Monetary donations are always welcome (Amex 2.7% surcharge), but one cannot work on the soul until one works with their hands. <br> Exclusive positions are now available in our compound, just off highway 72 near Portland, Oregon.";
	}

	function result(){
		var restext = [
			"This frequency resonates with the crystal α-Al2O3 indicating kindness and warmth in your astral field. This kindness will be taken advantage of by your peers and you will die penniless and alone.", 
			"This frequency resonates with the crystal NaCl indicating saltiness in your astral field. You are quick to anger but dissolve easily in water. Every drop of water you drink weakens the bonds that hold you together. Avoid it at all costs.", 
			"This frequency resonates with the crystal Graphite indicating artistry and people confusing you with lead in your astral field. Every word you write in the story of your life erodes you. Eventually you will wear yourself down to a nub, ripping through the page and taking your loved ones with you. Try writing with a pen next time.",
		"This frequency resonates with the crystal Silicon Dioxide on a Silicon substrate indicating CMOS compatibility in your astral field. You have a natural and instictive ability to feel your level of credit card debt. You no longer need to check your bank statements, and should stop doing so immediately.",
		"This frequency resonates with crystalline urea indicating a yellow, smelly astral field. While you have lived under unceasing constant difficulty, the next cycle of your life will bring hope. Prepare to find friendships growing, job opportunities coming your way, and a full and active love life as coronavirus causes more people to lose their sense of smell."];

		var frequency = Math.random()*1000;
		document.getElementById("freq").innerHTML = "Your individual frequency is: "+frequency.toFixed(2) + " MHz";
		document.getElementById("res").innerHTML = restext[Math.floor(Math.random()*restext.length)];

		document.getElementById("celeb").style.visibility = "visible";
	}
