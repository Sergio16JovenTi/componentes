import React, { useState, useEffect } from 'react';
// Importamos nuestro componente de gráfico
import HorasChart from '../components/charts/HorasChart';
// Importamos el CSS de esta página
import './pagestad.css';

const Estadisticas = () => {
  // --- LÓGICA DE DATOS ---
  
  // Estados para manejar los datos, la carga y los errores
  const [games, setGames] = useState([]); // Almacenar los juegos venidos de la API
  const [isLoading, setIsLoading] = useState(true); // Para mostrar un mensaje de "cargando"
  const [error, setError] = useState(null); // Para mostrar mensajes de error

  useEffect(() => {
    

    const fetchGameStats = async () => {
      try {
        setIsLoading(true); 
        setError(null);   

    
        const token = localStorage.getItem("token");

        // Verificamos si el usuario está logueado
        if (!token) {
          setError("No estás autenticado. Por favor, inicia sesión.");
          setIsLoading(false);
          return;
        }

        const res = await fetch("http://localhost:3000/api/games", {
          headers: {
            Authorization:  `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("No se pudo obtener la información de los juegos.");
        }

        const data = await res.json();
        setGames(data);

      } catch (err) {
        console.error("Error al obtener estadísticas:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Ejecutamos la función que acabamos de definir
    fetchGameStats();

  }, []);

  
  // --- RENDERIZADO (VISTA) ---

  // Función de ayuda para mostrar contenido condicional
  const renderContent = () => {
    if (isLoading) {
      return <p className="loading-text">Cargando estadísticas...</p>;
    }

    if (error) {
      return <p className="error-text">{error}</p>;
    }

    if (games.length === 0) {
      return <p>No hay juegos para mostrar estadísticas.</p>;
    }

    return <HorasChart games={games} />;
  };

  return (
    <div className="estadisticas-container">
      <h1>Estadísticas de Juego</h1>
      
      <div className="chart-wrapper">
        {renderContent()}
      </div>
    </div>
  );
};

export default Estadisticas;