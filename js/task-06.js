const marker = document.querySelector('#validation-input');
 const classValue = {
  valid: 'valid',
  invalid: 'invalid',
 };

 const border = (({target: {value}}) => {
    if (value.length === Number(marker.dataset.length)) {
      marker.classList.add(classValue.valid);
      if (marker.classList.contains(classValue.invalid)) marker.classList.remove(classValue.invalid);
      return;
     }else{
     marker.classList.add(classValue.invalid);
     if (marker.classList.contains(classValue.valid)) marker.classList.remove(classValue.valid);
    }});

    marker.addEventListener("blur", border);