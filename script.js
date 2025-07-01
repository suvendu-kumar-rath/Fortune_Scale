document.addEventListener('DOMContentLoaded', function() {
    // Product Slider functionality
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const productsContainer = document.querySelector('.products-container');
    const productCards = document.querySelectorAll('.product-card');
    
    let productCardWidth = productCards[0].offsetWidth + 20; // 20px gap
    let visibleProductCards = Math.floor(document.querySelector('.product-slider').offsetWidth / productCardWidth);
    let currentProductPosition = 0;
    
    // Handle Previous button click
    prevBtn.addEventListener('click', function() {
        currentProductPosition -= visibleProductCards;
        if (currentProductPosition < 0) currentProductPosition = 0;
        updateProductSliderPosition();
    });
    
    // Handle Next button click
    nextBtn.addEventListener('click', function() {
        currentProductPosition += visibleProductCards;
        const maxPosition = Math.max(0, productCards.length - visibleProductCards);
        if (currentProductPosition > maxPosition) currentProductPosition = maxPosition;
        updateProductSliderPosition();
    });
    
    // Update the slider position
    function updateProductSliderPosition() {
        // Clamp currentPosition so the last set of cards is always fully visible
        const maxPosition = Math.max(0, productCards.length - visibleProductCards);
        if (currentProductPosition > maxPosition) currentProductPosition = maxPosition;
        if (currentProductPosition < 0) currentProductPosition = 0;
        productsContainer.style.transform = `translateX(-${currentProductPosition * productCardWidth}px)`;
    }
    
    // Add smooth transition to products container
    productsContainer.style.transition = 'transform 0.3s ease';
    
    // Update visible cards on window resize
    window.addEventListener('resize', function() {
        productCardWidth = productCards[0].offsetWidth + 20;
        visibleProductCards = Math.floor(document.querySelector('.product-slider').offsetWidth / productCardWidth);
        updateProductSliderPosition();
    });
    
    // Initial position for product slider
    updateProductSliderPosition();

    // Client Slider functionality
    const clientCards = document.querySelector('.client-cards');
    
    // Generate additional client cards
    const existingClientCards = document.querySelectorAll('.client-card').length;
    const totalClientCards = 60;
    
    // Create array of client data
    const clientData = [
        { img: 'images/icon.jpeg', name: 'NALCO' },
        { img: 'images/Hindustan_Aeronautics_Limited_Logo.png', name: 'HAL' },
        { img: 'images/JSW_Group_logo.svg.png', name: 'JSW' },
        { img: 'images/barandbench-2025-04-14-499004lv-IMFA.jpg.avif', name: 'IMFA' }
    ];

    // Generate remaining cards
    for (let i = existingClientCards; i < totalClientCards; i++) {
        const card = document.createElement('div');
        card.className = 'client-card';
        const clientIndex = i % clientData.length;
        card.innerHTML = `
            <img src="${clientData[clientIndex].img}" alt="${clientData[clientIndex].name} Logo">
            <p>${clientData[clientIndex].name}</p>
        `;
        clientCards.appendChild(card);
    }

    // Clone the first set of cards and append them to create infinite loop effect
    const firstSet = clientCards.innerHTML;
    clientCards.innerHTML += firstSet;

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

    // Hero Slider Functionality
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        // Remove active class from all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Show the selected slide and activate its indicator
        slides[index].style.display = 'block';
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    // Function to move to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Set up automatic sliding
    setInterval(nextSlide, 5000);

    // Add click handlers to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Show first slide initially
    showSlide(0);
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