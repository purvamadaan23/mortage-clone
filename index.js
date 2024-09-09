document.addEventListener("DOMContentLoaded", () => {
    // Trigger animation to full-screen image after 3 seconds
    setTimeout(() => {
      const loginContainer = document.querySelector('.login-container');
      loginContainer.classList.add('hidden'); // Hide login form
  
      const houseImageContainer = document.querySelector('.house-image-container');
      houseImageContainer.style.transition = "all 1s ease-in-out";
      houseImageContainer.style.flex = "1";
    }, 3000); // Wait 3 seconds before the animation
  });