tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('mouseover', () => {
    tab.classList.add('active');
  });
  tab.addEventListener('mouseout', () => {
    tab.classList.remove('active');
  });
});

let carousel_position = 35;
let active = 1;
const right = document.querySelector('#right_arrow');
const left = document.querySelector('#left_arrow');
const carousel = document.querySelector('.carousel');
right.addEventListener('click', () => {
  if (carousel_position != -835) {
    carousel.classList.add('right');
    carousel.addEventListener('animationend', () => {
      carousel.classList.remove('right');
    });
    carousel.style.left = `${carousel_position - 290}px`;
    carousel_position -= 290;
    circle_container.classList.remove(`active${active}`);
    active += 1;
    circle_container.classList.add(`active${active}`);
  }
});
left.addEventListener('click', () => {
  if (carousel_position != 35) {
    carousel.classList.add('left');
    carousel.addEventListener('animationend', () => {
      carousel.classList.remove('left');
    });
    carousel.style.left = `${carousel_position + 290}px`;
    carousel_position += 290;
    circle_container.classList.remove(`active${active}`);
    active -= 1;
    circle_container.classList.add(`active${active}`);
  }
});

const circle_container = document.querySelector('.circle_container');
circle_container.classList.add('active1');

const circles = document.querySelectorAll('.circle');
circles.forEach((circle) => {
  circle.addEventListener('click', (e) => {
    if (
      !e.target.parentElement.classList.contains(
        `active${e.target.id.slice(-1)}`
      )
    ) {
      carousel.style.left = `${(e.target.id.slice(-1) - 1) * -290 + 35}px`;
      e.target.parentElement.classList = 'circle_container';
      e.target.parentElement.classList.add(`active${e.target.id.slice(-1)}`);
      carousel_position = (e.target.id.slice(-1) - 1) * -290 + 35;
      active = Number(e.target.id.slice(-1));
    }
  });
});
