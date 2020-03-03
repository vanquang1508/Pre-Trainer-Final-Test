const add = document.querySelector('.create');

function render(value,value1){
	var html = "<table cellspacing ='0' id='table'>";
	for(var i =0 ; i < value ; i++){
		if (i == 0) {
			for(var j = 0; j < value1; j++){
				html += "<th>";
				html += "<button onclick='sortTable("+j+")'>"+(j+1)+"</button>";
				html += "</th>";
			}
		}	
		html += "<tr>";
		for(var j = 0; j < value1; j++){
			html += "<td>";
			html += "<div class='col'>"+Math.floor(Math.random() * (1000 - 100 + 1) + 100);+"</div>";
			html += "</td>";
		}
		html += "</tr>";				
	}
	html += "</table>";
	return html;
}

function sortTable(e) {
	console.log(e);
	let table, rows, stop, i, x, y, next;
	table = document.getElementById("table");
	stop = true;
	while (stop) {
		stop = false;
		rows = table.rows;
		for (i = 1; i < (rows.length - 1); i++) {
			next = false;
			x = rows[i].getElementsByTagName("td")[e];
			y = rows[i + 1].getElementsByTagName("td")[e];
			if (x.innerHTML > y.innerHTML) {
				next = true;
				break;
			}
		}
		if (next) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			stop = true;
		}
	}
}

add.addEventListener('click',()=>{
	const value = document.getElementById("value").value;
	const value1 = document.getElementById("value1").value;
	document.getElementById("main").innerHTML = render(value,value1);
});
