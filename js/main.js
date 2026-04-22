/* ============================================
   MAIN.JS — Alicia Roggema Portfolio
   ============================================ */

gsap.registerPlugin(ScrollTrigger);


/* ── Loader ─────────────────────────────────── */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        animateHeroChars();
    }, 1500);
});

/* ── Hero — chars + memoji ──────────────────── */
function animateHeroChars() {
    // Blur-in title chars — Apple Intelligence style
    gsap.to('.hero-title .char', {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        stagger: 0.04,
        ease: 'power3.out',
        delay: 0.1,
    });

    // Memoji springs in after title finishes
    gsap.to('.hero-memoji-wrap', {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.1,
        ease: 'elastic.out(1, 0.55)',
        delay: 0.6,
    });
}

/* ── Custom cursor ──────────────────────────── */
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = -100, my = -100, fx = -100, fy = -100;

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
    const h = !!e.target.closest('a, button, .skill, .project-card');
    cursor.classList.toggle('hover', h);
    follower.classList.toggle('hover', h);
});

/* ── Magnetic buttons ───────────────────────── */
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', function(e) {
        const r = this.getBoundingClientRect();
        gsap.to(this, {
            x: (e.clientX - r.left - r.width  / 2) * 0.3,
            y: (e.clientY - r.top  - r.height / 2) * 0.3,
            duration: 0.4, ease: 'power2.out'
        });
    });
    el.addEventListener('mouseleave', function() {
        gsap.to(this, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,.5)' });
    });
});

/* ── Nav tint on scroll ─────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const a = window.scrollY > 60 ? 0.95 : 0.82;
    nav.style.background = dark
        ? `rgba(28,28,30,${a})`
        : `rgba(246,246,250,${a})`;
}, { passive: true });

/* ── Hero parallax on scroll ────────────────── */
gsap.to('.hero-left', {
    yPercent: -12,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
});
gsap.to('.hero-memoji-wrap', {
    yPercent: -6,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.8 }
});

/* ── Statement section — Apple "Pro." scroll ── */
const stSection = document.querySelector('.statement-section');
const stWords   = document.querySelectorAll('.st-word');
let currentSt   = -1;

function updateStatement() {
    if (!stSection) return;
    const rect    = stSection.getBoundingClientRect();
    const scrolled = -rect.top;
    const total   = stSection.offsetHeight - window.innerHeight;
    if (scrolled < 0) { stWords.forEach(w => w.classList.remove('active','exit')); return; }
    if (scrolled > total) return;
    const idx = Math.min(Math.floor((scrolled / total) * stWords.length), stWords.length - 1);
    if (idx === currentSt) return;
    stWords.forEach((w, i) => {
        w.classList.remove('active', 'exit');
        if (i === idx)       w.classList.add('active');
        else if (i < idx)    w.classList.add('exit');
    });
    currentSt = idx;
}
window.addEventListener('scroll', updateStatement, { passive: true });
updateStatement();

/* ── Word reveal ────────────────────────────── */
const rwords = document.querySelectorAll('.rword');
ScrollTrigger.create({
    trigger: '.tagline-section',
    start: 'top 75%', end: 'bottom 25%',
    scrub: 0.8,
    onUpdate(self) {
        const lit = Math.round(self.progress * rwords.length);
        rwords.forEach((w, i) => w.classList.toggle('lit', i < lit));
    }
});

/* ── Portfolio filter ───────────────────────── */
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        filterProjects(this.dataset.filter);
    });
});

function filterProjects(filter) {
    const cards = Array.from(document.querySelectorAll('.project-card'));
    let vi = 0;
    cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
            card.classList.remove('filtered-out');
            gsap.fromTo(card,
                { opacity: 0, y: 16, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, delay: vi * 0.06, ease: 'power2.out' }
            );
            vi++;
        } else {
            gsap.to(card, {
                opacity: 0, scale: 0.96, duration: 0.25, ease: 'power2.in',
                onComplete: () => card.classList.add('filtered-out')
            });
        }
    });
}

/* ── Card click → project page ──────────────── */
document.querySelectorAll('.project-card[data-id]').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = `project.html?id=${card.dataset.id}`;
    });
});


/* ── Fade-up reveals ────────────────────────── */
document.querySelectorAll('.fade-up').forEach((el, i) => {
    ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter() { setTimeout(() => el.classList.add('visible'), (i % 5) * 80); }
    });
});

/* ── About image parallax ───────────────────── */
gsap.to('.about-img-wrap', {
    yPercent: -6, ease: 'none',
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top bottom', end: 'bottom top',
        scrub: 1.5,
    }
});
