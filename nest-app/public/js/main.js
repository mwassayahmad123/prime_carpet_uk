(function () {
  var toggle = document.querySelector('.js-nav-toggle');
  var menu = document.querySelector('.js-nav-menu');

  function closeMenu() {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-open');
      menu.classList.toggle('is-open');
    });
  }

  document.querySelectorAll('.js-nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.querySelectorAll('.js-faq-item').forEach(function (item) {
    var question = item.querySelector('.js-faq-question');
    var icon = item.querySelector('.js-faq-icon');

    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.js-faq-item').forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.js-faq-question').setAttribute('aria-expanded', 'false');
        other.querySelector('.js-faq-icon').textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
        icon.textContent = '−';
      }
    });
  });

  document.querySelectorAll('.js-image-carousel').forEach(function (carousel) {
    var slides = carousel.querySelectorAll('.carousel__slide');
    var prevBtn = carousel.querySelector('.js-carousel-prev');
    var nextBtn = carousel.querySelector('.js-carousel-next');

    if (slides.length < 2) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      return;
    }

    var current = 0;
    var timer;

    function showSlide(index) {
      slides[current].classList.remove('is-active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('is-active');
    }

    function startTimer() {
      timer = setInterval(function () {
        showSlide(current + 1);
      }, 3000);
    }

    function resetTimer() {
      clearInterval(timer);
      startTimer();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        showSlide(current - 1);
        resetTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        showSlide(current + 1);
        resetTimer();
      });
    }

    startTimer();
  });

  var form = document.querySelector('.js-contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var address = form.querySelector('#address').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var service = form.querySelector('#service').value;
      var datetime = form.querySelector('#datetime').value;
      var message = form.querySelector('#message').value.trim();

      if (!name || !address || !phone) return;

      var whatsappNumber = form.dataset.whatsapp;
      var companyName = form.dataset.company;

      var lines = [
        '*New Appointment Request - ' + companyName + '*',
        '',
        '*Name:* ' + name,
        '*Address:* ' + address,
        '*Phone:* ' + phone,
        '*Service:* ' + (service || 'Not specified'),
        '*Preferred Date & Time:* ' + (datetime || 'Not specified'),
        '*Message:* ' + (message || 'None'),
      ];

      var url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank');
    });
  }
})();
