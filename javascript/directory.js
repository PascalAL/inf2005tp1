$(document).ready(function() {
	
	alert("Pascal");
loadTableContent();

	$('table').dataTable({"language": {
    "decimal":        "",
    "emptyTable":     "Aucun employé enregistré",
    "info":           "Employés _START_ à _END_ sur _TOTAL_ employés",
    "infoEmpty":      "Employés 0 à 0 sur 0 employés",
    "infoFiltered":   "(filtered from _MAX_ total entries)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Présenter _MENU_ employées",
    "loadingRecords": "Chargement...",
    "processing":     "En traitement...",
    "search":         "Chercher:",
    "zeroRecords":    "Aucune entrée correspondante trouvée",
    "paginate": {
        "first":      "Premier",
        "last":       "Dernier",
        "next":       "Suivant",
        "previous":   "Précédent"
    },
    "aria": {
        "sortAscending":  ": Trier en ordre croissant",
        "sortDescending": ": Trier en ordre décroissant"
    }
}});


});



function loadTableContent() {
var dbJSON = localStorage.getItem('db');
if(dbJSON != null){
	var db = JSON.parse(dbJSON);
	var employeesList = db["employees"];
	var count = employeesList.length;
	alert(count);
	
	for(var i = 0; i < count; i++){
		$('table tr:last').after('<tr><td><a href="mailto:' + employeesList[i].email + '">' + employeesList[i].firstName +' '+ employeesList[i].lastName +'</a></td><td>' + employeesList[i].empFunction + '</td><td>' + employeesList[i].phone + '</td></tr>');
	} 
}
}