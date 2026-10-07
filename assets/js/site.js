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
})();
