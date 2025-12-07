// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
  mobileMenuBtn.classList.toggle("active")

  // Animate hamburger icon
  const spans = mobileMenuBtn.querySelectorAll("span")
  spans.forEach((span) => span.classList.toggle("bg-primary"))
})

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
    mobileMenuBtn.classList.remove("active")
  })
})

// Header scroll effect
const header = document.querySelector("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.classList.add("shadow-lg")
    header.classList.remove("shadow-sm")
  } else {
    header.classList.add("shadow-sm")
    header.classList.remove("shadow-lg")
  }

  lastScroll = currentScroll
})

// Active navigation link on scroll
const sections = document.querySelectorAll("section[id]")
const navItems = document.querySelectorAll("nav a")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id")
    }
  })

  navItems.forEach((item) => {
    item.classList.remove("text-primary", "font-semibold")
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("text-primary", "font-semibold")
    }
  })
})
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Adjust this value based on your hero section's height.
    const scrollThreshold = 500; 

    let lastScrollY = window.scrollY;
    let isHidden = false;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollThreshold) {
            
            if (currentScrollY > lastScrollY && !isHidden) {
                // Scrolling DOWN: Hide header
                header.style.transform = 'translateY(-100%)';
                isHidden = true;
            } else if (currentScrollY < lastScrollY && isHidden) {
                // Scrolling UP: Show header with pink background
                header.style.transform = 'translateY(0)';
                header.classList.add('scrolled-nav');
                isHidden = false;
            }

        } else {
            // Top section: Transparent and visible
            header.style.transform = 'translateY(0)';
            header.classList.remove('scrolled-nav');
            isHidden = false;
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add animation to cards and elements on page load
document.addEventListener("DOMContentLoaded", () => {
  // Select all animatable elements
  const animatableElements = document.querySelectorAll(
    "#goals > div > div.grid > div, " + // Goal cards
      "#blog article, " + // Blog cards
      "#products > div > div.grid > div, " + // Product cards
      "#testimonials > div > div.grid > div, " + // Testimonial cards
      "#membership > div > div.grid > div:last-child > div", // Membership cards
  )

  animatableElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
    observer.observe(el)
  })
})

// Parallax effect for hero section (subtle)
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-section")
  if (hero) {
    const scrolled = window.pageYOffset
    hero.style.backgroundPositionY = scrolled * 0.5 + "px"
  }
})
