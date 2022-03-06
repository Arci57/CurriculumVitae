function generatePDF() {
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "block";
	}

	buttons = document.getElementsByClassName("button");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].style.display = "none";
	}

	imglabel = document.getElementById("ImageLabel");
    imglabel.style.display = "none";

	textfield = document.getElementsByClassName("textfield");
	for (i = 0; i < textfield.length; i++) {
		textfield[i].placeholder = "";
	}

    const element = document.getElementById('form-pdf');

    html2pdf().from(element).save();

    setTimeout(function(){ 
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    }, 500);

    postpdf = document.getElementById('postPDF');
    postpdf.style.display = "block";
}