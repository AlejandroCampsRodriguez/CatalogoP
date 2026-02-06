 
 require('dotenv').config({ path: '.dev' });  // Cargar variables del archivo .dev

 const apiKey = process.env.OPENROUTER_API_KEY;  // Acceder a la API Key
console.log(apiKey);  // Esto debería imprimir tu clave en la consola si todo está bien

 
 // Filtrado simple por categoría
    const buttons = document.querySelectorAll('[data-filter]');
    const cards = document.querySelectorAll('#products > div[data-category]');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    
