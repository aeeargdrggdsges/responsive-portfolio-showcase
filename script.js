/**
 * LOGIKA INTERAKTIF PORTOFOLIO & FORMULIR KONTAK
 * 
 * Fitur:
 * - Render Proyek Dinamis dari projects-data.js
 * - Filter Kategori Proyek
 * - Modal Detail Proyek Interaktif & Ramah Aksesibilitas
 * - Integrasi Formulir Kontak Langsung ke Email (Web3Forms API + Anti-spam Honeypot)
 * - Mode Gelap / Terang (Dark / Light Mode) dengan Penyimpanan LocalStorage
 * - Navigasi Responsif & Penanda Bagian Aktif saat Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Data & Konfigurasi
  initSiteInfo();
  initProjects();
  initContactForm();
  initThemeToggle();
  initMobileMenu();
  initScrollSpy();
});

/**
 * 1. Menampilkan Info Profil & Statistik dari data
 */
function initSiteInfo() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Nama & Profesi
  const ownerNameElements = document.querySelectorAll('.js-owner-name');
  ownerNameElements.forEach(el => el.textContent = SITE_CONFIG.ownerName);

  const professionEl = document.querySelector('.js-profession');
  if (professionEl) professionEl.textContent = SITE_CONFIG.profession;

  const taglineEl = document.querySelector('.js-tagline');
  if (taglineEl) taglineEl.textContent = SITE_CONFIG.tagline;

  const locationEl = document.querySelector('.js-location');
  if (locationEl) locationEl.textContent = SITE_CONFIG.location;

  const emailEl = document.querySelector('.js-contact-email');
  if (emailEl) {
    emailEl.textContent = SITE_CONFIG.contactEmail;
    emailEl.href = `mailto:${SITE_CONFIG.contactEmail}`;
  }

  // Render Statistik
  const statsContainer = document.getElementById('stats-container');
  if (statsContainer && SITE_CONFIG.stats) {
    statsContainer.innerHTML = SITE_CONFIG.stats.map(stat => `
      <div class="stat-item">
        <div class="stat-item__value">${stat.value}</div>
        <div class="stat-item__label">${stat.label}</div>
      </div>
    `).join('');
  }

  // Render Keahlian
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && SITE_CONFIG.skills) {
    skillsContainer.innerHTML = SITE_CONFIG.skills.map((skill, idx) => `
      <div class="workflow-card">
        <div class="workflow-card__number">0${idx + 1}</div>
        <h3 class="workflow-card__title">${skill.name}</h3>
        <p class="workflow-card__desc">${skill.level}</p>
      </div>
    `).join('');
  }
}

/**
 * 2. Render Proyek & Sistem Filter Kategori
 */
let currentCategory = 'all';

function initProjects() {
  if (typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.projects) return;

  renderProjects(SITE_CONFIG.projects);

  // Event listener tombol filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const filter = e.target.getAttribute('data-filter');
      currentCategory = filter;

      if (filter === 'all') {
        renderProjects(SITE_CONFIG.projects);
      } else {
        const filtered = SITE_CONFIG.projects.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });

  // Modal event listeners
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Tutup modal dengan tombol Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

function renderProjects(projectsList) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (projectsList.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        Belum ada proyek dalam kategori ini.
      </div>
    `;
    return;
  }

  grid.innerHTML = projectsList.map(project => `
    <article class="project-card" data-id="${project.id}" role="button" tabindex="0" aria-label="Lihat detail ${project.title}">
      <div class="project-card__thumbnail-wrapper">
        <img class="project-card__image" src="${project.image}" alt="${project.title}" loading="lazy" />
        <span class="project-card__badge">${project.categoryLabel}</span>
      </div>
      <div class="project-card__content">
        <div class="project-card__meta">
          <span>${project.client}</span>
          <span>${project.year}</span>
        </div>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__summary">${project.summary}</p>
        <div class="project-card__tags">
          ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  // Pasang klik listener ke tiap card
  const cards = grid.querySelectorAll('.project-card');
  cards.forEach(card => {
    const clickHandler = () => {
      const id = card.getAttribute('data-id');
      const project = SITE_CONFIG.projects.find(p => p.id === id);
      if (project) openModal(project);
    };

    card.addEventListener('click', clickHandler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clickHandler();
      }
    });
  });
}

function openModal(project) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  document.getElementById('modal-img').src = project.image;
  document.getElementById('modal-img').alt = project.title;
  document.getElementById('modal-category').textContent = project.categoryLabel;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-client').textContent = project.client;
  document.getElementById('modal-year').textContent = project.year;
  document.getElementById('modal-description').textContent = project.description;

  const demoBtn = document.getElementById('modal-demo-btn');
  if (demoBtn) {
    if (project.demoUrl) {
      demoBtn.href = project.demoUrl;
      demoBtn.style.display = 'inline-flex';
    } else {
      demoBtn.style.display = 'none';
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Kunci scroll halaman
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Kembalikan scroll
}

/**
 * 3. Penanganan Formulir Kontak dengan Proteksi Anti-Spam (Honeypot) & Web3Forms
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Pemeriksaan Honeypot Anti-Spam
    // Jika kolom tersembunyi bot terisi, hentikan (ini adalah bot spam)
    const honeypot = form.querySelector('[name="_botcheck"]');
    if (honeypot && honeypot.value !== '') {
      console.warn('Bot spam terdeteksi.');
      showFormStatus('success', 'Pesan Anda telah diterima. Terima kasih!');
      form.reset();
      return;
    }

    // Ambil nilai input
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    // Validasi Sederhana
    if (!name || !email || !message) {
      showFormStatus('error', 'Mohon lengkapi semua kolom yang wajib diisi.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus('error', 'Format alamat email tidak valid.');
      return;
    }

    // Ubah status tombol jadi sedang mengirim
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      <span>Mengirim Pesan...</span>
    `;

    try {
      const accessKey = SITE_CONFIG.web3formsAccessKey;

      // Jika masih key placeholder demo, simulasikan pengiriman sukses
      // dan beri petunjuk ramah kepada pengguna
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        await new Promise(resolve => setTimeout(resolve, 800)); // Delay efek nyata
        showFormStatus(
          'success',
          `Pesan berhasil dikirim! (Demo: Untuk mengirim ke email asli ${SITE_CONFIG.contactEmail}, masukkan Access Key gratis Anda di file projects-data.js).`
        );
        form.reset();
      } else {
        // Kirim request ke Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: name,
            email: email,
            subject: subject || `Pesan Portofolio Baru dari ${name}`,
            message: message,
            from_name: name
          })
        });

        const result = await response.json();

        if (response.status === 200) {
          showFormStatus('success', 'Terima kasih! Pesan Anda telah berhasil terkirim langsung ke email saya.');
          form.reset();
        } else {
          showFormStatus('error', result.message || 'Gagal mengirim pesan. Silakan hubungi langsung via email.');
        }
      }
    } catch (err) {
      console.error('Error pengiriman formulir:', err);
      showFormStatus('error', 'Terjadi gangguan jaringan. Silakan kirim langsung via email atau coba sesaat lagi.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function showFormStatus(type, message) {
    if (!statusBox) return;
    statusBox.style.display = 'block';
    statusBox.className = `form-status form-status--${type}`;
    statusBox.textContent = message;

    // Scroll halus ke pesan status jika di perangkat mobile
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * 4. Mode Gelap & Terang (Theme Toggle)
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(toggleBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'dark') {
    // Ikon Matahari (untuk beralih ke terang)
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    btn.setAttribute('aria-label', 'Beralih ke mode terang');
  } else {
    // Ikon Bulan (untuk beralih ke gelap)
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    btn.setAttribute('aria-label', 'Beralih ke mode gelap');
  }
}

/**
 * 5. Menu Responsif Mobile
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Tutup menu otomatis saat link diklik
  const navLinks = nav.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

/**
 * 6. Penanda Link Aktif saat Scroll (ScrollSpy)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// Inisialisasi animasi CSS inline untuk spinner
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
