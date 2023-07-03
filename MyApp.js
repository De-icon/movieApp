function enableHorizontalScroll() {
    const scrollContainers = document.querySelectorAll('.scroll-container');
  
    scrollContainers.forEach(scrollContainer => {
      let isScrolling = false;
      let startX;
      let scrollLeft;
  
      scrollContainer.addEventListener('mousedown', e => {
        isScrolling = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
      });
  
      scrollContainer.addEventListener('mouseleave', () => {
        isScrolling = false;
      });
  
      scrollContainer.addEventListener('mouseup', () => {
        isScrolling = false;
      });
  
      scrollContainer.addEventListener('mousemove', e => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scroll speed as needed
        scrollContainer.scrollLeft = scrollLeft - walk;
      });
    });
  }
  
  enableHorizontalScroll();
  