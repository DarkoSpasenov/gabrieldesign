/* =====================================================================
   GabrielDesign Car-wrap — JavaScript
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Icônes SVG des services ---------- */
  const I = {
    wrap:   '<path d="M3 8l9-5 9 5v8l-9 5-9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    partial:'<path d="M12 3v18"/><path d="M3 8l9-5 9 5v8l-9 5-9-5V8z"/>',
    ad:     '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15l3-4 2 2 3-4 2 3"/>',
    moto:   '<circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17h6l4-6h3M11 11l2-3h3"/>',
    sticker:'<path d="M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10l6-6V5a2 2 0 0 0-2-2z"/><path d="M15 21v-4a2 2 0 0 1 2-2h4"/>',
    shop:   '<path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M4 9h16"/><path d="M9 20v-6h6v6"/>',
    print:  '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/>',
    shirt:  '<path d="M4 5l4-2 4 3 4-3 4 2-2 5-2-1v11H8V9L6 10 4 5z"/>',
    logo:   '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M8 9c0-1.5 4-1.5 4 1s-4 2.5-4 4h4"/>',
    furni:  '<path d="M4 10V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M3 10h18v6H3zM5 16v3M19 16v3"/>'
  };

  /* ---------- Données : Services ---------- */
  const services = [
    { icon: 'wrap',    title: 'Covering complet',      text: "Transformation complète de la couleur ou du style d'un véhicule, tout en protégeant la peinture d'origine." },
    { icon: 'partial', title: 'Covering partiel',      text: "Personnalisation du toit, capot, rétroviseurs, éléments décoratifs ou autres parties du véhicule." },
    { icon: 'ad',      title: 'Publicité sur véhicules', text: "Création et pose de lettrages publicitaires pour voitures, camionnettes et véhicules professionnels." },
    { icon: 'moto',    title: 'Motos & bateaux',       text: "Covering personnalisé pour motos, scooters, bateaux et autres véhicules." },
    { icon: 'sticker', title: 'Stickers personnalisés', text: "Création et impression de stickers sur mesure pour particuliers, entreprises et événements." },
    { icon: 'shop',    title: 'Vitrines & enseignes',  text: "Décoration de vitrines, signalétique, lettrages et supports publicitaires." },
    { icon: 'print',   title: 'Supports imprimés',     text: "Création de cartes de visite, flyers, bâches et autres supports de communication." },
    { icon: 'shirt',   title: 'Vêtements personnalisés', text: "Création de vêtements et textiles personnalisés pour entreprises, clubs et événements." },
    { icon: 'logo',    title: 'Création de logo',      text: "Conception ou modernisation de logos professionnels adaptés à l'identité du client." },
    { icon: 'furni',   title: 'Ameublement & autres',  text: "Covering décoratif pour meubles, surfaces intérieures et supports personnalisés." }
  ];

  /* ---------- Données : Galerie ----------
     cat : voitures | motos | publicite | stickers | vitrines
     ▶ Pour ajouter la catégorie "Bateaux" : ajoutez des objets avec cat:'bateaux'
        et une entrée { key:'bateaux', label:'Bateaux' } dans `categories` ci-dessous.
     tall : true = vignette sur 2 lignes (mise en avant). */
  const gallery = [
    { img: 'voiture-porsche.jpg',        cat: 'voitures',  title: 'Porsche noir mat',   tag: 'Covering complet', tall: true },
    { img: 'voiture-bmw-m4.jpg',         cat: 'voitures',  title: 'BMW M4 violet',      tag: 'Covering complet' },
    { img: 'voiture-ferrari.jpg',        cat: 'voitures',  title: 'Ferrari rouge',      tag: 'Détails carbone' },
    { img: 'voiture-audi-s3.jpg',        cat: 'voitures',  title: 'Audi S3',            tag: 'Nardo / covering' },
    { img: 'voiture-urus.jpg',           cat: 'voitures',  title: 'Lamborghini Urus',   tag: 'Covering complet', tall: true },
    { img: 'voiture-bmw-m2.jpg',         cat: 'voitures',  title: 'BMW M2',             tag: 'Forged pattern' },
    { img: 'voiture-audi-r8.jpg',        cat: 'voitures',  title: 'Audi R8',            tag: 'Détails' },
    { img: 'voiture-golf-r.jpg',         cat: 'voitures',  title: 'VW Golf R',          tag: 'Bicolore mat' },
    { img: 'voiture-alfa.jpg',           cat: 'voitures',  title: 'Alfa Romeo Giulia',  tag: 'Covering caméléon' },
    { img: 'moto-kawasaki.jpg',          cat: 'motos',     title: 'Kawasaki Z',         tag: 'Covering moto', tall: true },
    { img: 'moto-s1000rr.jpg',           cat: 'motos',     title: 'BMW S1000RR',        tag: 'Design custom' },
    { img: 'pub-ram.jpg',                cat: 'publicite', title: 'Dodge RAM',          tag: 'Marquage pro' },
    { img: 'pub-transit.jpg',            cat: 'publicite', title: 'Ford Transit',       tag: 'Lettrage entreprise', tall: true },
    { img: 'pub-caddy.jpg',              cat: 'publicite', title: 'VW Caddy',           tag: 'Covering + pub' },
    { img: 'sticker-golf-graffiti.jpg',  cat: 'stickers',  title: 'Sticker arrière',    tag: 'Découpe custom' },
    { img: 'vitrine-physio.jpg',         cat: 'vitrines',  title: 'Enseigne Physio',    tag: 'Vitrine / lettrage' },
    { img: 'vitrine-nuno.jpg',           cat: 'vitrines',  title: 'Devanture Nuno Métal', tag: 'Signalétique' }
  ];

  const categories = [
    { key: 'all',       label: 'Tout' },
    { key: 'voitures',  label: 'Voitures' },
    { key: 'motos',     label: 'Motos' },
    { key: 'publicite', label: 'Publicité' },
    { key: 'stickers',  label: 'Stickers' },
    { key: 'vitrines',  label: 'Vitrines & autres' }
  ];

  const IMG = 'assets/img/';
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Rendu des services ---------- */
  function renderServices() {
    const grid = $('#servicesGrid');
    if (!grid) return;
    grid.innerHTML = services.map(s => `
      <article class="svc reveal">
        <span class="svc__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${I[s.icon]}</svg></span>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <a href="#devis" class="svc__link">Demander un devis
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </article>`).join('');
  }

  /* ---------- Rendu de la galerie + filtres ---------- */
  function renderGallery() {
    const grid = $('#gallery'), filters = $('#filters');
    if (!grid || !filters) return;

    // n'afficher que les catégories qui contiennent au moins une image
    const active = categories.filter(c => c.key === 'all' || gallery.some(g => g.cat === c.key));

    filters.innerHTML = active.map((c, i) => {
      const count = c.key === 'all' ? gallery.length : gallery.filter(g => g.cat === c.key).length;
      return `<button class="filter${i === 0 ? ' active' : ''}" role="tab" data-cat="${c.key}" aria-selected="${i === 0}">${c.label}<span>${count}</span></button>`;
    }).join('');

    grid.innerHTML = gallery.map((g, idx) => `
      <button class="gallery__item${g.tall ? ' tall' : ''}" data-cat="${g.cat}" data-idx="${idx}" aria-label="Agrandir : ${g.title}">
        <img src="${IMG}${g.img}" alt="${g.title} — covering GabrielDesign" loading="lazy">
        <span class="gallery__zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4M11 8v6M8 11h6"/></svg></span>
        <span class="gallery__cap"><span>${g.tag}</span><b>${g.title}</b></span>
      </button>`).join('');

    // filtrage
    filters.addEventListener('click', e => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      $$('.filter', filters).forEach(f => { f.classList.remove('active'); f.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
      const cat = btn.dataset.cat;
      $$('.gallery__item', grid).forEach(item => {
        item.classList.toggle('hide', !(cat === 'all' || item.dataset.cat === cat));
      });
    });

    // lightbox
    grid.addEventListener('click', e => {
      const item = e.target.closest('.gallery__item');
      if (item) openLightbox(+item.dataset.idx);
    });
  }

  /* ---------- Lightbox ---------- */
  let lbIndex = 0;
  function visibleItems() { return $$('.gallery__item:not(.hide)'); }
  function openLightbox(idx) {
    lbIndex = idx; updateLightbox();
    $('#lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function updateLightbox() {
    const g = gallery[lbIndex];
    $('#lbImg').src = IMG + g.img;
    $('#lbImg').alt = g.title;
    $('#lbCap').textContent = g.title + ' — ' + g.tag;
  }
  function stepLightbox(dir) {
    const vis = visibleItems();
    const order = vis.map(v => +v.dataset.idx);
    let pos = order.indexOf(lbIndex);
    pos = (pos + dir + order.length) % order.length;
    lbIndex = order[pos]; updateLightbox();
  }
  function initLightbox() {
    const lb = $('#lightbox');
    $('#lbClose').addEventListener('click', closeLb);
    $('#lbNext').addEventListener('click', () => stepLightbox(1));
    $('#lbPrev').addEventListener('click', () => stepLightbox(-1));
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowRight') stepLightbox(1);
      if (e.key === 'ArrowLeft') stepLightbox(-1);
    });
    function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; }
  }

  /* ---------- Comparateur avant / après ---------- */
  function initBeforeAfter() {
    const range = $('#baRange'), after = $('#baAfter'), handle = $('#baHandle');
    if (!range) return;
    const set = v => {
      after.style.clipPath = `inset(0 0 0 ${v}%)`;
      handle.style.left = v + '%';
    };
    range.addEventListener('input', () => set(range.value));
    set(50);
  }

  /* ---------- Navigation : sticky, menu mobile, lien actif ---------- */
  function initNav() {
    const header = $('#header'), toggle = $('#navToggle'), menu = $('#menu');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    $$('#menu a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
    }));

    // lien actif au scroll
    const sections = $$('main section[id]');
    const links = $$('#menu a[href^="#"]');
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
  }

  /* ---------- Révélation au scroll ---------- */
  function initReveal() {
    const els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-visible')); return; }
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); o.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(e => obs.observe(e));
  }

  /* ---------- Liens WhatsApp (préremplis) ---------- */
  function initWhatsApp() {
    const phone = '41797619102';
    const msg = encodeURIComponent("Bonjour GabrielDesign, je souhaiterais obtenir des informations ou un devis pour un projet de covering.");
    const url = `https://wa.me/${phone}?text=${msg}`;
    ['#waFloat', '#waBtn2'].forEach(id => { const el = $(id); if (el) el.href = url; });
  }

  /* ---------- Formulaire de devis ----------
     ▶ POUR ACTIVER L'ENVOI RÉEL :
       Option A (recommandée, sans serveur) — Formspree.io :
         1. Créez un formulaire sur https://formspree.io et copiez son ID.
         2. Remplacez ENDPOINT ci-dessous par "https://formspree.io/f/VOTRE_ID".
       Option B — EmailJS, ou votre propre script PHP/Node.
     Tant que ENDPOINT vaut null, le formulaire affiche le message de
     confirmation sans envoyer (mode démonstration). */
  const ENDPOINT = null; // ▶ ex. "https://formspree.io/f/xxxxxxx"

  function initForm() {
    const form = $('#quoteForm'); if (!form) return;
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const btn = form.querySelector('button[type=submit]');
      const showSuccess = () => {
        form.classList.add('sent');
        $('#formSuccess').classList.add('show');
        $('#formSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
      if (!ENDPOINT) { showSuccess(); return; } // mode démonstration
      try {
        btn.disabled = true; btn.textContent = 'Envoi…';
        const res = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (res.ok) showSuccess();
        else { btn.disabled = false; btn.textContent = 'Envoyer ma demande'; alert("Une erreur est survenue. Réessayez ou appelez le 079 761 91 02."); }
      } catch {
        btn.disabled = false; btn.textContent = 'Envoyer ma demande';
        alert("Connexion impossible. Réessayez ou appelez le 079 761 91 02.");
      }
    });
  }

  /* ---------- Année du copyright ---------- */
  function initYear() { const y = $('#year'); if (y) y.textContent = new Date().getFullYear(); }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderGallery();
    initLightbox();
    initBeforeAfter();
    initNav();
    initReveal();
    initWhatsApp();
    initForm();
    initYear();
  });
})();
