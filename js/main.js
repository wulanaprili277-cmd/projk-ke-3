document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.addEventListener('click', () => {
      alert('Selamat Datang Dan Menikmati Keindahan Bungan Di Flower Garden!');
    });
  }
});
