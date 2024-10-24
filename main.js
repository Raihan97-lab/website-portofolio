// Membuat fungsi untuk mengganti warna latar belakang header
function changeHeaderBackground() {
    const header = document.querySelector('header');
    header.style.backgroundImage = 'linear-gradient(to bottom, #3498db, #2ecc71)';
  }
  
  // Membuat fungsi untuk menampilkan teks pada elemen SAKTI
  function showSaktiText() {
    const saktiElements = document.querySelectorAll('#container div');
    saktiElements.forEach((element) => {
      element.addEventListener('mouseover', () => {
        element.querySelector('p').style.display = 'block';
      });
      element.addEventListener('mouseout', () => {
        element.querySelector('p').style.display = 'none';
      });
    });
  }
  
  // Membuat fungsi untuk mengganti warna teks pada elemen menu
  function changeMenuTextColor() {
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('mouseover', () => {
        menuItem.style.color = '#2ecc71';
      });
      menuItem.addEventListener('mouseout', () => {
        menuItem.style.color = '#fff';
      });
    });
  }
  
  // Memanggil fungsi-fungsi di atas
  changeHeaderBackground();
  showSaktiText();
  changeMenuTextColor();