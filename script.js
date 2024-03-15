$(document).ready(function() {
    // Login form submission
    $("#loginForm").submit(function(event) {
      event.preventDefault(); // Prevent default form submission
      // You can add your authentication logic here
      var username = $("#username").val();
      var password = $("#password").val();
  
      // Dummy authentication - check if username and password are not empty
      if (username.trim() !== "" && password.trim() !== "") {
        // Redirect or perform other actions upon successful login
        alert("Login successful! Redirecting to dashboard...");
        // Redirect to dashboard page
        window.location.href = "dashboard.html";
      } else {
        // Show error message if username or password is empty
        alert("Please enter username and password.");
      }
    });
  });
  