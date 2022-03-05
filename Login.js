var CORRECT_USER = "qwe";
var CORRECT_PASS = "rty";


var inputUsername = documet.getElementById('user-name');
var inputPassword = documet.getElementById('password');

var formLogin = documet.getElementsByClassName('form-login');
if(formLogin.attachEvent){
	formLogin.attachEvent('submit', onFormSubmit);
}else{
	formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
	alert("ok");
	var username = inputUsername.value;
	var password = inputPassword.value;

	if(username == CORRECT_USER && passwword == CORRECT_PASS){
		documet.getElementById('tb-user').innerHTML="";
		documet.getElementById('tb-pass').innerHTML="";
	}else{
		if(username != CORRECT_USER){
			documet.getElementById('tb-user').innerHTML="Username is not correct";
		} else{
			documet.getElementById('tb-user').innerHTML="";
		}
		if (password != CORRECT_PASS) {
			documet.getElementById('tb-pass').innerHTML="Password is not correct"
		}else{
			documet.getElementById('tb-pass').innerHTML='';
		}

	}
}