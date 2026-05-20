// HAMBURGER MENU
function toggleMenu() {
  const hb = document.getElementById('hamburger');
  const mm = document.getElementById('mobileMenu');
  hb.classList.toggle('open');
  mm.classList.toggle('open');
}

// STAR RATINGS
const ratings = { overall: 0, prof: 0 };

function rate(type, val) {
  ratings[type] = val;
  const stars = document.querySelectorAll('#stars-' + type + ' .star');
  stars.forEach((s, i) => {
    s.classList.toggle('active', i < val);
    s.classList.toggle('filled', i < val);
  });
}

// CONTACT FORM VALIDATION
function submitContact(e) {
  e.preventDefault();
  let valid = true;
  const fields = [
    { id: 'c-fname', err: 'err-fname', check: v => v.trim().length > 1 },
    { id: 'c-lname', err: 'err-lname', check: v => v.trim().length > 1 },
    { id: 'c-email', err: 'err-email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { id: 'c-service', err: 'err-service', check: v => v !== '' },
    { id: 'c-message', err: 'err-message', check: v => v.trim().length > 10 },
  ];
  fields.forEach(f => {
    const el = document.getElementById(f.id);
    const errEl = document.getElementById(f.err);
    if (!f.check(el.value)) {
      errEl.style.display = 'block';
      el.style.borderColor = 'var(--danger)';
      valid = false;
    } else {
      errEl.style.display = 'none';
      el.style.borderColor = '';
    }
  });
  if (valid) {
    document.getElementById('contactForm').reset();
    const s = document.getElementById('contact-success');
    s.style.display = 'block';
    setTimeout(() => { s.style.display = 'none'; }, 6000);
  }
}

// FEEDBACK FORM VALIDATION
function submitFeedback(e) {
  e.preventDefault();
  let valid = true;

  const fName = document.getElementById('f-name');
  const fEmail = document.getElementById('f-email');
  const fService = document.getElementById('f-service');
  const errFName = document.getElementById('err-fname2');
  const errFEmail = document.getElementById('err-femail');
  const errFService = document.getElementById('err-fservice');
  const errRating = document.getElementById('err-rating');

  if (fName.value.trim().length < 2) { errFName.style.display='block'; fName.style.borderColor='var(--danger)'; valid=false; }
  else { errFName.style.display='none'; fName.style.borderColor=''; }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)) { errFEmail.style.display='block'; fEmail.style.borderColor='var(--danger)'; valid=false; }
  else { errFEmail.style.display='none'; fEmail.style.borderColor=''; }

  if (fService.value === '') { errFService.style.display='block'; valid=false; }
  else { errFService.style.display='none'; }

  if (ratings.overall === 0) { errRating.style.display='block'; valid=false; }
  else { errRating.style.display='none'; }

  if (valid) {
    document.getElementById('feedbackForm').reset();
    ratings.overall = 0; ratings.prof = 0;
    document.querySelectorAll('.star').forEach(s => { s.classList.remove('active','filled'); });
    const s = document.getElementById('feedback-success');
    s.style.display = 'block';
    setTimeout(() => { s.style.display = 'none'; }, 6000);
  }
}

// NAV SCROLL EFFECT
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  nav.style.background = window.scrollY > 30 ? 'rgba(8,10,13,0.98)' : 'rgba(8,10,13,0.92)';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const hb = document.getElementById('hamburger');
    const mm = document.getElementById('mobileMenu');
    hb.classList.remove('open');
    mm.classList.remove('open');
  });
});