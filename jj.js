document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log('Form submitted!');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Here you can send the form data to a server if needed

    alert('Thank you for your message!');
});

document.getElementById('feedbackButton').addEventListener('click', function() {
    const feedbackSection = document.getElementById('feedbackSection');
    feedbackSection.style.display = 'block';
    alert('Feedback button clicked!');
});
