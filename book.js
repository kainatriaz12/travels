
// Function to toggle the order form visibility when "Order Now" button is clicked
function toggleOrderForm() {
    var orderForm = document.getElementById("bookingForm");
    orderForm.style.display = (orderForm.style.display === "none") ? "block" : "none";
  }
  
  // Function to show confirmation message in the popup
  function showConfirmation() {
    var customerName = document.getElementById("name").value;
    var confirmationMessage = "Your Booking has been done. Thank You " + customerName + "!";
  
    // Display the confirmation message in the popup
    var popup = document.getElementById("popup");
    var confirmationMessageElement = document.getElementById("confirmationMessage");
    confirmationMessageElement.textContent = confirmationMessage;
    popup.style.display = "block";
  
    // Prevent the default form submission
    return false;
  }