var lightTitle = function(){
	document.getElementById('titleImage').style.backgroundImage = 'url(logo2.png)';
	document.getElementById('titleLightText').style.color = "#faf9b4";
}
var darkTitle = function(){
	document.getElementById('titleImage').style.backgroundImage = 'url(logo.png)';
	document.getElementById('titleLightText').style.color = "#ffffff";
}

var navLinks = document.getElementsByClassName('navLink');
for(var i = 0; i < navLinks.length; i++){
	navLinks[i].addEventListener("mouseenter", lightTitle, false);
	navLinks[i].addEventListener("mouseleave", darkTitle, false);
}

document.getElementById('titleLink').addEventListener("mouseenter", lightTitle, false);
document.getElementById('titleLink').addEventListener("mouseleave", darkTitle, false);