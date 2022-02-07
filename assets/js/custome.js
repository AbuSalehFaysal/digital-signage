function sendMail() {
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var organization = document.getElementById("organization").value;
  if (
    first_name == null ||
    first_name == "" ||
    last_name == null ||
    last_name == "" ||
    email == null ||
    email == "" ||
    phone == null ||
    phone == "" ||
    organization == null ||
    organization == ""
  ) {
    return false;
  } else {
    window.location.replace(
      `mailto:info@aflax.digital?body=Name: ${first_name} ${last_name}, Email: ${email}, Phone: ${phone}, Organization: ${organization}&subject=${first_name} ${last_name} wants to contact you`
    );
  }
}
