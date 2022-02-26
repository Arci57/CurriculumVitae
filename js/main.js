var value;
var re;

function changeTab(evt, tabName) {
	var i, tabcontent, tablinks;
	var tabSelect;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.background = "#eee";
		tablinks[i].style.color = "#000";
	}

	if (tabName === "First") {
		tabSelect = 1;
	}
	else if (tabName === "Second") {
		tabSelect = 2;
	}
	else {
		tabSelect = 3;
	}

	for (i = 0; i < tabSelect; i++) {
		tablinks[i].style.background = "#4caf50";
		tablinks[i].style.color = "#fff";
	}
}

function showPreview(event){
	if(event.target.files.length > 0){
		var src = URL.createObjectURL(event.target.files[0]);
		var preview = document.getElementById("image-preview");
		preview.src = src;
	}
}

function Cognome(){
	value = document.getElementById("cognome").value

	if (value == null || value == ("")) {
		return 'Cognome';
	}
	else {
		return "";
	}
}

function Indirizzo(){
	value = document.getElementById("indirizzo").value

	if (value == null || value == ("")) {
		return 'Indirizzo';
	}
	else {
		return "";
	}
}

function Nome(){
	value = document.getElementById("nome").value
	
	if (value == null || value == ("")) {
		return 'Nome';
	}
	else {
		return "";
	}

}

function Cellulare(){
	value = document.getElementById("cell").value
	re = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

	if (!re.exec(value)) {
		return 'Cellulare';
	}
	else {
		return "";
	}

}

function Mail(){
	value = document.getElementById("email").value
	re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

	if (!re.exec(value)) {
		return 'E-mail';
	}
	else {
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

function Calendar(){
	value = document.getElementById("datanascita").value


	if(value == ""){
		return "Calendario"
	}
	else {
		return ""
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
	if(Mail() != ""){
		message.push(er + Mail())
	}
	if(Calendar() != ""){
		message.push(er + Calendar())
	}

	if(message.length != 0){
	alert(message.join('\n'))
	}
	else {	
		changeTab(event, 'Second')
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
		return true;
	}
}
