// Añadir un event listener para validar el campo de correo electrónico al perder el foco
const emailInput = document.querySelector('input[type="email"]');
const errorText = document.querySelector('.text-red-500');

emailInput.addEventListener('click', function() {
    if (!emailInput.value.trim()) {
        errorText.classList.remove('hidden');
    } else {
        errorText.classList.add('hidden');
    }
});

// Ocultar el aviso si el usuario no hace clic dentro del input
document.addEventListener('click', function(event) {
    if (event.target !== emailInput) {
        errorText.classList.add('hidden');
    }
});

// Ocultar el aviso si se escribe un correo electrónico completo en el input
emailInput.addEventListener('input', function() {
    if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
        errorText.classList.add('hidden');
    } else if (!emailInput.value.trim()) {
        errorText.classList.remove('hidden');
    }
});



//capturando el correo ingresado por el usuario:

 const newEmailInput = document.querySelector('input[type="email"]');

    newEmailInput.addEventListener('input', function() {
        const userEmail = newEmailInput.value.split('@')[0]; // Captura solo el nombre de usuario antes del '@'
        console.log(userEmail); // Puedes guardar userEmail en una variable o realizar otras operaciones con él
    });



//guardado en el localStorague


  const userEmailInput = document.querySelector('input[type="email"]');
    const saveButton = document.getElementById('save-email-button');

    saveButton.addEventListener('click', function() {
        const userEmail = userEmailInput.value;

        // Guardar el correo electrónico en el almacenamiento local para usarlo en la siguiente página
        localStorage.setItem('userEmail', userEmail);

        // Redirigir al usuario a otra página
        window.location.href = 'alert.html';
    });





  const theInput = document.querySelector('input[type="email"]');
    const userEmailSpan = document.getElementById('user-email');

    theInput.addEventListener('input', function() {
        const userEmail = theInput.value;
        userEmailSpan.textContent = userEmail;
    });