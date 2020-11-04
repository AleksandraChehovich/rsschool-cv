const correctors = document.querySelectorAll('.inputs_item');
console.log(correctors);

function correctImg() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

correctors.forEach(cor => cor.addEventListener('change', correctImg));
// correctors.forEach(corrector => corrector.addEventListener('mousemove', correctImg));
