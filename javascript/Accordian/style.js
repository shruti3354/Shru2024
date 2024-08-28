console.log(document)


const accordions = document.getElementsByClassName('contents');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function() {
    this.classList.toggle('active');
  });
}