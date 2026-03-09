 const profilePic = document.querySelector('.profile-pic');

profilePic.addEventListener('click', function() {
  alert('سلام آرین! خوش آمدی به صفحه پروفایل خودت 😎');
});
const showBtn = document.getElementById('show-info');
const extraInfo = document.getElementById('extra-info');

showBtn.addEventListener('click', function() {
  if(extraInfo.style.display === 'none') {
    extraInfo.style.display = 'block';
    showBtn.textContent = 'مخفی کردن اطلاعات';
  } else {
    extraInfo.style.display = 'none';
    showBtn.textContent = 'نمایش اطلاعات بیشتر';
  }
});
const darkBtn = document.getElementById('darkModeToggle');

darkBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});