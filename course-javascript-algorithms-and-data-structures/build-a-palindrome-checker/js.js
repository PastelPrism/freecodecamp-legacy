// Typewriter 
document.addEventListener('DOMContentLoaded', function () {
  const text = "I'M A PLACEHOLDER!"; 
  const typingElement = document.getElementById("typing");
  let index = 0;
  const speed = 100; 

  function typeWriter() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});

// Cloud 
document.addEventListener("DOMContentLoaded", function() {
  const cloud = document.getElementById("disclaimerCloud");
  const bumpCount = 22;

  for (let i = 0; i < bumpCount; i++) {
    const bump = document.createElement("div");
    bump.className = "disclaimer-cloud-bump";
    const size = Math.floor(Math.random() * 50) + 40;
    bump.style.width = size + "px";
    bump.style.height = size + "px";
    bump.style.top = (Math.random() * 120 - 40) + "px";   
    bump.style.left = (Math.random() * 120 - 20) + "%";    
    cloud.appendChild(bump);
  }
});