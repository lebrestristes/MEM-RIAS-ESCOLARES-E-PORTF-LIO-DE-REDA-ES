/* ============================================
   Kamilly Vicente — Site Pessoal (corrigido)
   ============================================ */

:root {
  --pink-50: #fff5f8;
  --pink-100: #ffe4ec;
  --pink-200: #ffc9d9;
  --pink-300: #ff9ebb;
  --pink-400: #ff7aa2;
  --pink-500: #f75a8a;
  --pink-600: #e03a6d;

  --lavender: #e8d5f5;
  --lavender-dark: #c9a8e8;
  --mint: #d4f0e8;
  --cream: #fff9f5;
  --soft-yellow: #fff3d4;

  --text-dark: #3d2c3a;
  --text-medium: #6b4f62;
  --text-light: #9a7a8c;
  --white: #ffffff;

  --font-display: 'Comfortaa', sans-serif;
  --font-body: 'Nunito', sans-serif;

  --container: 1100px;
  --radius: 20px;
  --radius-sm: 12px;
  --shadow: 0 10px 40px rgba(247, 90, 138, 0.12);
  --shadow-hover: 0 20px 50px rgba(247, 90, 138, 0.2);
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  color: var(--text-dark);
  background: linear-gradient(160deg, var(--pink-50) 0%, var(--cream) 40%, var(--lavender) 100%);
  background-attachment: fixed;
  line-height: 1.7;
  overflow-x: hidden;
  min-height: 100vh;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--pink-600);
  text-decoration: none;
  transition: color var(--transition);
}

a:hover {
  color: var(--pink-500);
}

ul {
  list-style: none;
}

.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}

/* Background */
.bg-decor {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.35;
  filter: blur(40px);
  animation: float 18s ease-in-out infinite;
}

.shape-1 {
  width: 320px;
  height: 320px;
  background: var(--pink-200);
  top: 10%;
  left: -80px;
}

.shape-2 {
  width: 250px;
  height: 250px;
  background: var(--lavender);
  top: 50%;
  right: -60px;
  animation-delay: -5s;
}

.shape-3 {
  width: 180px;
  height: 180px;
  background: var(--mint);
  bottom: 15%;
  left: 20%;
  animation-delay: -10s;
}

.shape-4 {
  width: 200px;
  height: 200px;
  background: var(--soft-yellow);
  top: 25%;
  right: 25%;
  animation-delay: -7s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: background var(--transition), box-shadow var(--transition), padding var(--transition);
}

.header.scrolled {
  background: rgba(255, 245, 248, 0.92);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(247, 90, 138, 0.08);
  padding: 10px 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--pink-600);
}

.logo-icon {
  font-size: 1.3rem;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 8px 18px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-medium);
  transition: all var(--transition);
}

.nav-link:hover,
.nav-link.active {
  background: var(--pink-100);
  color: var(--pink-600);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2.5px;
  background: var(--pink-600);
  border-radius: 2px;
  transition: var(--transition);
}

/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

.hero-greeting {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--pink-500);
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.15;
  margin-bottom: 12px;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-medium);
  margin-bottom: 24px;
}

.hero-quote {
  font-style: italic;
  font-size: 1.1rem;
  color: var(--text-medium);
  margin-bottom: 36px;
  padding-left: 16px;
  border-left: 3px solid var(--pink-300);
}

.quote-mark {
  color: var(--pink-400);
  font-size: 1.3em;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  transition: all var(--transition);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--pink-500), var(--pink-400));
  color: var(--white);
  box-shadow: 0 8px 25px rgba(247, 90, 138, 0.35);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(247, 90, 138, 0.45);
  color: var(--white);
}

.btn-secondary {
  background: var(--white);
  color: var(--pink-600);
  border: 2px solid var(--pink-200);
}

.btn-secondary:hover {
  background: var(--pink-50);
  border-color: var(--pink-300);
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.hero-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 158, 187, 0.3);
  border-radius: 28px;
  padding: 40px 36px;
  text-align: center;
  box-shadow: var(--shadow);
  max-width: 280px;
  animation: cardFloat 6s ease-in-out infinite;
}

@keyframes cardFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.hero-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--pink-100), var(--lavender));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--white);
  box-shadow: 0 8px 20px rgba(247, 90, 138, 0.15);
}

.avatar-emoji {
  font-size: 2.8rem;
}

.hero-card-text {
  font-size: 0.95rem;
  color: var(--text-medium);
  margin-bottom: 18px;
}

.hero-card-text strong {
  color: var(--pink-600);
  font-size: 1.1rem;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.badge {
  background: var(--pink-100);
  color: var(--pink-600);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 50px;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--text-light);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--pink-400);
  border-bottom: 2px solid var(--pink-400);
  transform: rotate(45deg);
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

/* Sections */
.section {
  position: relative;
  padding: 100px 0;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  background: var(--pink-100);
  color: var(--pink-600);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.section-desc {
  max-width: 560px;
  margin: 0 auto;
  color: var(--text-medium);
  font-size: 1.05rem;
}

/* Timeline — TEXTO SEMPRE VISÍVEL */
.timeline {
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--pink-200), var(--lavender-dark), var(--pink-300));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  margin-bottom: 48px;
  /* Sempre visível — não depende de JS */
  opacity: 1;
  transform: none;
}

.timeline-marker {
  position: absolute;
  left: -40px;
  top: 8px;
  width: 34px;
  height: 34px;
  background: var(--white);
  border: 3px solid var(--pink-300);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(247, 90, 138, 0.2);
}

.marker-icon {
  font-size: 0.9rem;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 158, 187, 0.25);
  border-radius: var(--radius);
  padding: 28px 32px;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
}

.timeline-content:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.timeline-item--highlight .timeline-content {
  border-color: var(--pink-300);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 228, 236, 0.65));
}

.timeline-period {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--pink-500);
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.timeline-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 16px;
  line-height: 1.35;
}

/* Imagens da timeline */
.timeline-img-wrap {
  margin: 0 0 18px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(61, 44, 58, 0.1);
}

.timeline-img-wrap--small {
  max-width: 320px;
  margin-bottom: 14px;
}

.timeline-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.timeline-img-wrap--small .timeline-img {
  height: 150px;
}

.timeline-content:hover .timeline-img {
  transform: scale(1.03);
}

.timeline-body p {
  margin-bottom: 12px;
  color: var(--text-medium);
  font-size: 1rem;
  line-height: 1.75;
}

.timeline-body ul {
  margin: 12px 0 16px 8px;
}

.timeline-body li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 8px;
  color: var(--text-medium);
}

.timeline-body li::before {
  content: '♡';
  position: absolute;
  left: 0;
  color: var(--pink-400);
  font-size: 0.75rem;
}

.timeline-body a {
  font-weight: 700;
  border-bottom: 1px dashed var(--pink-300);
}

.timeline-body a:hover {
  border-bottom-style: solid;
}

.memory-block {
  background: rgba(255, 245, 248, 0.75);
  border-radius: var(--radius-sm);
  padding: 18px 20px;
  margin: 18px 0;
  border-left: 3px solid var(--pink-300);
}

.memory-block h4 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--pink-600);
  margin-bottom: 10px;
}

.highlight-text {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--pink-600) !important;
  margin-top: 10px !important;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  background: var(--pink-50);
  color: var(--pink-600);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 50px;
  border: 1px solid var(--pink-100);
}

/* Redações */
.redacoes {
  background: rgba(255, 255, 255, 0.35);
}

.redacoes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

.redacao-card {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 158, 187, 0.25);
  border-radius: var(--radius);
  padding: 28px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
}

.redacao-card:not(.redacao-card--placeholder):hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}

.redacao-card--placeholder {
  opacity: 0.55;
  border-style: dashed;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.card-date {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--pink-500);
}

.card-badge {
  background: var(--lavender);
  color: #7a4d9e;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 50px;
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
  line-height: 1.35;
}

.card-excerpt {
  flex: 1;
  font-size: 0.95rem;
  color: var(--text-medium);
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
}

.btn-read {
  background: transparent;
  border: 2px solid var(--pink-300);
  color: var(--pink-600);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.88rem;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all var(--transition);
}

.btn-read:hover:not(.disabled) {
  background: var(--pink-500);
  border-color: var(--pink-500);
  color: var(--white);
}

.btn-read.disabled {
  border-color: var(--pink-100);
  color: var(--text-light);
  cursor: default;
}

/* Sobre */
.sobre-content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.professor-quote {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: var(--radius);
  padding: 36px 40px;
  margin: 36px 0;
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 158, 187, 0.2);
}

.professor-quote p {
  font-style: italic;
  font-size: 1.08rem;
  color: var(--text-medium);
  line-height: 1.85;
  margin-bottom: 16px;
}

.professor-quote cite {
  font-style: normal;
  font-weight: 700;
  color: var(--pink-600);
  font-size: 0.95rem;
}

.sobre-message {
  font-size: 1.05rem;
  color: var(--text-medium);
  margin-bottom: 28px;
}

.sobre-sign {
  font-size: 1rem;
  color: var(--text-medium);
}

.sobre-sign strong {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--pink-600);
}

.sobre-sign span {
  font-size: 0.9rem;
  color: var(--text-light);
}

/* Footer */
.footer {
  position: relative;
  z-index: 1;
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 158, 187, 0.2);
  background: rgba(255, 255, 255, 0.4);
}

.footer p {
  font-size: 0.9rem;
  color: var(--text-medium);
  margin-bottom: 4px;
}

.footer-note {
  font-size: 0.8rem !important;
  color: var(--text-light) !important;
}

/* Modal */
.modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal.open {
  opacity: 1;
  visibility: visible;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(61, 44, 58, 0.55);
  backdrop-filter: blur(6px);
}

.modal-container {
  position: relative;
  background: var(--white);
  border-radius: 24px;
  max-width: 680px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 40px 36px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  transform: translateY(30px) scale(0.96);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal.open .modal-container {
  transform: translateY(0) scale(1);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: var(--pink-50);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: var(--pink-600);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
  line-height: 1;
}

.modal-close:hover {
  background: var(--pink-100);
}

.modal-date {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--pink-500);
  margin-bottom: 8px;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 24px;
  line-height: 1.35;
  padding-right: 30px;
}

.modal-body {
  font-size: 1rem;
  color: var(--text-medium);
  line-height: 1.85;
  text-align: justify;
}

.modal-body p {
  margin-bottom: 16px;
}

.modal-why {
  margin-top: 28px;
  padding: 20px 24px;
  background: var(--pink-50);
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--pink-400);
}

.modal-why h4 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--pink-600);
  margin-bottom: 8px;
}

.modal-why p {
  font-size: 0.95rem;
  color: var(--text-medium);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .hero-quote {
    border-left: none;
    padding-left: 0;
    border-top: 3px solid var(--pink-300);
    padding-top: 16px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(255, 245, 248, 0.98);
    backdrop-filter: blur(16px);
    flex-direction: column;
    padding: 80px 30px 30px;
    gap: 8px;
    box-shadow: -10px 0 40px rgba(247, 90, 138, 0.15);
    transition: right 0.35s ease;
    z-index: 999;
  }

  .nav.open {
    right: 0;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 12px 20px;
  }

  .menu-toggle {
    display: flex;
    z-index: 1001;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .timeline {
    padding-left: 32px;
  }

  .timeline-marker {
    left: -32px;
    width: 28px;
    height: 28px;
  }

  .timeline-content {
    padding: 22px 20px;
  }

  .timeline-img {
    height: 160px;
  }

  .section {
    padding: 70px 0;
  }

  .modal-container {
    padding: 32px 24px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .redacoes-grid {
    grid-template-columns: 1fr;
  }
}
