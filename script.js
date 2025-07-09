                                                                                                                                                                     document.addEventListener('DOMContentLoaded', function() {
    // Typing Effect for Main Section
    const typingElement = document.getElementById('typing');
    if (typingElement) {
        const professions = [
            "APP Developer",
            "UI UX Designer",
            "Web Developer",
            "Logo Designer",

        ];

        let currentProfession = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = professions[currentProfession];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1500;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentProfession = (currentProfession + 1) % professions.length;
                typingSpeed = 500;
            }
            
            setTimeout(type, typingSpeed);
        }

        setTimeout(type, 1000);
    }

    // Typing Effect for About Section
    const typingAboutElement = document.getElementById('typing-about');
    if (typingAboutElement) {
        const aboutProfessions = [
            "APP Developer",
            "UI UX Designer",
            "Web Developer",
            "Logo Designer",

        ];

        let currentAboutProfession = 0;
        let charAboutIndex = 0;
        let isAboutDeleting = false;
        let typingAboutSpeed = 100;

        function typeAbout() {
            const currentText = aboutProfessions[currentAboutProfession];
            
            if (isAboutDeleting) {
                typingAboutElement.textContent = currentText.substring(0, charAboutIndex - 1);
                charAboutIndex--;
                typingAboutSpeed = 50;
            } else {
                typingAboutElement.textContent = currentText.substring(0, charAboutIndex + 1);
                charAboutIndex++;
                typingAboutSpeed = 100;
            }
            
            if (!isAboutDeleting && charAboutIndex === currentText.length) {
                isAboutDeleting = true;
                typingAboutSpeed = 1500;
            } else if (isAboutDeleting && charAboutIndex === 0) {
                isAboutDeleting = false;
                currentAboutProfession = (currentAboutProfession + 1) % aboutProfessions.length;
                typingAboutSpeed = 500;
            }
            
            setTimeout(typeAbout, typingAboutSpeed);
        }

        setTimeout(typeAbout, 1500);
    }

    // Smooth Scroll Navigation
    document.querySelectorAll('.nav-link:not(.disabled)').forEach(link => {
        link.addEventListener('click', function(e) {
            if(this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Handle scroll events for section detection
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveSection() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
                currentSection = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();

    // Scroll to section function
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    // Service Modal Functions
    window.openServiceModal = function(serviceId) {
        const modal = document.getElementById('service-modal');
        const serviceModal = document.getElementById(`${serviceId}-modal`);
        
        document.querySelectorAll('#service-modal .service-details').forEach(detail => {
            detail.style.display = 'none';
        });
        
        if(serviceModal) {
            serviceModal.style.display = 'block';
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeServiceModal = function() {
        const modal = document.getElementById('service-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Close modal when clicking outside content
    document.getElementById('service-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeServiceModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeServiceModal();
        }
    });

    // تفعيل النموذج
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                alert('Please fill in all required fields correctly');            }
        });
    }
});
