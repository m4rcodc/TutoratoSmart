// Alla presisone del tasto 'enter' il tasto 'Registra' viene premuto.
$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        $("#register").click();
    }
});

// Quando viene digitato un carattere nella email controlla se l'email e' disponibile nel DB.
$("#Email").on('keyup', function() {	
	$.post("/TutoratoSmart/Registration", { 
		"mail":$(this).val(),
		"ajax":"true"
		},
		function(data){			  
			var color;
			  
			if (validateEmail($("#Email")) && data.disponibile)
				color = "1px solid green"; 
			else
				color = "1px solid red";
						 
			$("#Email").css("border",color);
			emailDisp = data.disponibile;
		});
});

// Controlla che la password immessa sia valida.
$("#Password").on('keyup',function(){
	var color;
	
	if (validatePassword($(this))) 
		color = "1px solid green";			
	else
		color = "1px solid red";
		
	if ($(this).val() == "")
		color = "0";
	
	$(this).css("border", color);
});

// Controlla che la password di conferma immessa sia valida.
$("#VerifyPassword").on('keyup',function(){
	var color;
	
	if (validatePassword($(this)) && checkPasswords($(this), $("#Password"))) 
		color = "1px solid green";	
	else
		color = "1px solid red";
	
	
	if ($(this).val() == "")
		color = "0";
	
	$(this).css("border",color);
});

// Controlla che il nome immesso sia valido.
$("#FirstName").on('keyup',function(){
	var color;
	if (validateFirstName($(this)))
		color = "1px solid green";
	else
		color = "1px solid red";
	
	if ( $(this).val() == "")
		color = "0";
	
	$(this).css("border",color);
});

// Controlla che il cognome immesso sia valido.
$("#LastName").on('keyup ',function(){
	var color;
	if (validateLastName($(this)))
		color = "1px solid green";
	else
		color = "1px solid red";
	
	if ($(this).val() == "")
		color = "0";
	
	$(this).css("border",color);
});

// Controlla che il numero di telefono immesso sia valido.
$("#TelephoneNumber").on('keyup',function(){
	var color;
	if (validateTelephoneNumber($(this)))
		color = "1px solid green";
	else
		color = "1px solid red";
	
	if ($(this).val() == "")
		color = "0";
	
	$(this).css("border",color);
});

//Controlla che la matricola immessa sia valida.
$("#RegistrationNumber").on('keyup',function(){
	var color;
	if (validateRegistrationNumber($(this)))
		color = "1px solid green";
	else
		color = "1px solid red";
	
	if ($(this).val() == "")
		color = "0";
	
	$(this).css("border",color);
});


//Validazione dati registrazione studente
function validateInputs(){
	$("#errorDiv").html("");
	$('#register').attr('disabled','disabled');
	
	var valid = true;
	var errorMessage = "";
	
	var email = $("#Email");
	var password = $("#Password");
	var verifyPassword = $("#VerifyPassword");
	var firstName = $("#FirstName");
	var lastName = $("#LastName");
	var telephoneNumber = $("#TelephoneNumber");
	var registrationNumber = $("#RegistrationNumber");
	
	if (email.val() == '') {
		errorMessage += "<strong>Inserire l'indirizzo email</strong><br/>"
		valid = false;
	}
	if (password.val() == '') {
		errorMessage += "<strong>Inserire la password</strong><br/>"
		valid = false;
	}
	if (verifyPassword.val() == '') {
		errorMessage += "<strong>Confermare la password</strong><br/>"
		valid = false;
	}
	if (firstName.val() == '') {
		errorMessage += "<strong>Inserire il nome</strong><br/>"
		valid = false;
	}
	if (lastName.val() == '') {
		errorMessage += "<strong>Inserire il cognome</strong><br/>"
		valid = false;
	}
	if (telephoneNumber.val() == '') {
		errorMessage += "<strong>Inserire il numero di telefono</strong><br/>"
		valid = false;
	}
	if (registrationNumber.val() == '') {
		errorMessage += "<strong>Inserire la matricola</strong><br/>"
		valid = false;
	}
	
	if (email.val() != '' && !validateEmail(email)){
		errorMessage += "<strong>Errore!</strong> Formato email non valido! (<i>Es: mariorossi@studenti.unicampania.it</i>)<br/>";
		valid = false;
	}
	if (email.val() != '' && !emailDisp) {
		errorMessage += "<strong>Errore!</strong> <i>Email già registrata!</i><br/>";	
		valid = false;
	}
	if (password.val() != '' && !validatePassword(password)){
		errorMessage += "<strong>Errore!</strong> La password non rispetta il formato! (<i>Lunghezza minima 8 caratteri, almeno un numero</i>)<br/>";
		valid = false;
	}
	if (verifyPassword.val() != '' && !validatePassword(verifyPassword)){
		errorMessage += "<strong>Errore!</strong> La password di conferma non rispetta il formato! (<i>Lunghezza minima 8 caratteri, almeno un numero</i>)<br/>";
		valid = false;
	}
	if (password.val() != '' && verifyPassword.val() != '' && !checkPasswords(password, verifyPassword)){
		errorMessage += "<strong>Errore!</strong> <i>Le due password inserite non coincidono!</i><br/>";
		valid = false;
	}	
	if (firstName.val() != '' && !validateFirstName(firstName)){
		errorMessage += "<strong>Errore!</strong> Nome non consentito! (<i>2-30 caratteri con iniziale maiuscola</i>)<br/>";
		valid = false;
	}
	if (lastName.val() != '' && !validateLastName(lastName)){
		errorMessage += "<strong>Errore!</strong> Cognome non consentito! (<i>2-30 caratteri con iniziale maiuscola</i>)<br/>";
		valid = false;
	}	
	if (telephoneNumber.val() != '' && !validateTelephoneNumber(telephoneNumber)) {
		errorMessage += "<strong>Errore!</strong> Il numero di telefono non rispetta il formato! (<i>Es: 3332211000</i>)<br/>";
		valid = false;
	}		
	if (registrationNumber.val() != '' && !validateRegistrationNumber(registrationNumber)) {
		errorMessage += "<strong>Errore!</strong> Il numero di matricola non rispetta il formato! (<i>Es: A512102493, B12345</i>)<br/>";
		valid = false;
	}
	
	if (valid) {		
		$.post("/TutoratoSmart/Registration", {
			"AcademicYear":$("#AcademicYear").val(),
			"Email":$("#Email").val(),
			"RegistrationNumber":$("#RegistrationNumber").val(),
			"Password":$("#Password").val(),
			"FirstName":$("#FirstName").val(),
			"LastName":$("#LastName").val(),
			"Sex":$("input:radio[name='Sex']:checked").val(),
			"TelephoneNumber":$("#TelephoneNumber").val(),
			"VerifyPassword":$("#VerifyPassword").val(),
			},
			function(data){	  
				if (data.result == 1) {
					$("#successDiv").fadeIn(500, function() {
						$("#successDiv").fadeOut(5000);
						setTimeout(function() {
							  window.location.href = "/TutoratoSmart/View/login.jsp";
						}, 5000);
					})
				}
				else {
					$("#failureDiv").fadeIn(500, function() {
						$('#register').prop("disabled", false);
						$("#failureDiv").fadeOut(5000)
					})
				}					 
			});		
	}
	
	else {
		$("#errorDiv").append(errorMessage);
		$("#errorDiv").show();
		setTimeout(function() {
			$("#errorDiv").hide();
			$('#register').prop("disabled", false);
		}, 4500);
	}
}

//Validazione dati registrazione tutor
function validateInputsTutor(){
	$("#errorDiv").html("");
	$('#register').attr('disabled','disabled');
	var valid = true;
	var errorMessage = "";
	
	var email = $("#Email");
	var password = $("#Password");
	var verifyPassword = $("#VerifyPassword");
	var firstName = $("#FirstName");
	var lastName = $("#LastName");
	var telephoneNumber = $("#TelephoneNumber");
	var registrationNumber = $("#RegistrationNumber");
	
	
	if (email.val() == '') {
		errorMessage += "<strong>Inserire l'indirizzo email</strong><br/>"
		valid = false;
	}
	if (password.val() == '') {
		errorMessage += "<strong>Inserire la password</strong><br/>"
		valid = false;
	}
	if (verifyPassword.val() == '') {
		errorMessage += "<strong>Confermare la password</strong><br/>"
		valid = false;
	}
	if (firstName.val() == '') {
		errorMessage += "<strong>Inserire il nome</strong><br/>"
		valid = false;
	}
	if (lastName.val() == '') {
		errorMessage += "<strong>Inserire il cognome</strong><br/>"
		valid = false;
	}
	if (telephoneNumber.val() == '') {
		errorMessage += "<strong>Inserire il numero di telefono</strong><br/>"
		valid = false;
	}
	if (registrationNumber.val() == '') {
		errorMessage += "<strong>Inserire la matricola</strong><br/>"
		valid = false;
	}	
	if (email.val() != '' && !validateEmail(email)){
		errorMessage += "<strong>Errore!</strong> Formato email non valido! (<i>Es: mariorossi@studenti.unicampania.it</i>)<br/>";
		valid = false;
	}
	if (email.val() != '' && !emailDisp) {
		errorMessage += "<strong>Errore!</strong> <i>Email già registrata!</i><br/>";	
		valid = false;
	}
	if (password.val() != '' && !validatePassword(password)){
		errorMessage += "<strong>Errore!</strong> La password non rispetta il formato! (<i>Lunghezza minima 8 caratteri, almeno un numero</i>)<br/>";
		valid = false;
	}
	if (verifyPassword.val() != '' && !validatePassword(verifyPassword)){
		errorMessage += "<strong>Errore!</strong> La password di conferma non rispetta il formato! (<i>Lunghezza minima 8 caratteri, almeno un numero</i>)<br/>";
		valid = false;
	}
	if (password.val() != '' && verifyPassword.val() != '' && !checkPasswords(password, verifyPassword)){
		errorMessage += "<strong>Errore!</strong> <i>Le due password inserite non coincidono!</i><br/>";
		valid = false;
	}	
	if (firstName.val() != '' && !validateFirstName(firstName)){
		errorMessage += "<strong>Errore!</strong> Nome non consentito! (<i>2-30 caratteri con iniziale maiuscola</i>)<br/>";
		valid = false;
	}
	if (lastName.val() != '' && !validateLastName(lastName)){
		errorMessage += "<strong>Errore!</strong> Cognome non consentito! (<i>2-30 caratteri con iniziale maiuscola</i>)<br/>";
		valid = false;
	}	
	if (telephoneNumber.val() != '' && !validateTelephoneNumber(telephoneNumber)) {
		errorMessage += "<strong>Errore!</strong> Il numero di telefono non rispetta il formato! (<i>Es: 3332211000</i>)<br/>";
		valid = false;
	}		
	if (registrationNumber.val() != '' && !validateRegistrationNumber(registrationNumber)) {
		errorMessage += "<strong>Errore!</strong> Il numero di matricola non rispetta il formato! (<i>Es: A512102493, B12345</i>)<br/>";
		valid = false;
	}
	
	if (valid) {													// Se i dati sono validi esegue il post
		$.post("/TutoratoSmart/RegistrationTutoringSupervision", {
			"Email":$("#Email").val(),
			"RegistrationNumber":$("#RegistrationNumber").val(),
			"Password":$("#Password").val(),
			"FirstName":$("#FirstName").val(),
			"LastName":$("#LastName").val(),
			"Sex":$("input:radio[name='Sex']:checked").val(),
			"TelephoneNumber":$("#TelephoneNumber").val(),
			"TotalHours":$("#TotalHours").val(),
			"StartDate":$("#StartDate").val(),
			"VerifyPassword":$("#VerifyPassword").val(),
			},
			function(data){	  
				if (data.result == 1) {
					$("#successDiv").fadeIn(500, function() {
						$("#successDiv").fadeOut(5000);
						setTimeout(function() {
							  window.location.href = "/TutoratoSmart/View/commission/tutorRegistration.jsp";
						}, 5000);
					})
				}
				else {
					$("#failureDiv").fadeIn(500, function() {
						$('#register').prop("disabled", false);
						$("#failureDiv").fadeOut(5000)
					})
				}					 
			});		
	}
	
	else {
		$("#errorDiv").append(errorMessage);
		$("#errorDiv").fadeIn(500, function() {
			$('#register').prop("disabled", false);
			$("#errorDiv").fadeOut(5000)
		})
	}
}
