(function () {
  var bar = document.getElementById('topbar');
  var hero = document.querySelector('.hero, .page-hero');
  function onScroll() {
    var limit = hero ? hero.offsetHeight - 70 : 0;
    bar.classList.toggle('solid', window.scrollY > limit);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Click-to-enlarge for photos and figures (logos and icons excluded)
  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var closeLabel = lang === 'fr' ? 'Fermer' : 'Close';
  var imgs = document.querySelectorAll('main img, .hero .portrait img');
  var box, boxImg, boxCap, lastFocus;

  function close() {
    if (!box) return;
    box.classList.remove('open');
    document.body.classList.remove('zoom-open');
    if (lastFocus) lastFocus.focus();
  }
  function open(img) {
    if (!box) {
      box = document.createElement('div');
      box.className = 'zoom';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.innerHTML = '<button class="zoom-close" type="button" aria-label="' + closeLabel + '">&times;</button><figure><img alt=""><figcaption></figcaption></figure>';
      document.body.appendChild(box);
      boxImg = box.querySelector('img');
      boxCap = box.querySelector('figcaption');
      box.addEventListener('click', function (e) { if (e.target !== boxImg) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    }
    lastFocus = document.activeElement;
    boxImg.src = img.currentSrc || img.src;
    boxImg.alt = img.alt || '';
    var fig = img.closest('figure');
    var cap = fig && fig.querySelector('figcaption');
    boxCap.textContent = cap ? cap.textContent.trim() : (img.alt || '');
    box.classList.add('open');
    document.body.classList.add('zoom-open');
    box.querySelector('.zoom-close').focus();
  }
  Array.prototype.forEach.call(imgs, function (img) {
    if (img.closest('.socials-row, .icons, a') || img.classList.contains('course-logo')) return;
    img.classList.add('zoomable');
    img.setAttribute('tabindex', '0');
    img.addEventListener('click', function () { open(img); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); }
    });
  });
})();
