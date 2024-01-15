const isValid = (email) => {
  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const label = document.querySelector(".label");
const success_email = document.querySelector(".success-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isValid(emailInput.value)) {
      window.location.href = "http://127.0.0.1:5500/success.html?";
      success_email.innerHTML = emailInput.value;
  } else {
    const p = document.createElement("p");
    p.innerHTML = "Invalid email";

    label.append(p);

    emailInput.classList.remove("email"); // Assuming there was a typo here, and it should be 'emailInput' instead of just 'email'
    emailInput.classList.toggle("invalid-email");
  }
});
