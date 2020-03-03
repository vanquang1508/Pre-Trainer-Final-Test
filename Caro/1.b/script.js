const add = document.querySelector('.create');

function render(value){
	var html = "<table cellspacing ='0' cellpadding ='0'>";
	for(var i =0 ; i< value ; i++){
		html += "<tr>";
		for(var j = 0; j < value; j++){
			html += "<td>";
			html += "<div class='col'></div>";
			html += "</td>";
		}
		html += "</tr>";				
	} 
	html += "</table>";
	return html;
}
add.addEventListener('click', ()=>{
	const value = document.getElementById("value").value;
	document.getElementById("main").innerHTML = render(value);
});

