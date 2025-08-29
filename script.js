const typeEffect = document.querySelector('.type-effect');
const roles = ['Java Developer', 'Web Developer'];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = roles[index];
  const displayed = current.substring(0, charIndex);
  typeEffect.textContent = displayed;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % roles.length;
    setTimeout(type, 800);
  }
}

type();
