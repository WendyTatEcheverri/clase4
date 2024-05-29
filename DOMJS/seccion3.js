const crearSeccion3 = () => {
    const seccion3 = document.createElement('section');
  seccion3.classList.add('section3');
 
  const columna1 = document.createElement('div');
    columna1.classList.add('column');
    columna1.innerHTML = `
      <h3>Pantalones Exclusivos</h3>
      <p>Descubre nuestra colección de pantalones únicos y elegantes.</p>
    `;
    const columna2 = document.createElement('div');
    columna2.classList.add('column');
    columna2.innerHTML = `
      <h3>Camisas Bonitas</h3>
      <p>Explora nuestras camisas con diseños modernos y colores vibrantes.</p>
    `;
    const columna3 = document.createElement('div');
    columna3.classList.add('column');
    columna3.innerHTML = `
      <h3>Busos Grandes</h3>
      <p>Encuentra los busos más cómodos y amplios para cualquier ocasión.</p>
    `;
    
  const columnas = document.createElement('div');
  columnas.classList.add('columnas');
  columnas.appendChild(columna1);
  columnas.appendChild(columna2);
  columnas.appendChild(columna3);

  seccion3.appendChild(columnas);
  const style = document.createElement('style');
  style.innerHTML = `
    .columnas {
      display: flex;
      justify-content: space-between;
    }
    .column {
      flex-basis: 30%;
      padding: 10px;
      border: 1px solid #ccc;
      background-color: #f9f9f9;
    }
    .section3 {
      background-color: #e9967a;
      padding: 50px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
  `;

  seccion3.appendChild(style);

  return seccion3;

  };
  
  export { crearSeccion3 };
  