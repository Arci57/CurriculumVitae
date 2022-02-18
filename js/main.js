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
		return 'Cognome';
	}else{
		return "";
	}
}

function Indirizzo(){
	value = document.getElementById("indirizzo").value

	if (value == null || value == ("")) {
		return 'Indirizzo';
	}else{
		return "";
	}
}

function Nome(){
	value = document.getElementById("nome").value
	
	if (value == null || value == ("")) {
		return 'Nome';
	}else{
		return "";
	}

}

function Cellulare(){
	value = document.getElementById("cell").value
	re = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

	if (!re.exec(value)) {
		return 'Cellulare';
	}else{
		return "";
	}

}

function Mail(){
	value = document.getElementById("email").value
	re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

	if (!re.exec(value)) {
		return 'E-mail';
	}else{
		return "";
	}
}

function Cap(){
	value = document.getElementById("cap").value
	re = /^[0-9]{5}$/

	if (!re.exec(value)) {
		return 'Cap';
	}else{
		return "";
	}

}


function checkFirstData(){

	let message = []

	var er = "Problema nel: "

	if(Nome() != ""){
		message.push(er + Nome())
	}
	if(Cognome() != ""){
		message.push(er + Cognome())
	}
	if(Cellulare() != ""){
		message.push(er + Cellulare())
	}
	if(Cap() != ""){
		message.push(er + Cap())
	}
	if(Indirizzo() != ""){
		message.push(er + Indirizzo())
	}

	if(message.length != 0){
	alert(message.join('\n'))
	}
}

function checkSecondData(){

	let message = []

	var er = "Problema nel: "

	if(Nome() != ""){
		message.push(er + Nome())
	}
	if(Cognome() != ""){
		message.push(er + Cognome())
	}
	if(Cellulare() != ""){
		message.push(er + Cellulare())
	}
	if(Cap() != ""){
		message.push(er + Cap())
	}
	if(Indirizzo() != ""){
		message.push(er + Indirizzo())
	}

	if(message.length != 0){
	alert(message.join('\n'))
	}else{
		GeneratePdf();
	}
}

function GeneratePdf() {
	var element = document.getElementById('form-print');
	html2pdf(element);
}

