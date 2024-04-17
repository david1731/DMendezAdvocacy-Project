function initializeCarousel(carouselContainer) {
  let index = 0; // Current active item index
  let items = carouselContainer.querySelectorAll('.carousel-item');
  let indicators = carouselContainer.querySelectorAll('.carousel-indicator');

  function updateActiveItem(newIndex) {
    // Remove active class from current item and indicator
    if (items[index]) items[index].classList.remove('active');
    if (indicators[index]) indicators[index].classList.remove('active');

    // Update index to the new index
    index = newIndex;

    // Ensure index is within bounds
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;

    // Add active class to new item and indicator
    if (items[index]) items[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
  }

  function createIndicators() {
    let container = carouselContainer.querySelector('.carousel-indicators');
    container.innerHTML = ''; // Clear existing indicators if any, to avoid duplication
    items.forEach((item, idx) => {
      let indicator = document.createElement('div');
      indicator.classList.add('carousel-indicator');
      if (idx === 0) indicator.classList.add('active');
      container.appendChild(indicator);
      indicator.addEventListener('click', () => {
        updateActiveItem(idx); // Update to the clicked slide
      });
    });
    indicators = carouselContainer.querySelectorAll('.carousel-indicator'); // Refresh indicators array
  }

  createIndicators(); // Create indicators on initialization

  // Add click event listener to carousel itself for advancing to next item
  carouselContainer.addEventListener('click', (e) => {
    // Prevent clicks on indicators from triggering carousel advancement
    if (!e.target.classList.contains('carousel-indicator')) {
      let nextIndex = (index + 1) % items.length; // Calculate next index, wrap around
      updateActiveItem(nextIndex);
    }
  });
}

// Initialize all carousels on the page
document.querySelectorAll('.carousel-container').forEach(carouselContainer => {
  initializeCarousel(carouselContainer);
});
