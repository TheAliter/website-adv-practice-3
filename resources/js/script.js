function checkEnter (event) {
  if (event.key == 'Enter') {event.preventDefault(); document.getElementsByName('loginBtn')[0].click();}
}

function hider () {
  console.log('tester');
  if (document.getElementsByName('warning')[0].className != 'hidden') {document.getElementsByName('warning')[0].className += 'hidden';}
}

function login (form) {
      if (form.username.value == "turtle" && form.password.value == 'dragon') {
        alert('Welcome!');
      ;}
      else {
        document.getElementsByName('warning')[0].classList.remove('hidden');
        ;}
    form.username.value = "";
    form.password.value = "";
    form.username.blur();
    form.password.blur();
}
