document.addEventListener('DOMContentLoaded', function() {

    const elementsToAnimate = document.querySelectorAll('.card-body'); 
    
    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.15 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow');
          observer.unobserve(element);
        }
      });
    }, observerOptions);
  
    elementsToAnimate.forEach(element => {
    observer.observe(element);
    });
  
  });