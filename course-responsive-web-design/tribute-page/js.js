document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.getElementById("main");
  const titleElement = document.getElementById("title");
  
  // Cycle border colors on #main for a dynamic neon effect
  const borderColors = ["#ff007f", "#00ffff", "#ff0055"]; // Neon Pink, Neon Blue, Magenta Red
  let colorIndex = 0;
  setInterval(() => {
    mainElement.style.borderColor = borderColors[colorIndex];
    colorIndex = (colorIndex + 1) % borderColors.length;
  }, 1000);
  
  // Dynamic text-shadow effect on the title based on mouse movement
  mainElement.addEventListener("mousemove", (event) => {
    const rect = mainElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    // Create a subtle movement effect on the text shadow
    titleElement.style.textShadow = `${offsetX / 10}px ${offsetY / 10}px 10px #00ffff`;
  });
});

