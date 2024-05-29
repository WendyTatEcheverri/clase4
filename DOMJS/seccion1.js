const crearSeccion1 = () => {
    const seccion1 = document.createElement('section');
    seccion1.classList.add('section1');
  
    // menú
    const menu = document.createElement('div');
    menu.classList.add('menu');
  
    const button1 = document.createElement('button');
    button1.textContent = 'Pantalones';
    button1.classList.add('pantalones');
  
    const button2 = document.createElement('button');
    button2.textContent = 'Camisetas';
    button2.classList.add('camisetas');
  
    const button3 = document.createElement('button');
    button3.textContent = 'Busos';
    button3.classList.add('busos');
  
    menu.appendChild(button1);
    menu.appendChild(button2);
    menu.appendChild(button3);
    
    seccion1.appendChild(menu);

    const opciones = document.createElement('div');
    opciones.classList.add('opciones');
    seccion1.appendChild(opciones);
    opciones.innerHTML = `
        <ul>
            <li>Coquette</li>
            <li>Oversize</li>
            <li>Urbano</li>
        </ul>
    `;

    opciones.style.display = 'none';

    button1.addEventListener('click', () => {
        opciones.style.display = opciones.style.display === 'none' ? 'block' : 'none';
    });

    button2.addEventListener('click', () => {
        opciones.style.display = opciones.style.display === 'none' ? 'block' : 'none';
    });

    button3.addEventListener('click', () => {
        opciones.style.display = opciones.style.display === 'none' ? 'block' : 'none';
    });
   
    const styles = `
      .menu button {
        padding: 10px 20px;
        margin-right: 40px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size:20px;
        text-align: center;
        margin-left: 110px;
        
        
      }
  
      .menu .pantalones {
        background-color: #ff69b4; /* Rosa */
        color: white;
      }
  
      .menu .camisetas {
        background-color: #87ceeb; /* Celeste */
        color: white;
      }
  
      .menu .busos {
        background-color: #008080; /* Verde azulado */
        color: white;
      }
  
      .section1 {
        background-color: ff69b4#;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }

      .opciones {
        background-color: #fff; /* Color de fondo blanco para las opciones */
        padding: 10px;
        border-radius: 8px;
        margin-top: 10px;
    }

    .opciones ul {
        list-style: none; /* Quita los estilos de la lista */
        padding: 0;
    }

    .opciones ul li {
        cursor: pointer;
        padding: 5px;
        transition: background-color 0.3s ease; /* Transición suave del color de fondo */
    }

    .opciones ul li:hover {
        background-color: #f0f0f0; /* Cambia el color de fondo al pasar el ratón por encima */
    }
  
      
    `;
  
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
  
    document.head.appendChild(styleElement);
  
    return seccion1;
  };
  
  export { crearSeccion1 };
  
  
  