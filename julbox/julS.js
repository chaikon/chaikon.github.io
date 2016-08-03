
var jul=5;
var oldJul;
var score=0;
var lives=3;

document.getElementById('b5').src='jul.png';

function choose(num){
	console.log(num);
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
		document.getElementById('b'+jul).src='jul.png';
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
			alert("Yu are ded")
			window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

		}

		

	}

}