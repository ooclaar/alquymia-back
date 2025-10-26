/**
 * CTF Alquymia 2025 - JavaScript
 * Funcionalidades interativas e animações da landing page
 */

// ===== Inicialização quando o DOM estiver carregado =====
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initAnimations();
    initParticles();
    initKonamiCode();
});

// ===== Navegação Mobile =====
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Toggle menu mobile
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#inscricao') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== Efeitos de Scroll =====
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Adicionar classe 'scrolled' ao header
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ===== Animações de Entrada =====
function initAnimations() {
    // Observer para elementos com data-aos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observar todos os elementos com data-aos
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
    
    // Animação de contadores
    animateCounters();
}

// ===== Animação de Contadores =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Velocidade da animação
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = entry.target;
                const text = target.textContent;
                const hasPlus = text.includes('+');
                const number = parseInt(text.replace('+', ''));
                
                let current = 0;
                const increment = number / speed;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < number) {
                        target.textContent = Math.ceil(current) + (hasPlus ? '+' : '');
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.textContent = number + (hasPlus ? '+' : '');
                        target.classList.add('counted');
                    }
                };
                
                updateCounter();
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// ===== Partículas Animadas =====
function initParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;
    
    // Criar partículas
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Posição aleatória
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 140, 0, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        pointer-events: none;
        animation: float ${duration}s ease-in-out ${delay}s infinite;
    `;
    
    container.appendChild(particle);
}

// Adicionar animação de float ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(${Math.random() + 0.5});
        }
    }
`;
document.head.appendChild(style);

// ===== Efeito de Cursor Personalizado (opcional) =====
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--color-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Aumentar cursor ao passar sobre elementos clicáveis
    document.querySelectorAll('a, button, .btn').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// ===== Efeito de Parallax =====
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===== Preloader (opcional) =====
function initPreloader() {
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
}

// ===== Easter Egg - Konami Code =====
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    console.log('🎉 Easter Egg Ativado!');
    
    // Mostrar alert com a flag
    alert('🎉 Easter Egg Ativado! 🎉\n\nVocê é um verdadeiro hacker!\n\nFLAG: ALQ{FL@G_CODE_1N_W3BS1T3}');
    
    // Aplicar efeito rainbow no body
    var hue = 0;
    var rainbowInterval = setInterval(function() {
        hue = (hue + 2) % 360;
        document.body.style.filter = 'hue-rotate(' + hue + 'deg)';
    }, 30);
    
    // Remover efeito após 6 segundos
    setTimeout(function() {
        clearInterval(rainbowInterval);
        document.body.style.filter = '';
    }, 6000);
}



// ===== Performance: Lazy Loading de Imagens =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== Console Art =====
console.log(`
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║              🔐 CTF ALQUYMIA 2025 🔐                     ║
    ║                                                           ║
    ║     Bem-vindo ao código-fonte da landing page!           ║
    ║     Você é curioso... isso é bom para um hacker! 😉      ║
    ║                                                           ║
    ║     Dica: Tente o Konami Code para um Easter Egg!       ║
    ║     ↑ ↑ ↓ ↓ ← → ← → B A                                 ║
    ║                                                           ║
    ║     Desenvolvido com ❤️ pela comunidade Alquymia         ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
`);

console.log('%c🚀 Quer participar do CTF? Inscreva-se em: https://alquymia.com.br/ctf', 
    'color: #FF8C00; font-size: 16px; font-weight: bold; padding: 10px;');



// ===== Funções para Modais de Login e Registro =====
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function switchModal(currentModalId, targetModalId) {
    closeModal(currentModalId);
    setTimeout(() => {
        openModal(targetModalId);
    }, 300);
}

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Formulários de login e registro agora funcionam com o backend do CTFd
// Código de demonstração removido para permitir funcionalidade real

