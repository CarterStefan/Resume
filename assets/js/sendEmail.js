function sendMail(contactForm) {
    emailjs.send("gmail", "stefan_contact", {
        "fullname": contactForm.fullname.value,
        "femailaddress": contactForm.emailaddress.value,
        "projectsummary": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("Thanks for the email, we will be in touch shortly", response);
        },
        function(error) {
            alert("FAILED", error);
        }
    );
    
};