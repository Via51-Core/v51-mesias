import React, { useState } from 'react';
// Importa tu cliente de supabase aquí

function App() {
  const [enviado, setEnviado] = require('react').useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // AQUÍ VA TU LÓGICA DE ENVÍO A SUPABASE
    // Una vez que el registro sea exitoso, activamos el Modal:
    setEnviado(true);
  };

  return (
    <div style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#7D2181', textAlign: 'center' }}>Vía 51</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Eje Político, Social y Productivo</p>
      
      {/* TU FORMULARIO AQUÍ */}
      <form onSubmit={handleSubmit}>
        {/* inputs... */}
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#7D2181', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.1em' }}>
          Unirse al Camino
        </button>
      </form>

      {/* VENTANA FLOTANTE (MODAL) TRILINGÜE Y RESPONSIVE */}
      {enviado && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', z-index: 9999, padding: '20px' }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', maxWidth: '400px', textAlign: 'center', borderTop: '8px solid #7D2181' }}>
            <h2 style={{ fontSize: '1.4em' }}>¡Yachaywasiman Hamuy!<br/>Bienvenido</h2>
            
            <div style={{ margin: '20px 0', fontSize: '0.95em', color: '#444', textAlign: 'left', lineHeight: '1.5' }}>
              <p><strong>QU:</strong> Añaychayki Vía 51-man yaykumusqaykimanta.</p>
              <p><strong>ES:</strong> Gracias por sumarte. Construimos el Perú con integridad.</p>
              <p><strong>EN:</strong> Together we build the future.</p>
            </div>

            <a href="https://chat.whatsapp.com/FsuP06moPhJJSgdmt5Vxk7" 
               target="_blank" 
               style={{ display: 'block', background: '#25D366', color: 'white', padding: '15px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1em' }}>
              Unirse al WhatsApp Oficial
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;