document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        alert('Message sent successfully!');
        // Clear form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});