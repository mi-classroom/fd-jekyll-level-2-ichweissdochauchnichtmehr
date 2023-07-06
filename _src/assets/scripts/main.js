/* Page Navigation
############################################################################ */
const addPageNavigation = () => {
  const pageNavigationTarget = document.querySelector('[data-js-page-navigation]');
  const pageSections = document.querySelectorAll('.main-content-wrap > [title]');

  const pageNavigationItem = [...pageSections].map(section => {
    const sectionTitle = section.getAttribute('title');
    const sectionId = section.getAttribute('id');
    return `<li><a href="#${sectionId}">${sectionTitle}</a></li>`;
  });

  const pageNavigation = `<ul class="page-navigation">${pageNavigationItem.join('')}</ul>`;

  pageNavigationTarget.innerHTML = pageNavigation;
};

/* Screwed Elements
############################################################################ */

const observeElements = () => {

  const elementsToBeObserved = document.querySelectorAll('.is-screwed');
  elementsToBeObserved.forEach((element) => element.dataset.jsObserve = '');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.isIntersecting) {
        target.dataset.jsObserve = 'in-view';
      } else {
        // target.dataset.jsObserve = '';
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const observedElements = document.querySelectorAll('[data-js-observe]');
  observedElements.forEach((el) => observer.observe(el));
};

/* ########################################################################## */
/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  addPageNavigation();
});
