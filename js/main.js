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

function cognome(){
	var value = document.getElementById("cognome").value

	if (value == null || value.isempty()) {
		return false;
	}
	else {
		return true;
	}
}


function nome(){
	var value = document.getElementById("nome").value

	if (value == null || value.isempty()) {
		return false;
	}
	else {
		return true;
	}
}

function cellulare(){
	var value = document.getElementById("cellulare").value

	if (value.matches("^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$")) {
		return true;
	}
	else {
		return false;
	}
}

function mail(){
	var value = document.getElementById("email").value

	if (value.matches("^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$")) {
		return true;
	}
	else {
		return false;
	}
}

function cap(){
	var cap = document.getElementById("cap").value

	if (value.matches("^[0-9]{5}$")) {
		return true;
	}
	else {
		return false;
	}
}

function prefisso(){
	var value = document.getElementById("prefisso").value

	if (value.matches("^\+[0-9]{1,3}$")) {
		return true;
	}
	else {
		return false;
	}
}

function cellulare(){
	var value = document.getElementById("prefisso").value

	if (value.matches("^\+[0-9]{1,5}$")) {
		return true;
	}
	else {
		return false;
	}
}

