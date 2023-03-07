const markerInput = document.querySelector(`form.login-form`);

function fnInputValue(event) {
    event.preventDefault();
    const {
      elements: {email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
        alert('All fields must be filled');
        return;
    }
      console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
markerInput.addEventListener(`submit`, fnInputValue);
