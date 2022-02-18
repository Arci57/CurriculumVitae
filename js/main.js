var value;
var re;

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function Cognome(){
	value = document.getElementById("cognome").value

	if (value == null || value == ("")) {
		return "cognome";
	}
}

function Indirizzo(){
	value = document.getElementById("indirizzo").value

	if (value == null || value == ("")) {
		return "indirizzo";
	}
}

function Nome(){
	value = document.getElementById("nome").value
	
	if (value == null || value == ("")) {
		return "prova"
	}else{
		return "ok"
	}

}

function Cellulare(){
	value = document.getElementById("cell").value
	re = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

	if (!re.exec(value)) {
		return "cellulare";
	}

}

function Mail(){
	value = document.getElementById("email").value
	re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

	if (!re.exec(value)) {
		return "e-mail";
	}
}

function Cap(){
	cap = document.getElementById("cap").value
	re = /^[0-9]{5}$/

	if (re.exec(cap)) {
		return "CAP";
	}

}


function checkFirstData(){

	let message ="";

	message+=Nome() + "/n";
	message+=Cognome()+ "/n";
	message+=Cellulare()+ "/n";
	message+=Mail()+ "/n";
	message+=Indirizzo()+ "/n";
	message+=Cap();
	

	alert(message);
}
