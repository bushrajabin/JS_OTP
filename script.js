var generated_OTP;

function displayElement(elementId, displayStyle) {
  const element = document.getElementById(elementId);
  element.style.display = displayStyle;
}

displayElement("welcome", "none");

const test = document.getElementById("welcome");

function generateOTP() {
  const phone = document.querySelector("#number");
  const phoneNumber = phone.value;
  if (phoneNumber.length === 10) {
    displayElement("loader", "flex");

    const OTP = Math.floor(1000 + Math.random() * 9000);
    generated_OTP = OTP;

    setTimeout(() => {
      displayElement("loader", "none");
      displayElement("form", "none");
      displayElement("verify", "flex");

      if (generated_OTP) {
        displayElement("show", "flex");
        document.getElementById(
          "show"
        ).innerText = `Otp is 😊 - ${generated_OTP}`;
      }
    }, 3000);
  } else {
    alert("Invalid phone! 😔");
  }
}

function verifyOTP() {
  const enteredOtp = document.getElementById("enteredOTP").value;

  if (generated_OTP == enteredOtp) {
    displayElement("loader", "flex");
    setTimeout(() => {
      displayElement("loader", "none");
      displayElement("verify", "none");
      displayElement("show", "none");
      displayElement("welcome", "flex");
      displayElement("image", "none");

      alert("OTP verified ! 😊");
    }, 3000);
  } else {
    alert("Invalid OTP !! 😔");
  }
}
