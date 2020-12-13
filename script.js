const switchToggle = document.querySelector('.switch-toggle');
const body = document.body;

// fungsi untuk mengubah theme pada elemen body
function toggleTheme() {
   if (this.classList.toggle('active')) {
      body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('theme', 'dark-theme');
   } else {
      body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('theme', 'light-theme');
   }
}

// tambahkan event listener
switchToggle.addEventListener('click', toggleTheme);

// ambil theme yg telah disimpan di localStorage
const getThemeSaved = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
// cek theme sebelumnya
if (getThemeSaved !== null) {
   // set theme sebelumnya ke elemen body
   body.className = getThemeSaved;
   body.classList.contains('dark-theme') ? switchToggle.classList.add('active') : switchToggle.classList.remove('active')
}