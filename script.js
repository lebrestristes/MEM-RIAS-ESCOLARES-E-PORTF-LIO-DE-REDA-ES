/* ============================================
   Kamilly Vicente — Interatividade
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Dados das Redações ----------
  const redacoes = {
    1: {
      title: 'A persistência da violência contra a mulher na sociedade brasileira',
      date: '31/07/2026',
      body: `
        <p>A violência contra as mulheres persiste nos dias de hoje, especialmente quando é utilizada como ferramenta de controle, resultado de uma estrutura social patriarcal enraizada que coloca a mulher em uma posição de subordinação ao homem. Desse modo, essa problemática vai além de uma herança cultural no Brasil, mas se perpetua também pela ineficácia de redes públicas de apoio e proteção às vítimas.</p>
        <p>Acerca disso, a socióloga brasileira Heleieth Saffioti ratifica que o patriarcado opera como uma estrutura de dominação que naturaliza a desigualdade de gênero. Nesse contexto, percebe-se que a perpetuação de comportamentos machistas na sociedade brasileira valida atitudes agressivas, fazendo com que a dominação e o controle sobre a mulher sejam encarados, de forma equivocada, como algo natural.</p>
        <p>Ademais, nota-se que a omissão estatal na fiscalização das medidas protetivas fortalece a sensação de impunidade dos agressores, fortalecendo o ciclo de abusos no país. Embora a Constituição Federal de 1988 assegure a proteção da família e o combate à violência, a falta de suporte institucional adequado e a burocracia no acolhimento das vítimas impedem que as garantias legais se concretizem na prática.</p>
        <p>Portanto, medidas são necessárias para mitigar a persistência da violência contra a mulher no Brasil. Para isso, cabe ao Ministério das Mulheres, em parceria com o governo estadual — órgão responsável pela articulação de políticas públicas de proteção —, ampliar a rede de atendimento e a fiscalização das medidas protetivas. Essa ação deve ocorrer mediante o aumento de verbas orçamentárias destinadas à criação de mais Delegacias Especializadas de Atendimento à Mulher (DEAMs) e ao fortalecimento de patrulhas de monitoramento. Com essas iniciativas, buscar-se-á efetivar as garantias constitucionais e erradicar a herança patriarcal do país.</p>
      `,
      why: `
        <h4>Por que escolhi este texto?</h4>
        <p>Escolhi este texto por tratar de um tema urgente e estrutural: a violência contra a mulher no Brasil, ligando o patriarcado, a impunidade e a falha das políticas públicas. Ele representa, para mim, a necessidade de transformar garantias legais (como as da Constituição e das medidas protetivas) em ações concretas, por meio de mais investimento, fiscalização e redes de apoio eficazes. É um chamado à responsabilidade coletiva e estatal para romper o ciclo de dominação e abuso.</p>
      `
    }
  };

  // ---------- Header scroll ----------
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ---------- Menu mobile ----------
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // ---------- Active nav link on scroll ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);

  // ---------- Modal de Redações ----------
  const modal = document.getElementById('modal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalBody = document.getElementById('modalBody');
  const modalWhy = document.getElementById('modalWhy');

  function openModal(id) {
    const data = redacoes[id];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDate.textContent = data.date;
    modalBody.innerHTML = data.body;
    modalWhy.innerHTML = data.why;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-read[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal');
      openModal(id);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // ---------- Smooth scroll ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
