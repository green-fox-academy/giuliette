function validate() {
  let form = document.forms.MRForm;

  let isValid = form.name.value.length === 10;
  if ( !isValid ) {
    alert('Invalid name, its length must be 3.');
  }

  return isValid;
}