/* ============================================
   PROJECT.JS — renders a project detail page
   ============================================ */

gsap.registerPlugin(ScrollTrigger);


/* ── Nav tint ──────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const a = window.scrollY > 40 ? 0.95 : 0.82;
    nav.style.background = dark ? `rgba(28,28,30,${a})` : `rgba(246,246,250,${a})`;
}, { passive: true });

/* ── Custom cursor ─────────────────────────── */
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = -100, my = -100, fx = -100, fy = -100;
let galleryImages = [];
let lbIndex = 0;
document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});
(function tick() {
    fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px'; follower.style.top = fy + 'px';
    requestAnimationFrame(tick);
})();
document.addEventListener('mouseover', e => {
    const hover = !!e.target.closest('a, button, .pj-gallery-item');
    cursor.classList.toggle('hover', hover);
    follower.classList.toggle('hover', hover);
});

/* ── Load project ──────────────────────────── */
const id      = new URLSearchParams(window.location.search).get('id');
const project = id && PROJECTS[id];

if (!project) {
    document.querySelector('.pj-hero').style.display = 'none';
    document.querySelector('.pj-info').innerHTML =
        '<div style="max-width:600px;margin:120px auto;padding:24px;text-align:center">' +
        '<h1 style="font-size:32px;font-weight:800;margin-bottom:16px">Project niet gevonden</h1>' +
        '<a href="index.html#work" style="color:var(--accent)">← Terug naar portfolio</a></div>';
} else {
    renderProject(project);
    document.title = project.title + ' — Alicia Roggema';
}

/* ── Render ────────────────────────────────── */
function renderProject(p) {
    // Hero
    const placeholder = document.getElementById('pjHeroPlaceholder');
    placeholder.classList.add(p.coverGradient);
    placeholder.textContent = p.coverIcon;

    const cover = document.getElementById('pjHeroCover');
    if (p.cover) {
        cover.alt     = p.title;
        cover.onload  = () => cover.classList.add('loaded');
        cover.onerror = () => cover.remove();
        cover.src     = p.cover;
        if (cover.complete && cover.naturalWidth) cover.classList.add('loaded');
    } else {
        cover.remove();
    }

    document.getElementById('pjCat').textContent = p.categoryLabel;

    // Info
    document.getElementById('pjTitle').textContent    = p.title;
    document.getElementById('pjYear').textContent     = p.year;
    document.getElementById('pjLocation').textContent = p.location;
    document.getElementById('pjCategory').textContent = p.categoryLabel;

    // Tools
    const toolsEl = document.getElementById('pjTools');
    (p.tools || []).forEach(tool => {
        const span = document.createElement('span');
        span.className = 'pj-tool';
        span.textContent = tool;
        toolsEl.appendChild(span);
    });

    // Description — preserve line breaks as paragraphs
    const descEl = document.getElementById('pjDescription');
    const paras  = p.description.trim().split(/\n\s*\n/);
    descEl.innerHTML = paras.map(t => `<p>${t.trim().replace(/\n/g, '<br>')}</p>`).join('');

    // Video
    renderVideo(p);

    // Gallery
    renderGallery(p);

    // Next project
    renderNext(p);

    // Animate in
    gsap.from('.pj-hero', { opacity: 0, duration: 0.8, ease: 'power2.out' });
    gsap.from('.pj-info-inner > *', {
        opacity: 0, y: 32,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2,
    });
}

/* ── Video ─────────────────────────────────── */
function renderVideo(p) {
    if (!p.video) return;

    const section = document.getElementById('pjVideoSection');
    const wrap    = document.getElementById('pjVideoWrap');
    section.style.display = 'block';

    const url = p.video.trim();

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        // Extract video ID and build embed URL
        const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        const embedUrl = match
            ? `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`
            : url;
        const iframe = document.createElement('iframe');
        iframe.src             = embedUrl;
        iframe.allowFullscreen = true;
        iframe.allow           = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        wrap.appendChild(iframe);

    } else if (url.includes('vimeo.com')) {
        const match = url.match(/vimeo\.com\/(\d+)/);
        const embedUrl = match ? `https://player.vimeo.com/video/${match[1]}?dnt=1` : url;
        const iframe = document.createElement('iframe');
        iframe.src             = embedUrl;
        iframe.allowFullscreen = true;
        iframe.allow           = 'autoplay; fullscreen; picture-in-picture';
        wrap.appendChild(iframe);

    } else {
        // Local video file (mp4, webm, etc.)
        const video = document.createElement('video');
        video.controls    = true;
        video.playsInline = true;
        if (p.cover) video.poster = p.cover;
        const source = document.createElement('source');
        source.src  = url;
        source.type = url.endsWith('.webm') ? 'video/webm' : 'video/mp4';
        video.appendChild(source);
        wrap.appendChild(video);
    }

    gsap.from(section, {
        opacity: 0, y: 24, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 88%', once: true }
    });
}

/* ── Gallery ───────────────────────────────── */
function renderGallery(p) {
    galleryImages = (p.images || []).filter(Boolean);
    const gallery = document.getElementById('pjGallery');
    const section = document.getElementById('pjGallerySection');

    if (!galleryImages.length) {
        section.setAttribute('data-empty', 'true');
        return;
    }

    galleryImages.forEach((src, i) => {
        const item = document.createElement('div');
        item.className = 'pj-gallery-item' + (i === 0 ? ' wide' : '');

        const img = document.createElement('img');
        img.alt   = `${p.title} — foto ${i + 1}`;
        img.src   = src;
        item.appendChild(img);

        item.addEventListener('click', () => openLightbox(i));
        gallery.appendChild(item);
    });
}

/* ── Lightbox ──────────────────────────────── */
function openLightbox(index) {
    lbIndex = index;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    img.src = galleryImages[lbIndex];
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateLightboxButtons();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

function lightboxStep(dir) {
    lbIndex = Math.max(0, Math.min(galleryImages.length - 1, lbIndex + dir));
    document.getElementById('lightboxImg').src = galleryImages[lbIndex];
    updateLightboxButtons();
}

function updateLightboxButtons() {
    document.getElementById('lbPrev').style.opacity = lbIndex === 0 ? '0.3' : '1';
    document.getElementById('lbNext').style.opacity = lbIndex === galleryImages.length - 1 ? '0.3' : '1';
}

document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  lightboxStep(-1);
    if (e.key === 'ArrowRight') lightboxStep(1);
});

/* ── Next project ──────────────────────────── */
function renderNext(current) {
    const keys = Object.keys(PROJECTS);
    const idx  = keys.indexOf(id);
    const nextId = keys[idx + 1];
    if (!nextId) return;

    const next    = PROJECTS[nextId];
    const section = document.getElementById('pjNext');
    section.style.display = 'block';

    document.getElementById('pjNextCard').href  = `project.html?id=${nextId}`;
    document.getElementById('pjNextCat').textContent   = next.categoryLabel;
    document.getElementById('pjNextTitle').textContent = next.title;

    const thumb = document.getElementById('pjNextThumb');
    thumb.textContent = next.coverIcon;

    if (next.cover) {
        const img = document.createElement('img');
        img.src = next.cover;
        img.alt = next.title;
        img.onerror = () => img.remove();
        thumb.appendChild(img);
    }

    gsap.from('#pjNext', {
        opacity: 0, y: 24,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '#pjNext', start: 'top 88%', once: true }
    });
}
