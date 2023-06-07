let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

for (let i of hasTooltips) {
  let title = i.getAttribute('title');
  i.insertAdjacentHTML('afterEnd', `<div class = 'tooltip'> ${title} </div>`);

  i.addEventListener('click', (e) => {
    e.preventDefault();
    let tooltip = i.nextSibling;
    tooltip.classList.toggle('tooltip_active');
  });
}