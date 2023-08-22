// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


const expandButton = document.querySelector('.realizations button');

expandButton.addEventListener('click', expand);

function expand() {
  const wrapper = document.querySelector('.realizations .wrapper:last-of-type');

  if (!wrapper.classList.contains('expand')) {
    wrapper.setAttribute('style', 'height: 3000px;');
  } else {
    wrapper.setAttribute('style', '');
  }

  wrapper.classList.toggle('expand');
}