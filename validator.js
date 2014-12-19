var value_email;

function check(){
	var email = document.getElementById('e_mail');
	value_email = email.value;
	var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
	var res = reg.exec(value_email);
	wh_col = setInterval(white_color, 100)
	if (value_email == ''){
		e_mail.style.backgroudColor='white';
	}
	else{
		if (res != null){
			e_mail.style.backgroundColor='green';
		}
		else{
			e_mail.style.backgroundColor='red';
		}
	}
}

function white_color(){ 
	var email = document.getElementById('e_mail');
	value_email_later = email.value
	if (value_email_later != value_email){
		e_mail.style.backgroundColor='white';
		clearInterval(wh_col);
	}
}