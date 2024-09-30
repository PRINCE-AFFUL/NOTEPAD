document.getElementById('image-select').addEventListener('change', function() {
    var selectedValue = this.value;
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '<img src="' + selectedValue + '.jpg">';
  });
  
//progress bar
  const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;
  const totalHeight = document.body.offsetHeight - window.innerHeight;
  const progress = (scrollDistance / totalHeight) * 100;
  progressBar.style.width = `${progress}%`;
});

//drop down delay code
let timeoutId;

document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    toggle.nextElementSibling.style.display = 'block';
  });

  toggle.addEventListener('mouseout', (event) => {
    timeoutId = setTimeout(() => {
      toggle.nextElementSibling.style.display = 'none';
    }, 500); // adjust the delay time as needed
  });

  toggle.nextElementSibling.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
  });

  toggle.nextElementSibling.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
      toggle.nextElementSibling.style.display = 'none';
    }, 500); // adjust the delay time as needed
  });
});



//SLIDER
const images = document.querySelectorAll('.image-slider img');

setInterval(() => {
  images.forEach((image) => {
    if (image.classList.contains('active')) {
      image.classList.remove('active');
      image.nextElementSibling.classList.add('active');
    }
  });
}, 5000); /* adjust the interval duration as needed */


