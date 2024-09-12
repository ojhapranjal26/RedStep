document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    if (name && email && password) {
      alert("Registration successful!");
      // Redirect to a new page after successful registration
      window.location.href = "index.html";
    } else {
      alert("Please fill out all fields");
    }
  });

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  if (email && password) {
    alert("Login successful!");
    // Redirect to a new page after successful login
    window.location.href = "index.html";
  } else {
    alert("Please fill out all fields");
  }
});
