const links = document.querySelectorAll('[data-target]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {

    // this is the section currently showing (current section)
    var currSection = document.querySelector('section.show');

    // this is the 'data-target' attribute (where the button should lead to)
    var nextPageAttr = this.getAttribute('data-target');

    // this uses the name of the next page (nextPageAttr)
    // to find the page we want to show
    var nextPage = document.querySelector('[data-name='+ nextPageAttr +']');

    // this hides the previous page…
    currSection.classList.remove('show');
    // …and shows the next one
    nextPage.classList.add('show');
  });
}
