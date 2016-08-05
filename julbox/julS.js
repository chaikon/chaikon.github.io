
var jul=5;
var oldJul;
var score=0;
var lives=3;
var julNum = Math.floor((Math.random() * 5) + 1);


document.getElementById('b5').src='jul'+julNum+'.png';

function choose(num){
	if (num==jul){
		// alert("That is indeed Julie.");
		document.getElementById('b'+jul).src='invisible.png';

		score++;
		oldJul=jul;
		jul=Math.floor((Math.random() * 16) + 1);
		while (oldJul==jul){
			oldJul=jul;
			jul=Math.floor((Math.random() * 16) + 1);
		}
		var oldjn=julNum;
		while (julNum==oldjn){
			julNum = Math.floor((Math.random() * 5) + 1);
		}
		document.getElementById('b'+jul).src='jul'+julNum+'.png';

		document.getElementById('scoreBoard').innerHTML= "Score: "+score;
	}

	else{
		alert("That is not Julie.");
		lives--;
		var liv = "Lives: ";

		for (var i=0;i<lives;i++){
			liv=liv+"・"
		}
		document.getElementById('lives').innerHTML=liv;

		if (lives<=0){
			window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
			alert("Yu are ded");

		}

		

	}

}