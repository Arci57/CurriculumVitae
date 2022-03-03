var value;
var re;
let message = []

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
	cognome = document.getElementById("cognome");

	if (cognome.value == null || cognome.value == ("")) {
		cognome.style.borderColor = "#F44336";
		return 'Cognome';
	}
	else {
		cognome.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Indirizzo(){
	indirizzo = document.getElementById("indirizzo");

	if (indirizzo.value == null || indirizzo.value == ("")) {
		indirizzo.style.borderColor = "#F44336";
		return 'Indirizzo';
	}
	else {
		indirizzo.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Citta(){
	citta = document.getElementById("citta");

	if (citta.value == "Seleziona") {
		citta.style.borderColor = "#F44336";
		return 'Città';
	}
	else {
		citta.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Nome(){
	value = document.getElementById("nome").value;
	
	if (nome.value == null || nome.value == ("")) {
		nome.style.borderColor = "#F44336";
		return 'Nome';
	}
	else {
		nome.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Cellulare(){
	cellulare = document.getElementById("cell");
	re = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

	if (!re.exec(cellulare.value)) {
		cellulare.style.borderColor = "#F44336";
		return 'Cellulare';
	}
	else {
		cellulare.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Mail(){
	email = document.getElementById("email");
	re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if (!re.exec(email.value)) {
		email.style.borderColor = "#F44336";
		return 'E-mail';
	}
	else {
		email.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Cap(){
	cap = document.getElementById("cap");
	re = /^[0-9]{5}$/

	if (!re.exec(cap.value)) {
		cap.style.borderColor = "#F44336";
		return 'Cap';
	}
	else {
		cap.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Calendar(){
	calendar = document.getElementById("datanascita");

	if(calendar.value == ""){
		calendar.style.borderColor = "#F44336";
		return "Calendario"
	}
	else {
		calendar.style.borderColor = "#AAAAAA";
		return ""
	}
}

function Titolostudio(){
	titolostudio = document.getElementById("titolostudio");

	if (titolostudio.value == "Seleziona") {
		titolostudio.style.borderColor = "#F44336";
		return 'Titolo di studio';
	}
	else {
		titolostudio.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Patente(){
	patente = document.getElementById("patente");

	if (patente.value == "Seleziona") {
		patente.style.borderColor = "#F44336";
		return 'Patente';
	}
	else {
		patente.style.borderColor = "#AAAAAA";
		return "";
	}
}

function Lingue () {
	languages = document.getElementsByClassName("checkbox");

	var checked = document.querySelector("languages[0]:checked") != null;
	console.log(checked);
	return 'Lingue';
}

function checkFirstData(){

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
	if(Citta() != ""){
		message.push(er + Citta())
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
		console.log(message.join('\n'))
		message = [];
	}
	else {	
		changeTab(event, 'Second')
	}
}

function checkSecondData(){

	var er = "Problema nel: "

	if(Titolostudio() != ""){
		message.push(er + Titolostudio())
	}
	if(Patente() != ""){
		message.push(er + Patente())
	}

	if(message.length != 0){
		console.log(message.join('\n'))
		message = [];
	}
	else {
		changeTab(event, 'Third')
	}
	
}