document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado. Gracias por contactarnos.');
});

document.getElementById('loyaltyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loyaltyCode = document.getElementById('loyaltyCode').value;
    const messageElement = document.getElementById('loyaltyMessage');

    // Lista de códigos de fidelización válidos
    const validCodes = ["12345", "67890", "ABCDE", "FGHIJ", "KLMNO"];

    if (validCodes.includes(loyaltyCode)) {
        messageElement.textContent = "¡Código válido! Has recibido un descuento especial.";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Código inválido. Por favor, inténtalo de nuevo.";
        messageElement.style.color = "red";
    }
});