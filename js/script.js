// 1. Isi nama user di hero section pakai prompt() saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  const name = prompt('Please enter your name:') || 'Guest';
  document.getElementById('user-name').textContent = name;
});

// 2. Handle submit form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const dob = this.dob.value;
  const gender = this.gender.value;
  const message = this.message.value.trim();
  const now = new Date().toLocaleString();

  // Validasi sederhana
  if (!name || !dob || !gender || !message) {
    alert('Semua field harus diisi!');
    return;
  }

  // Tampilkan hasil
  const output = `
Current time : ${now}
Name         : ${name}
Date of Birth: ${dob}
Gender       : ${gender}
Message      : ${message}
  `;
  document.getElementById('output').textContent = output;

  // Reset form (opsional)
  this.reset();
});
