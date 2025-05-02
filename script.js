document.addEventListener('DOMContentLoaded', function() {
    // Product Slider functionality
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const productsContainer = document.querySelector('.products-container');
    const productCards = document.querySelectorAll('.product-card');
    
    // Calculate the width of a single product card plus its margin
    const cardWidth = productCards[0].offsetWidth + 20; // 20px is the gap between cards
    
    // Number of cards visible at once (based on container width)
    const visibleCards = Math.floor(productsContainer.offsetWidth / cardWidth);
    
    // Current position (index) of the slider
    let currentPosition = 0;
    
    // Handle Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        }
    });
    
    // Handle Next button click
    nextBtn.addEventListener('click', function() {
        if (currentPosition < productCards.length - visibleCards) {
            currentPosition++;
            updateSliderPosition();
        }
    });
    
    // Update the slider position
    function updateSliderPosition() {
        productsContainer.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
    
    // Add smooth transition to products container
    productsContainer.style.transition = 'transform 0.3s ease';
    
    // Update visible cards on window resize
    window.addEventListener('resize', function() {
        const newVisibleCards = Math.floor(productsContainer.offsetWidth / cardWidth);
        if (newVisibleCards !== visibleCards && currentPosition > productCards.length - newVisibleCards) {
            currentPosition = Math.max(0, productCards.length - newVisibleCards);
            updateSliderPosition();
        }
    });
    
    // Mobile menu toggle (for responsive design)
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const headerContainer = document.querySelector('.header-container');
    
    headerContainer.insertBefore(menuToggle, nav);
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Add event listeners to the pagination buttons
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, this would handle pagination
            // This is just a placeholder for demonstration
            alert('Pagination clicked: ' + this.textContent);
        });
    });
});

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
}); 