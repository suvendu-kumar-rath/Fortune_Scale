document.addEventListener('DOMContentLoaded', function() {
    // Product Slider functionality
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const productsContainer = document.querySelector('.products-container');
    const productCards = document.querySelectorAll('.product-card');
    
    let cardWidth = productCards[0].offsetWidth + 20; // 20px gap
    let visibleCards = Math.floor(document.querySelector('.product-slider').offsetWidth / cardWidth);
    let currentPosition = 0;
    
    // Handle Previous button click
    prevBtn.addEventListener('click', function() {
        currentPosition -= visibleCards;
        if (currentPosition < 0) currentPosition = 0;
        updateSliderPosition();
    });
    
    // Handle Next button click
    nextBtn.addEventListener('click', function() {
        currentPosition += visibleCards;
        const maxPosition = Math.max(0, productCards.length - visibleCards);
        if (currentPosition > maxPosition) currentPosition = maxPosition;
        updateSliderPosition();
    });
    
    // Update the slider position
    function updateSliderPosition() {
        // Clamp currentPosition so the last set of cards is always fully visible
        const maxPosition = Math.max(0, productCards.length - visibleCards);
        if (currentPosition > maxPosition) currentPosition = maxPosition;
        if (currentPosition < 0) currentPosition = 0;
        productsContainer.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
    
    // Add smooth transition to products container
    productsContainer.style.transition = 'transform 0.3s ease';
    
    // Update visible cards on window resize
    window.addEventListener('resize', function() {
        cardWidth = productCards[0].offsetWidth + 20;
        visibleCards = Math.floor(document.querySelector('.product-slider').offsetWidth / cardWidth);
        updateSliderPosition();
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
    
    // Initial position
    updateSliderPosition();
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