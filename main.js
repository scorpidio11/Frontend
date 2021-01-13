const toggleBtn = document.querySelector('.mobilenav');
const menu = document.querySelector('.mobile-menu');

toggleBtn.addEventListener('click', () =>
{
     menu.classList.toggle('active');
  
});

