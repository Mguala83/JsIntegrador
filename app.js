document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
  
    contactForm.addEventListener('submit', submitForm);
  
    function submitForm(event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      // Simulación del envío del formulario (puedes reemplazar esto con tu lógica de envío real)
      setTimeout(() => {
        if (Math.random() < 0.8) {
          displayMessage('¡Mensaje enviado con éxito!', 'success');
          showMessage('Tu mensaje se envió correctamente, muchas gracias', 'success');
        } else {
          displayMessage('Error al enviar el mensaje. Inténtalo de nuevo más tarde.', 'error');
        }
      }, 1000);
    }
  
    function displayMessage(message, type) {
      formMessages.innerHTML = `<div class="${type}">${message}</div>`;
    }
  
    // Función para generar las noticias en el HTML
    function generarNoticias() {
      const newsList = document.querySelector('.news-list');
  
      noticias.forEach(noticia => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
          <h3>${noticia.titulo}</h3>
          <p class="category">${noticia.categoria}</p>
          <p>${noticia.contenido}</p>
          <button class="fav-btn" data-id="${noticia.id}">Agregar a favoritos</button>
        `;
        newsList.appendChild(newsItem);
      });
  
      // Agregar evento para guardar noticias en favoritos
      const favButtons = document.querySelectorAll('.fav-btn');
      favButtons.forEach(button => {
        button.addEventListener('click', addToFavorites);
      });
    }
  
    // Resto del código para guardar y mostrar noticias favoritas...
  
    // Llama a la función para generar las noticias por defecto al cargar la página
    filtrarNoticias('todos');
  });

  