var Button = document.getElementById('Mode');
if (Button) {
    Button.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Mode Terang' : 'Mode Gelap';
    });
}

var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        if (name === '' || email === '' || message === '') {
            alert('Wajib mengisi semua field');
        } else {
            document.getElementById('formMessage').textContent = 'Data berhasil dikirim';
            this.reset(); 
        }
    });
}

var accordionHeaders = document.querySelectorAll('.accordion-header');
for (var i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}
