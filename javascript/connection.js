$(document).ready(function() {
	
	$("#connect").click(function() {
		if (sessionActive) {
			open("../html/forms.html");
		} else {
			open("../html/connection.html");
		}
	});
});
function infoConnection() {			
	localStorage.setItem("password", "Inf2005");	
	localStorage.setItem("userName", "admin");	
}

function validate() {
	var sessionActive = false;
	
	var adminPassword = localStorage.getItem("password").toString();
	var adminUser = localStorage.getItem("userName").toString();	
	var userName = document.getElementById("user").value;
	var password = document.getElementById("pass").value;	
	
	if (userName == adminUser && password == adminPassword) {
		sessionActive = true;		
		open("../html/forms.html");
	} else {
		alert("Le mot de passe et/ou le nom d'usager est incorrect. Veuillez réessayer");
	}
};

	

