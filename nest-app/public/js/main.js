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

  var form = document.querySelector('.js-contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var service = form.querySelector('#service').value;
      var datetime = form.querySelector('#datetime').value;
      var message = form.querySelector('#message').value.trim();

      if (!name || !phone) return;

      var whatsappNumber = form.dataset.whatsapp;
      var companyName = form.dataset.company;

      var lines = [
        '*New Appointment Request - ' + companyName + '*',
        '',
        '*Name:* ' + name,
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
