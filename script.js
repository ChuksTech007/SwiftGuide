const form = document.getElementById('contactForm');
        const messageField = document.getElementById('message');
        const wordCount = document.getElementById('wordCount');
        const formError = document.getElementById('formError');

        messageField.addEventListener('input', () => {
            const words = messageField.value.trim().split(/\s+/).filter(word => word.length > 0);
            wordCount.textContent = `${words.length} / 300 words`;
            if (words.length > 300) {
                wordCount.style.color = 'red';
            } else {
                wordCount.style.color = 'black';
            }
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Validate form fields
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const countryCode = document.getElementById('countryCode').value;
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            const words = message.split(/\s+/).filter(word => word.length > 0);

            if (fullName === "" || email === "" || phone === "" || message === "") {
                formError.textContent = "All fields are required.";
                formError.style.display = "block";
                return;
            }

            if (words.length > 300) {
                formError.textContent = "Your message exceeds the maximum word limit of 300.";
                formError.style.display = "block";
                return;
            }

            formError.style.display = "none";
            alert('Message sent successfully!\nPhone Number: ' + countryCode + ' ' + phone);
            
            // Here, you'd typically send the form data to your backend
            // Example: fetch('/submitForm', { method: 'POST', body: formData })
        });