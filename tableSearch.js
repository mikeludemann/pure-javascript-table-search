function searchTable(textfield, container, row, column) {

	var search, 
		filter, 
		found, 
		table, 
		rows, 
		columns, 
		i, 
		j;

	search = textfield;
	filter = search.value.toUpperCase();
	table = document.getElementById(container);
	rows = table.getElementsByTagName(row);

	for (i = 0; i < rows.length; i++) {

		columns = rows[i].getElementsByTagName(column);

		for (j = 0; j < columns.length; j++) {

			if (columns[j].innerHTML.toUpperCase().indexOf(filter) > -1) {

				found = true;

			}

		}

		if (found) {

			rows[i].style.display = "";

			found = false;

		} else {

			rows[i].style.display = "none";

		}	

	}

}
