const question = document.querySelectorAll('.question');

question.forEach((fag) => {
    fag.addEventListener('click', () => {
        const answer = fag.querySelector('.answer');
        const span = fag.querySelector('.icon_q');

        answer.classList.toggle('answer__active');
        span.classList.toggle('activo_rotated');
    });
});