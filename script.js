document.addEventListener('DOMContentLoaded', () => {
    let countdownNumber = 5;
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');
    const fireworksElement = document.getElementById('fireworks');
    
    const countdownInterval = setInterval(() => {
        countdownNumber--;
        countdownElement.textContent = countdownNumber;
        if (countdownNumber === 0) {
            clearInterval(countdownInterval);
            countdownElement.classList.add('hidden');
            messageElement.classList.remove('hidden');
            fireworksElement.classList.remove('hidden');
            setTimeout(() => {
                window.location.href = 'gift.html';  // Redirige a la página del sobre
            }, 3000);  // Espera 3 segundos antes de redirigir
        }
    }, 1000);
});
