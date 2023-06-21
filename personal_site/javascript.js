/*  */
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Perform form validation
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
  
    /* if no valid data is entered, display "please fill in all required fields" for both name and email */
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    // alert dialogue box that form is submitted successfully
    alert("Form submitted!");
  });
  