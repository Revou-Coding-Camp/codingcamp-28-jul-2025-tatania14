// Function to get user's name and display it
function setWelcomeMessage() {
    const userName = prompt("Halo! Siapa nama Anda?"); // Munculkan popup untuk nama
    const welcomeElement = document.getElementById('welcome-message');

    if (userName && userName.trim() !== '') {
        welcomeElement.textContent = `Hi ${userName}, Welcome To Website`;
    } else {
        welcomeElement.textContent = `Hi Guest, Welcome To Website`; // Default jika user tidak mengisi nama
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', setWelcomeMessage);

// Handle klik navbar: aktifkan style & smooth scroll
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // reset semua
    navLinks.forEach(l => l.classList.remove('active'));
    // aktifkan yang diklik
    e.currentTarget.classList.add('active');
    // scroll smooth
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle submit form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('dob-error').textContent = '';
    document.getElementById('gender-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    let isValid = true; // Flag for validation status

    const name = this.name.value.trim();
    const dob = this.dob.value;
    const gender = this.querySelector('input[name="gender"]:checked'); // Dapatkan radio yang terpilih
    const message = this.message.value.trim();
    const now = new Date().toLocaleString();

    if (!name) {
        document.getElementById('name-error').textContent = 'Nama tidak boleh kosong.';
        isValid = false;
    }
    if (!dob) {
        document.getElementById('dob-error').textContent = 'Tanggal Lahir tidak boleh kosong.';
        isValid = false;
    } else {
        const selectedDate = new Date(dob);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time for comparison

        if (selectedDate > today) {
            document.getElementById('dob-error').textContent = 'Tanggal lahir tidak boleh di masa depan.';
            isValid = false;
        }
    }
    if (!gender) { // Check if a gender radio button is selected
        document.getElementById('gender-error').textContent = 'Jenis Kelamin harus dipilih.';
        isValid = false;
    }
    if (!message) {
        document.getElementById('message-error').textContent = 'Pesan tidak boleh kosong.';
        isValid = false;
    }

    if (!isValid) {
        // Jika ada validasi yang gagal, hentikan proses submit
        document.getElementById('output').textContent = 'Silakan lengkapi semua field yang wajib diisi.';
        return;
    }

    // If all validations pass, proceed to display output
    const outputMessage = `
Current time : ${now}
Name         : ${name}
Date of Birth: ${dob}
Gender       : ${gender.value}
Message      : ${message}
    `;
    document.getElementById('output').textContent = outputMessage;
    this.reset(); // Reset form after successful submission
});