$(document).ready(function() {
loadCategoryContent();
});

function loadCategoryContent() {
var dbJSON = localStorage.getItem('db');
var categoryName = document.getElementById("categoryName").value;

if(dbJSON != null){

	var db = JSON.parse(dbJSON);
	var productList = db[categoryName];
	var count = productList.length;

	for(var i = 0; i < count; i++){

		var y = i+2;

		var lehtml = '<div id="section' + y + '"><header><h4>' + productList[i].supplier + '</h4></header><figure><figcaption>' + productList[i].name + '</figcaption><img src="' + productList[i].image + '">' + productList[i].description + '</figure><footer><h5>' + productList[i].price + ' $</h5></footer></div>';
		$('#section').after(lehtml);
		$('#sectionLinks').after('<li><a href="#section'+ y +'">' + productList[i].name + '</a></li>');
	} 
}
}