function myFunct() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
 const scriptURL = 'https://script.google.com/macros/s/AKfycbwuokfBAreCyNsFF46eqW3c4EXIF8yEqnTSwk-020Sv5yWYZ-NjwHinidGtI5MdHW5T/exec'
  const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault();

  // Check if all required fields are filled
  const requiredFields = form.querySelectorAll('[required]');
  let allFieldsFilled = true;

  for (const field of requiredFields) {
    if (!field.value.trim()) {
      allFieldsFilled = false;
      break;
    }
  }

  if (allFieldsFilled) {
    const confirmed = confirm('Are you sure you want to submit the form?');

    if (confirmed) {
      loadingOverlay.style.display = 'flex';
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          console.log('Success!', response);
          loadingOverlay.style.display = 'none';
          alert('Form submitted successfully!');
          form.reset();
        })
        .catch(error => {
          console.error('Error!', error.message);
          loadingOverlay.style.display = 'none';
        });
    }
  } else {
    alert('Please fill in all required fields before submitting.');
  }
});

function myload(){
	alert("DEVELOPED BY VIGNESHWARAN");
}

function confirmSubmit(){
  return confirm("Are you sure you want to submit the form?");
}
