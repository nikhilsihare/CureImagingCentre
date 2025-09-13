document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      document.getElementById("form-status").innerText = "Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById("form-status").innerText = "Failed to send message. Try again.";
      console.error(error);
    });
});
