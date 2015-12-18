$(document).ready(function() {
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
