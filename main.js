const links = document.querySelectorAll('[data-target]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {

    // this is the section currently showing
    //(current section)
    const currSection = document.querySelector('section.show');

    // this is the 'data-target' attribute
    //(where the button should lead to)
    const nextSectionAttr = this.getAttribute('data-target');

    // this uses the name of the next page (nextPageAttr)
    // to find the page we want to show
    const nextSection = document.querySelector('[data-name='+ nextSectionAttr +']');

    // this hides the previous page…
    currSection.classList.remove('show');
    // …and shows the next one
    nextSection.classList.add('show');
  });
}
