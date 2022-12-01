// The inspector() funtion checks for blank textarea
function inspector(){
	if(document.getElementById("one").value=== null || document.getElementById("one").value === "")
		alert('blank text area');
}

// The checkwords() function is a main function that shows us how many words are entered.
function CheckWords(){
	var words = document.getElementById("one").value;

		// counter
		var count = 0;
		//split the words on each space characters
		//split converts a String to an Array.
		var split = words.split(' ');
		
		for( let i =0; i < split.length; i++){
			if( split[i] !== ''){
				count +=1;
			}
	
		}
	if(count <= 50){document.getElementById('show').innerHTML= count;
}else{
	document.getElementById("show").innerHTML= '<h4 style="color: red">CHECK IF THERE IS NO RUN-ON SENTENCES</h4>';
}
// An event listener function that checks for some grammar mistake.
document.getElementById("one").onkeyup = function(){

	var text_value = document.getElementById("one").value;



	if (/^[a-z]/.test(text_value) === true) {
		document.getElementById("show2").innerHTML = '<h4 style="color: red"> Invalid entry</h4>';
	}
	else if(/\.+ [a-z]$/.test(text_value)===true){
		document.getElementById("show2").innerHTML = '<h4 style="color: red"> check for you letters</h4>';
	}
	else if(/[a-z](3)[(0-9)](4)$/.test(text_value)=== true){
		document.getElementById("show2").innerHTML = '<h4 style="color: red"> check for citation</h4>';
	}
	else {
		document.getElementById("show2").innerHTML = "";
	}


};


}


