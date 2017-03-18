window.onload = function(){

};


var quotes=[];
quotes[0]="Watch your back, but more importantly when you get out the shower, dry your back. Its a cold world out there.";
quotes[1]= "Stay positive but stay focused. Sometimes things can distract you and you don't want to be distracted on the journey to that mountain top.";
quotes[2]="The key is to enjoy life, because they don't want you to enjoy life.";
quotes[3]="The other day the grass was brown, now its green cuz I ain't give up. Never surrender.";
quotes[4]="One of my keys to success is a lot of pillows. I feel like a lot of pillows is important to relax each piece of your body.";

var x= document.getElementById("quantity").value;
var rand;
var randText;

function displayQuotes(){
	if (isNaN(x)){
		var text ="Input not valid";
		document.getElementById("demo").innerHTML =text;
	}
else{
	for(var i =0; i <x; i++){
      rand=Math.floor(Math.random() * quotes.length);
      randText += quotes[rand];
      document.getElementById("demo").innerHTML=randText;
	}
}
}
displayQuotes()