// // Login authentication
// document.getElementById("loginForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Dummy data
//   const dummyEmail = "user@example.com";
//   const dummyPassword = "password123";

//   if (email === dummyEmail && password === dummyPassword) {
//     // Redirect to index.html
//     window.location.href = "index.html";
//   } else {
//     // Show an error message
//     alert("Invalid email or password.");
//   }
// });

// // Password toggle functionality
// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password");

// togglePassword.addEventListener("click", function () {
//   // Toggle the type attribute
//   const type = password.getAttribute("type") === "password" ? "text" : "password";
//   password.setAttribute("type", type);

//   // Toggle the icon
//   this.classList.toggle("bi-eye");
//   this.classList.toggle("bi-eye-slash");
// });

// // Summernote initialization
// $(document).ready(function() {
//   $('#summernote').summernote({
//     height: 300, // Set the height of the editor
//     placeholder: 'Start typing here...',
//     toolbar: [
//       ['style', ['style']],
//       ['font', ['bold', 'italic', 'underline', 'clear']],
//       ['fontname', ['fontname']],
//       ['color', ['color']],
//       ['para', ['ul', 'ol', 'paragraph']],
//       ['table', ['table']],
//       ['insert', ['link', 'picture', 'video']],
//       ['view', ['fullscreen', 'codeview', 'help']]
//     ]
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    // Login authentication
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Dummy data
      const dummyEmail = "user@example.com";
      const dummyPassword = "password123";

      if (email === dummyEmail && password === dummyPassword) {
        // Redirect to index.html
        window.location.href = "index.html";
      } else {
        // Show an error message
        alert("Invalid email or password.");
      }
    });

    // Password toggle functionality
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");

    if (togglePassword && password) {
      togglePassword.addEventListener("click", function () {
        // Toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);

        // Toggle the icon
        this.classList.toggle("bi-eye");
        this.classList.toggle("bi-eye-slash");
      });
    }
  }
  
  // Summernote initialization
  $('#summernote').summernote({
    height: 300, // Set the height of the editor
    placeholder: 'Start typing here...',
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  });
});
