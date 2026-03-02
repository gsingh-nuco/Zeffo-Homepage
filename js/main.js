// Hero background slideshow
(function () {
  var images = document.querySelectorAll('.hero__bg-img');
  if (images.length < 2) return;

  var current = 0;

  setInterval(function () {
    images[current].classList.remove('hero__bg-img--active');
    current = (current + 1) % images.length;
    images[current].classList.add('hero__bg-img--active');
  }, 4000);
})();

// Mobile menu toggle
(function () {
  const menuBtn = document.querySelector('.header__menu-btn');
  const nav = document.querySelector('.header__nav');

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener('click', function () {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isOpen);
    menuBtn.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    nav.classList.toggle('is-open');
  });

  // Close menu when a nav link is clicked
  nav.addEventListener('click', function (e) {
    if (e.target.classList.contains('header__nav-link')) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
      nav.classList.remove('is-open');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
      nav.classList.remove('is-open');
      menuBtn.focus();
    }
  });
})();

// FAQ category tabs
(function () {
  const tabs = document.querySelectorAll('.faq__tab');
  const groups = document.querySelectorAll('.faq__group');

  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var category = tab.getAttribute('data-category');

      // Update tabs
      tabs.forEach(function (t) {
        t.classList.remove('faq__tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('faq__tab--active');
      tab.setAttribute('aria-selected', 'true');

      // Show/hide groups and close any open answers
      groups.forEach(function (group) {
        if (group.getAttribute('data-category') === category) {
          group.style.display = '';
        } else {
          group.style.display = 'none';
          // Collapse open answers in hidden group
          group.querySelectorAll('.faq__question').forEach(function (q) {
            q.setAttribute('aria-expanded', 'false');
            q.nextElementSibling.style.maxHeight = null;
          });
        }
      });
    });
  });
})();

// FAQ accordion
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq__question');
    if (!btn) return;

    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    var answer = btn.nextElementSibling;
    var group = btn.closest('.faq__group');

    // Close all others in same group
    if (group) {
      group.querySelectorAll('.faq__question').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          other.nextElementSibling.style.maxHeight = null;
        }
      });
    }

    // Toggle current
    btn.setAttribute('aria-expanded', !isOpen);
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
})();