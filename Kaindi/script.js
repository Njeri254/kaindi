// hamburger menu toggle

  document.getElementById('mobileMenuButton').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  function toggleDropdown(id) {
    document.getElementById(id).classList.toggle('hidden');
  }


  // slider

  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const slider = document.getElementById('slider');
  let slideIndex = 0;

  const slides = slider.children;
  const totalSlides = slides.length;

  function goToSlide(index) {
    slideIndex = index;
    slider.style.transform = `translateX(-${100 * slideIndex}%)`;
  }

  prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex === 0) ? totalSlides - 1 : slideIndex - 1;
    goToSlide(slideIndex);
  });

  nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex === totalSlides - 1) ? 0 : slideIndex + 1;
    goToSlide(slideIndex);
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    slideIndex = (slideIndex === totalSlides - 1) ? 0 : slideIndex + 1;
    goToSlide(slideIndex);
  }, 5000);