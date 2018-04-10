const links = document.querySelectorAll('[data-target]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {


    // this should be the id of where we are going next
    var nextPageAttr = this.getAttribute('data-target');
    console.log('what are we moving to: ' + nextPageAttr)

    // this should be the page we are shutting down (current page)
    var currSection = document.querySelector('section.show');
    console.log('where are we now: ' + currSection)

    // this should be where we go next
    var nextPage = document.querySelector('[data-name='+ nextPageAttr +']');
    console.log('what page are we going to show: ' + nextPage)
    nextPage.classList.add('show');


    // this should be the id of the page we are shutting down (current page)
    var currAttr = currSection.getAttribute('data-name');
    console.log('what page should we shut down: ' + currAttr)
    currSection.classList.remove('show');

  });
}
