const dot = document.querySelector('.dot');
const panel = document.querySelector('.panel');
const timeline = document.getElementById('timeline');

timeline.addEventListener('click', e => {
    const dot = e.target.closest('.dot');
    if (!dot) return;

    const item = dot.closest('.item');
    const panel = item.querySelector('.panel');
    panel.classList.toggle('show');
});
