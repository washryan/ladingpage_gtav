// Aguarda o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  // Intro Screen Logic
  const introScreen = document.getElementById("introScreen")
  const mainContent = document.getElementById("mainContent")

  // Bloqueia scroll durante a intro
  document.body.style.overflow = "hidden"

  // Timer para remover a intro após 4.5 segundos
  setTimeout(() => {
    if (introScreen) {
      // Fade out da intro
      introScreen.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out"
      introScreen.style.opacity = "0"
      introScreen.style.transform = "scale(1.1)"

      // Remove a intro e mostra o conteúdo principal
      setTimeout(() => {
        introScreen.style.display = "none"
        document.body.style.overflow = "auto"

        // Fade in do conteúdo principal
        if (mainContent) {
          mainContent.style.transition = "opacity 1s ease-out"
          mainContent.style.opacity = "1"
        }
      }, 800)
    }
  }, 4500) // 4.5 segundos total

  // Rolagem suave para links de navegação
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Menu mobile toggle
  const navbarToggle = document.querySelector(".navbar-toggle")
  const navbarNav = document.querySelector(".navbar-nav")

  if (navbarToggle && navbarNav) {
    navbarToggle.addEventListener("click", function () {
      this.classList.toggle("active")
      navbarNav.classList.toggle("active")
    })
  }

  // FAQ accordion
  const faqQuestions = document.querySelectorAll(".faq-question")
  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement
      const faqAnswer = faqItem.querySelector(".faq-answer")
      const isActive = faqItem.classList.contains("active")

      // Fecha todos os outros FAQs
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active")
          const answer = item.querySelector(".faq-answer")
          answer.style.maxHeight = "0"
        }
      })

      // Toggle do FAQ atual
      if (isActive) {
        faqItem.classList.remove("active")
        faqAnswer.style.maxHeight = "0"
      } else {
        faqItem.classList.add("active")
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px"
      }
    })
  })

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Parallax effect para hero section
  const heroBackground = document.querySelector(".hero-background")
  if (heroBackground) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const speed = 0.5
      heroBackground.style.transform = `translateY(${scrolled * speed}px)`
    })
  }

  // Scroll indicator click functionality
  const scrollIndicator = document.querySelector(".scroll-indicator")
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const aboutSection = document.querySelector("#about")
      if (aboutSection) {
        const offsetTop = aboutSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })

    // Hide scroll indicator after scrolling
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = "0"
        scrollIndicator.style.pointerEvents = "none"
      } else {
        scrollIndicator.style.opacity = "1"
        scrollIndicator.style.pointerEvents = "auto"
      }
    })
  }

  // Animação de elementos ao scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(".about-card, .plan-card, .device-card, .feature")

    elements.forEach((element) => {
      const elementTop = element.offsetTop
      const elementHeight = element.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      if (scrollY + windowHeight > elementTop + 100) {
        element.classList.add("animate")
      }
    })
  }

  // Executa animação no scroll e no load
  window.addEventListener("scroll", debounce(animateOnScroll, 10))
  animateOnScroll()

  // Função debounce para otimizar performance
  function debounce(func, wait, immediate) {
    let timeout
    return function () {
      const args = arguments
      const later = () => {
        timeout = null
        if (!immediate) func.apply(this, args)
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(this, args)
    }
  }

  // Fechar menu mobile com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (navbarNav) navbarNav.classList.remove("active")
      if (navbarToggle) navbarToggle.classList.remove("active")
    }
  })

  // Lazy loading para imagens
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        }
      })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })
  }

  // Console welcome message
  console.log("%c🎮 GTA V Landing Page", "color: #f0b90b; font-size: 20px; font-weight: bold;")
  console.log("%cDesenvolvido com HTML5, SASS e JavaScript Vanilla", "color: #ffffff; font-size: 14px;")
})
