document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle-password");

  toggles.forEach(toggle => {
    const targetId = toggle.getAttribute("data-target");
    const passwordInput = document.getElementById(targetId);
    const icon = toggle.querySelector("i");

    toggle.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";

      icon.classList.toggle("bx-show");
      icon.classList.toggle("bx-hide");
    });
  });
});


// Login validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form reload

    const username = form.username.value.trim();
    const password = form.password.value;

    // Sample credentials (replace with backend later)
    const validUsers = [
      { username: "student001", password: "pass123" },
      { username: "augustine", password: "frontend" }
    ];

    const isValid = validUsers.some(
      user => user.username === username && user.password === password
    );

    if (isValid) {
      // Store user info in localStorage if needed
      localStorage.setItem("loggedInUser", username);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});



// hamburger menu

  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

