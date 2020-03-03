const divs = document.querySelectorAll('div');

function XO(e) {
	if(this.innerHTML !== "X" && this.innerHTML !== "O"){
		if(value%2 === 0){
			console.log(value);
			this.innerHTML = "X"; 
			value +=1;
			Winner();
		}else{
			console.log(value);
			this.innerHTML = "O";
			value +=1;
			Winner();  
		}
	}
}

function Winner(){
	const col1 = document.getElementById('col1');
	const col2 = document.getElementById('col2');
	const col3 = document.getElementById('col3');
	const col4 = document.getElementById('col4');
	const col5 = document.getElementById('col5');
	const col6 = document.getElementById('col6');
	const col7 = document.getElementById('col7');
	const col8 = document.getElementById('col8');
	const col9 = document.getElementById('col9');
	if(col1.innerHTML !== "" && col1.innerHTML === col2.innerHTML && col1.innerHTML === col3.innerHTML){
		winnerGame(col1,col2,col3);
	}
	if(col4.innerHTML !== "" && col4.innerHTML === col5.innerHTML && col4.innerHTML === col6.innerHTML){
		winnerGame(col4,col5,col6);
	}
	if(col7.innerHTML !== "" && col7.innerHTML === col8.innerHTML && col7.innerHTML === col9.innerHTML){
		winnerGame(col7,col8,col9);
	}
	if(col1.innerHTML !== "" && col1.innerHTML === col4.innerHTML && col1.innerHTML === col7.innerHTML){
		winnerGame(col1,col4,col7);
	}

	if(col2.innerHTML !== "" && col2.innerHTML === col5.innerHTML && col2.innerHTML === col8.innerHTML){
		winnerGame(col2,col5,col8);
	}

	if(col3.innerHTML !== "" && col3.innerHTML === col6.innerHTML && col3.innerHTML === col9.innerHTML){
		winnerGame(col3,col6,col9);
	}

	if(col1.innerHTML !== "" && col1.innerHTML === col5.innerHTML && col1.innerHTML === col9.innerHTML){
		winnerGame(col1,col5,col9);
	}

	if(col3.innerHTML !== "" && col3.innerHTML === col5.innerHTML && col3.innerHTML === col7.innerHTML){
		winnerGame(col3,col5,col7);
	}
}

function winnerGame(value, value1, value2){
	value.classList.add("win");
	value1.classList.add("win");
	value2.classList.add("win");
	alert(value.innerHTML + " Chiến thắng");

}

function reset() {
	location.reload();
}

divs.forEach(div => div.addEventListener('click', XO, value = 0));
