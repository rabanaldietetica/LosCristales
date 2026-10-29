import './style.css'

const dishes = [
  { name: 'Arroz chaufa de carne', image: 'arroz-chaufa-carne.jpg', description: 'Arroz chaufa preparado al estilo oriental, con carne.' },
  { name: 'Arroz chaufa de pollo', image: 'arroz-chaufa-pollo.jpg', description: 'Una combinación sabrosa de arroz salteado y pollo.' },
  { name: 'Arroz chaufa mixto', image: 'arroz-chaufa-mixto.jpg', description: 'Chaufa mixto para disfrutar una combinación de sabores.' },
  { name: 'Churrasco con fritas', image: 'churrasco.jpg', description: 'Un clásico contundente para disfrutar.' },
  { name: 'Pollo dorado', image: 'pollo-dorado.jpg', description: 'Pollo dorado, sabroso y tentador.' },
  { name: 'Pollo broaster', image: 'pollo-broaster.jpg', description: 'Pollo crocante, ideal para darse un gusto.' },
  { name: 'Suprema de pollo con fritas', image: 'suprema-pollo.jpg', description: 'Suprema de pollo acompañada con papas fritas.' },
  { name: 'Milanesa de carne', image: 'milanesa-carne.jpg', description: 'Elegí tu acompañamiento: papas fritas o ensalada.' },
  { name: 'Milanesa napolitana', image: 'milanesa-napolitana.jpg', description: 'Un clásico irresistible de la cocina argentina.' },
  { name: 'Sándwich de milanesa de pollo', image: 'sanguche-milanesa-pollo.jpg', description: 'Sándwich de pollo empanado para disfrutar en cualquier momento.' },
  { name: 'Sándwich de milanesa de carne', image: 'sanguche-milanesa-carne.jpg', description: 'Un sándwich clásico, sabroso y abundante.' },
  { name: 'Porción de papas fritas', image: 'papas-fritas.jpg', description: 'El acompañamiento que nunca falla.' },
  { name: 'Lomo salteado', image: 'lomo-salteado.jpg', description: 'Una preparación llena de sabor.' },
  { name: 'Lomo montado', image: 'lomo-montado.jpg', description: 'Una propuesta abundante para los amantes del lomo.' },
  { name: 'Silpancho', image: 'silpancho.jpg', description: 'Un clásico de la cocina boliviana.' },
  { name: 'Salchipapas', image: 'salchipapa.jpg', description: 'La combinación clásica de salchichas y papas.' },
  { name: 'Hamburguesa con papas fritas', image: 'hamburguesa-papas.jpg', description: 'Una hamburguesa acompañada con papas fritas.' },
  { name: 'Empanadas de jamón y queso', image: 'empanadas.jpg', description: 'Relleno clásico de jamón y queso.' },
  { name: 'Empanadas de carne', image: 'empanadas.jpg', description: 'Una opción tradicional y sabrosa.' },
  { name: 'Empanadas de pollo', image: 'empanadas.jpg', description: 'Rellenas de pollo, ideales para compartir.' },
  { name: 'Chicharrón', image: 'chicharron.jpg', description: 'Una preparación tradicional de sabor intenso.' },
  { name: 'Charquekan', image: 'charkekan.jpg', description: 'Un plato emblemático de la gastronomía boliviana.' },
  { name: 'Costillar', image: 'costillar.jpg', description: 'Una opción especial para disfrutar de la buena mesa.' },
  { name: 'Ají de lengua', image: 'aji-lengua.jpg', description: 'Una preparación tradicional de la cocina boliviana.' },
  { name: 'Picante de pollo', image: 'picante-pollo.jpg', description: 'Un plato tradicional, lleno de personalidad.' },
  { name: 'Picante de carne', image: 'picante-carne.jpg', description: 'Sabores tradicionales en una preparación contundente.' },
  { name: 'Fricasé', image: 'fricase.jpg', description: 'Una receta tradicional boliviana.' },
  { name: 'Caldo de mote', image: 'caldo-mote.jpg', description: 'Caldo tradicional, ideal para disfrutar bien caliente.' },
  { name: 'Bife con fritas', image: 'bife.jpg', description: 'Bife acompañado con papas fritas.' },
  { name: 'Pizzas', image: 'pizza.jpg', description: 'Una opción clásica para compartir.' },
  { name: 'Sopa de chairo', image: 'sopa-chairo.jpg', description: 'Sopa tradicional de la cocina boliviana.' },
  { name: 'Matambrito de cerdo con ensalada rusa', image: 'matambrito-cerdo.jpg', description: 'Matambrito de cerdo acompañado con ensalada rusa.' },
  { name: 'Estofado de pollo', image: 'estofado-pollo.jpg', description: 'Una preparación casera y reconfortante.' },
  { name: 'Sopa de maní', image: 'sopa-mani.jpg', description: 'Una de las sopas más representativas de Bolivia.' },
]

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) throw new Error('No se encontró el contenedor principal.')

const whatsapp = 'https://wa.me/5491148702907'
const maps = 'https://www.google.com/maps/dir/?api=1&destination=Grito+de+Asencio+3884%2C+Pompeya%2C+CABA'

app.innerHTML = `
  <div class="site-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>

    <header class="topbar">
      <a class="brand-mini" href="#inicio" aria-label="Los Cristales, inicio">
        <span class="brand-mark">LC</span>
        <span class="brand-words"><strong>LOS CRISTALES</strong><small>RESTAURANTE</small></span>
      </a>
      <a class="top-contact" href="${whatsapp}" target="_blank" rel="noopener">
        <span class="whatsapp-dot">●</span> Contactanos
      </a>
    </header>

    <main>
      <section class="hero" id="inicio">
        <div class="hero-orbit orbit-one"></div>
        <div class="hero-orbit orbit-two"></div>
        <div class="hero-content">
          <div class="eyebrow"><span></span> COCINA BOLIVIANA Y ARGENTINA <span></span></div>
          <div class="hero-logo-frame">
            <div class="logo-corner corner-tl"></div>
            <div class="logo-corner corner-tr"></div>
            <div class="logo-corner corner-bl"></div>
            <div class="logo-corner corner-br"></div>
            <img class="hero-logo" src="/images/logo.jpg" alt="Logo de Los Cristales" fetchpriority="high">
          </div>
          <p class="hero-kicker">TRADICIÓN · SABOR · ENCUENTRO</p>
          <h1>Dos culturas.<br><em>Una mesa llena de sabor.</em></h1>
          <p class="hero-description">Descubrí los sabores de Bolivia y Argentina en un mismo lugar. Platos tradicionales, clásicos irresistibles y ese gusto que invita a volver.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="#menu">Descubrir el menú <span>↘</span></a>
            <a class="button button-outline" href="${whatsapp}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
          </div>
          <div class="hero-address"><span class="pin">⌖</span> Grito de Asencio 3884 · Pompeya, CABA</div>
        </div>
        <div class="hero-bottom-line"><span></span><small>BUENA COMIDA, BUENOS MOMENTOS</small><span></span></div>
      </section>

      <section class="intro section-wrap">
        <div class="section-label"><span>01</span> NUESTRA ESENCIA</div>
        <div class="intro-grid">
          <div>
            <h2>Sabores que<br><em>reúnen culturas.</em></h2>
          </div>
          <div class="intro-copy">
            <p>En Los Cristales se encuentran dos grandes tradiciones gastronómicas. Desde las recetas con identidad boliviana hasta los clásicos argentinos de siempre, cada plato forma parte de una mesa pensada para disfrutar.</p>
            <div class="gold-rule"><span></span></div>
            <p class="intro-small">Elegí tu favorito y disfrutá de una propuesta variada, familiar y llena de sabor.</p>
          </div>
        </div>
      </section>

      <section class="menu-section section-wrap" id="menu">
        <div class="menu-heading">
          <div class="section-label"><span>02</span> NUESTRA PROPUESTA</div>
          <h2>El menú de <em>Los Cristales</em></h2>
          <p>Encontrá tu próximo plato favorito.</p>
          <div class="menu-flourish"><span></span> ✦ <span></span></div>
        </div>
        <div class="menu-grid">
          ${dishes.map((dish, index) => `
            <article class="dish-card" style="--card-index:${index}">
              <button class="dish-image-button" type="button" data-image="/images/${dish.image}" data-title="${dish.name.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}" aria-label="Ampliar foto de ${dish.name.replace(/"/g, '&quot;')}">
                <img class="dish-image" src="/images/${dish.image}" alt="${dish.name.replace(/"/g, '&quot;')}" loading="lazy">
                <span class="image-expand" aria-hidden="true">↗</span>
              </button>
              <div class="dish-info">
                <span class="dish-number">${String(index + 1).padStart(2, '0')}</span>
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <a class="dish-order" href="${whatsapp}?text=${encodeURIComponent('Hola, Los Cristales. Quería consultar por ' + dish.name + '.')}" target="_blank" rel="noopener">Consultar por este plato <span>↗</span></a>
              </div>
            </article>
          `).join('')}
        </div>
        <div class="menu-note"><span>✦</span> Consultanos por disponibilidad y opciones del día.</div>
      </section>

      <section class="visit-section">
        <div class="visit-pattern"></div>
        <div class="visit-inner">
          <div class="section-label"><span>03</span> TE ESPERAMOS</div>
          <h2>Tu próxima comida<br><em>empieza acá.</em></h2>
          <p>Elegí tu plato, escribinos para consultar y encontrá el camino hasta Los Cristales.</p>
          <div class="visit-actions">
            <a class="button button-gold" href="${whatsapp}" target="_blank" rel="noopener"><span class="wa-icon">◉</span> Hablar por WhatsApp</a>
            <a class="button button-light-outline" href="${maps}" target="_blank" rel="noopener">Cómo llegar <span>↗</span></a>
          </div>
          <div class="visit-details">
            <div><span class="detail-icon">⌖</span><div><small>DÓNDE ESTAMOS</small><strong>Grito de Asencio 3884</strong><span>Pompeya, Ciudad Autónoma de Buenos Aires</span></div></div>
            <div><span class="detail-icon">✆</span><div><small>CONTACTO</small><strong>11 4870-2907</strong><span>Consultas por WhatsApp</span></div></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <a class="footer-brand" href="#inicio">LOS CRISTALES <span>✦</span></a>
      <p>COCINA BOLIVIANA Y ARGENTINA</p>
      <div class="social-links" aria-label="Redes sociales y contacto">
        <a class="social-button social-facebook" href="https://www.facebook.com/share/1EDKHKkY7D/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Los Cristales">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21z"/></svg>
          <span>Facebook</span>
        </a>
        <a class="social-button social-instagram" href="https://www.instagram.com/loscristalesrestaurante" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Los Cristales">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.8" r="1.2"/></svg>
          <span>Instagram</span>
        </a>
        <a class="social-button social-whatsapp" href="https://wa.me/5491148702907" target="_blank" rel="noopener noreferrer" aria-label="Contactar a Los Cristales por WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.5l6-1.6A11.8 11.8 0 0 0 20.5 3.5ZM12 21a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-3.6 1 1-3.5-.2-.4A9.7 9.7 0 1 1 12 21Zm5.3-7.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.1-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.5s0-.4 0-.5l-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.6 1.2 3 1.4 3.2a11 11 0 0 0 4.3 3.8c.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.8-.7 2-1.4s.3-1.3.2-1.4-.3-.2-.5-.3Z"/></svg>
          <span>WhatsApp</span>
        </a>
      </div>
      <span class="footer-line"></span>
      <small>© ${new Date().getFullYear()} Los Cristales · Todos los derechos reservados</small>
      <a class="back-top" href="#inicio" aria-label="Volver al inicio">↑</a>
    </footer>
  </div>

  <div class="lightbox" id="lightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Fotografía ampliada">
    <button class="lightbox-close" type="button" aria-label="Cerrar fotografía">×</button>
    <div class="lightbox-content">
      <img id="lightbox-image" src="" alt="">
      <p id="lightbox-title"></p>
    </div>
    <span class="lightbox-hint">TOCÁ AFUERA DE LA FOTO PARA CERRAR</span>
  </div>
`

const lightbox = document.querySelector<HTMLDivElement>('#lightbox')
const lightboxImage = document.querySelector<HTMLImageElement>('#lightbox-image')
const lightboxTitle = document.querySelector<HTMLParagraphElement>('#lightbox-title')
const closeButton = document.querySelector<HTMLButtonElement>('.lightbox-close')

function closeLightbox() {
  lightbox?.classList.remove('is-open')
  lightbox?.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('lightbox-active')
  if (lightboxImage) lightboxImage.src = ''
}

document.querySelectorAll<HTMLButtonElement>('.dish-image-button').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxTitle) return
    const image = button.dataset.image
    if (!image) return
    lightboxImage.src = image
    lightboxImage.alt = button.dataset.title || 'Fotografía de un plato'
    lightboxTitle.textContent = button.dataset.title || ''
    lightbox.classList.add('is-open')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('lightbox-active')
  })
})

closeButton?.addEventListener('click', closeLightbox)
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox()
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox()
})

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.08 })

document.querySelectorAll('.dish-card, .intro-grid > *, .menu-heading, .visit-inner > *').forEach((element) => {
  element.classList.add('reveal')
  revealObserver.observe(element)
})
