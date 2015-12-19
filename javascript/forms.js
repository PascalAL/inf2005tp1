$(document).ready(function() {

}); 

var db = null;
var regionJSONObject;

function product(){
	this.supplier;
	this.name;
	this.description;
	this.price;
	this.image;
}

function employee(){
	this.firstName;
	this.lastName;
	this.email;
	this.empFunction;
	this.phone;
}

function submitProduct(){
	
	var supplier = document.getElementById("productSupplier").value;
	var region = document.getElementById("productRegion").value;
	var name = document.getElementById("productName").value;
	var description = document.getElementById("productDescription").value;
	var price = document.getElementById("productPrice").value;
	var image = document.getElementById("productImage").value;
	
	initialiseDBFromLocalStorage();
	initialiseRegionProductsArray(region);
	
	var productJSON = new product();

	productJSON.supplier = supplier;
	productJSON.name = name;
	productJSON.description = description;
	productJSON.price = price;
	productJSON.image = image;

	regionJSONObject.push(productJSON);
	db[region] = regionJSONObject;
	localStorage.setItem('db', JSON.stringify(db));

	$('#resetProduct').trigger('click');
	var div = document.getElementById('productSubmitResult');
	div.innerHTML = "Produit Enregistré.";
	return false;
};

function submitEmployee(){
	
	var lastName = document.getElementById("employeeLastName").value;
	var firstName = document.getElementById("employeeFirstName").value;
	var email = document.getElementById("employeeEmail").value;
	var empFunction = document.getElementById("employeeFunction").value;
	var phone = document.getElementById("employeePhone").value;
	
	initialiseDBFromLocalStorage();

	employeesJSONObject = db["employees"];
	if(employeesJSONObject == null){
		("La région était null");
		employeesJSONObject = [];
	}

	var employeeJSON = new employee();

	employeeJSON.lastName = lastName;
	employeeJSON.firstName = firstName;
	employeeJSON.email = email;
	employeeJSON.empFunction = empFunction;
	employeeJSON.phone = phone;

	employeesJSONObject.push(employeeJSON);

	db["employees"] = employeesJSONObject;

	localStorage.setItem('db', JSON.stringify(db));

	$('#resetEmployee').trigger('click');
	var div = document.getElementById('employeeSubmitResult');
	div.innerHTML = "Employé Enregistré.";
	return false;
};





function initialiseDBFromLocalStorage(){
	db = localStorage.getItem('db');
	if(db == null){
		db = {"africa": [], "asia": [], "europe": [], "middleEast": [], "southAmerica": [], "southPacific": [], "employees": []};		
		localStorage.setItem('db', db);
	}else{
		db = JSON.parse(db);
	}
}

function initialiseRegionProductsArray(region){
	regionJSONObject = db[region];
	if(regionJSONObject == null){
		regionJSONObject = [];
	}
}



