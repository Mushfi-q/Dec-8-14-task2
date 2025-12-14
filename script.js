
document.addEventListener('DOMContentLoaded', function () {

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        const toggleButton = item.querySelector('.faq-toggle');
        const answer = item.querySelector('.faq-answer');
        const header = item.querySelector('div:first-child');

        function toggleFAQ() {
            const isOpen = answer.classList.contains('active');

            faqItems.forEach(function (otherItem) {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherButton = otherItem.querySelector('.faq-toggle');
                otherAnswer.classList.remove('active');
                otherButton.textContent = '+';
            });

            if (!isOpen) {
                answer.classList.add('active');
                toggleButton.textContent = '×';
            }
        }

        toggleButton.addEventListener('click', toggleFAQ);
        header.addEventListener('click', toggleFAQ);
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.navi nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function () {
            nav.classList.toggle('show');
        });
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
