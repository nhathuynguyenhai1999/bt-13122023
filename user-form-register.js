function handleLogin(){
  let userName = document.getElementById("dangnhap").value
  let mail = document.getElementById("email").value
  let pass = document.getElementById("password").value
  if (userName == 'Admin' || mail == 'admin@gmail.com') {
      if (pass == 'TheMaster') {
      alert('Welcome!');
    } else if (pass == null) {
      alert('Canceled.');
    } else {
      alert('Wrong password');
    }
  } else if (userName == null) {
    alert('Canceled');
  } else {
    alert("I don't know you");
  }
}
