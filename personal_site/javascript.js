document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Perform form validation
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
  
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Form submitted successfully
    alert("Form submitted!");
  
    // Perform further processing or submit the form to a server
  });
  