document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');

    function showSections() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('show');
            }
        });
    }

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', showSections);
}); 