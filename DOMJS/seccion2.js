const crearSeccion2 = () => {

    const seccion2 = document.createElement('section');
    seccion2.classList.add('section2');
  
    const image = document.createElement('img');
    image.src = './descuento2.jpg'; 
    image.alt = 'Descripción de la imagen';
  
    image.style.width = '200px'; 
    image.style.height = 'auto'; 
    image.style.backgroundColor = 'transparent';
   
    seccion2.appendChild(image);
  
    const styles = `
      .section2 {
        background-color: #fafad2;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }
    
    `;
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    seccion2.style.display = 'flex';
    seccion2.style.alignItems = 'center';
    seccion2.style.justifyContent = 'center';
    seccion2.style.margin
  
    
    return seccion2;
  };
  
  export { crearSeccion2 };
  
  
  