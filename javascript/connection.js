function session() {	/* vérifie si l'utilisateur s'est déjà authentifié*/
	active = sessionStorage.getItem("sessionActive");
	
	if (active) {		
		open("../html/forms.html", "_self");		
	} else {
		open("../html/connection.html",  "_self");
	}	
}

function validate() {	/*valide le nom d'usager et le mot de passe' */
	var adminPassword = localStorage.getItem("password").toString();
	var adminUser = localStorage.getItem("userName").toString();	
	var userName = document.getElementById("user").value;
	var password = document.getElementById("pass").value;	
	
	if (userName == adminUser && password == adminPassword) {
		sessionStorage.setItem("sessionActive", true);		
	
		open("../html/forms.html", "_self");
	
	} else {
		alert("Le mot de passe et/ou le nom d'usager est incorrect. Veuillez réessayer");
	}
}

function infoConnection() {	  /* sauvegarde les infos d'administrateur */		
	localStorage.setItem("password", "Inf2005");	
	localStorage.setItem("userName", "admin");
	
	active = sessionStorage.getItem("sessionActive");
	if (active = null) {
		sessionStorage.setItem("sessionActive", false);
	}
}




	

