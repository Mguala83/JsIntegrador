document.getElementById('mobile-menu').addEventListener('click', function() {
  var navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const formMessages = document.getElementById('form-messages');
  const favoritesList = document.querySelector('.favorites-section'); // Agrega esta línea

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
      } else {
        displayMessage('Error al enviar el mensaje. Inténtalo de nuevo más tarde.', 'error');
      }
    }, 1000);
  }

  function displayMessage(message, type) {
    formMessages.innerHTML = `<div class="${type}">${message}</div>`;
  }

  const noticias = [
    {
      id: 1,
      categoria: 'Tecnología',
      titulo: 'Nueva Actualización de Teléfonos Inteligentes',
      contenido: 'Se espera que la nueva actualización de teléfonos inteligentes incluya características emocionantes...',
    },
    {
      id: 2,
      categoria: 'Deportes',
      titulo: 'Olimpo se afianza en la cima de su zona',
      contenido: 'El aurinegro mantiene la primera posición en su zona y solo está a 3 puntos de el puntero en la general #VamosOlimpo #TodosJuntos #OperativoRetorno',
    },
    {
      id: 3,
      categoria: 'Política',
      titulo: 'Milei arrasa en las Paso',
      contenido: 'Lider libertario, se llevó las elecciones primarias, con más de 30% de los votos',
    },
    // Agrega más noticias aquí
  ];

  const noticiasFavoritas = [];

  // Función para generar las noticias en el HTML
  function generarNoticias() {
    const newsList = document.querySelector('.news-list');
    newsList.innerHTML = ''; // Limpia la lista de noticias existente

    noticias.forEach(noticia => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
        <h3>${noticia.titulo}</h3>
        <p class="category">${noticia.categoria}</p>
        <p>${noticia.contenido}</p>
        <button class="fav-btn" data-id="${noticia.id}">Agregar a favoritos</button> <!-- Botón para agregar a favoritos -->
      `;
      newsList.appendChild(newsItem);
    });

    // Agregar evento para guardar noticias en favoritos después de generar las noticias
    const favButtons = document.querySelectorAll('.fav-btn');
    favButtons.forEach(button => {
      button.addEventListener('click', addToFavorites);
    });
  }

  // Función para mostrar noticias filtradas por categoría
  function filtrarNoticias(categoria) {
    const newsList = document.querySelector('.news-list');
    newsList.innerHTML = ''; // Limpia la lista de noticias existente

    if (categoria.toLowerCase() === 'todos') {
      // Mostrar todas las noticias si se selecciona "Todos"
      generarNoticias();
    } else {
      const noticiasFiltradas = noticias.filter(noticia => noticia.categoria === categoria);

      noticiasFiltradas.forEach(noticia => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
          <h3>${noticia.titulo}</h3>
          <p class="category">${noticia.categoria}</p>
          <p>${noticia.contenido}</p>
        `;
        newsList.appendChild(newsItem);
      });
    }
  }

  // Función para agregar noticias a favoritos
  function addToFavorites(event) {
    const newsId = event.target.getAttribute('data-id');
    const selectedNoticia = noticias.find(noticia => noticia.id === parseInt(newsId));

    // Añadir la noticia a la lista de noticias favoritas
    noticiasFavoritas.push(selectedNoticia);

    // Llamar a la función para mostrar las noticias favoritas
    mostrarFavoritas();

    console.log('Noticia agregada a favoritos:', selectedNoticia);
  }

  // Función para mostrar las noticias favoritas
  function mostrarFavoritas() {
    const favoritesSection = document.querySelector('.favorites-section');
    const favoritesList = favoritesSection.querySelector('.favorites-list');

    // Limpia la lista de noticias favoritas existente
    favoritesList.innerHTML = '';

    noticiasFavoritas.forEach(noticia => {
      const favItem = document.createElement('div');
      favItem.classList.add('fav-item');
      favItem.innerHTML = `
        <h3>${noticia.titulo}</h3>
        <p class="category">${noticia.categoria}</p>
        <p>${noticia.contenido}</p>
      `;
      favoritesList.appendChild(favItem);
    });
  }

  // Llama a la función para generar las noticias por defecto al cargar la página
  generarNoticias();

  // Escucha los clics en los botones de filtro
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');
      filtrarNoticias(selectedCategory);
    });
  });

  // Llama a la función para mostrar noticias favoritas en algún lugar adecuado de tu código.
  // Por ejemplo, podrías llamarla después de agregar una noticia a favoritos.
  mostrarFavoritas();
});
