function validateForm(e) {
  e.preventDefault()
  let allInputs = document.querySelectorAll(".input-field div input");
  let allImgs = document.querySelectorAll(".input-field div img");

  let sources = document.forms["sign-up-form"]["sources"];
  let sources_image = document.getElementById('sources-image');

  let allmsg = document.querySelectorAll(".error-message");

  if (sources.value == "") {
    sources_image.style.visibility = 'visible'
    sources.style.borderColor = 'red';
  }

  allInputs.forEach((element, index) => {
    if (element.value === "" || element.value == null) {
      allImgs[index].style.visibility = 'visible';
      element.style.borderColor = 'red';
      allmsg[index].style.visibility = 'visible';
      allmsg[index].textContent = "Empty Field";
    } else if (element.value[0] === '-' || element.value[0] === '_' || element.value[0] === '+') {
      allImgs[index].style.visibility = 'visible';
      allmsg[index].style.visibility = 'visible';
      allmsg[index].textContent = `Cannot start with '-', '_', '+'`;
    } else if (element.value.length < 5) {
      allImgs[index].style.visibility = 'visible';
      allmsg[index].style.visibility = 'visible';
      allmsg[index].textContent = 'Minimum length 5'
    } else {
      for (let i = 0; i < element.value.length; i++) {
        if (element.value[i].charCodeAt(0) >= 32 && element.value[i].charCodeAt(0) <= 47 || element.value[i].charCodeAt(0) >= 58 && element.value[i].charCodeAt(0) <= 64 || element.value[i].charCodeAt(0) >= 91 && element.value[i].charCodeAt(0) <= 96 || element.value[i].charCodeAt(0) >= 123 && element.value[i].charCodeAt(0) <= 126) {
          allImgs[index].style.visibility = 'visible';
          allmsg[index].style.visibility = 'visible';
          allmsg[index].textContent = "No special characters";
          break;
        }
      }
    }
  })
}

function clearForm(e) {
  e.preventDefault();
  let allmsg = document.querySelectorAll(".error-message");
  document.querySelectorAll(".input-field div input").forEach((item) => {
    item.value = "";
  });
  document.querySelectorAll(".input-field div img").forEach((item, index) => {
    item.style.visibility = 'hidden';
    allmsg[index].textContent = "";
    allmsg[index].style.visibility = "hidden";
  });
}