function modifyNavToShowActiveSection() {
  const currentPath = window.location.pathname;

  const sectionsMap = {
    '/': 'section-0',
    '/about/': 'section-1',
    '/contact/': 'section-2'
  };

  const navId = sectionsMap[currentPath];

  if (navId) {
    const navLink = document.getElementById(navId);
    if (navLink) {
      navLink.classList.add('fw-bold');
    }
  }
}

window.addEventListener('DOMContentLoaded', modifyNavToShowActiveSection);