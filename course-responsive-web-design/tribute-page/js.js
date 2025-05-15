document.addEventListener("DOMContentLoaded", function () {
  const text = "(I'M A PLACEHOLDER!)";
  const typingElement = document.getElementById("typing");
  let idx = 0;
  const delay = 120; // delay in milliseconds

  function typeEffect() {
    if (idx < text.length) {
      typingElement.textContent += text.charAt(idx);
      idx++;
      setTimeout(typeEffect, delay);
    }
  }
  typeEffect();
});
