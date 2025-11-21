import React from 'react';
// Importamos los elementos necesarios de Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// Importamos el componente Bar de la librería
import { Bar } from 'react-chartjs-2';

// Registramos los componentes que Chart.js usará
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Este componente recibe la data de los juegos como prop
const HorasChart = ({ games }) => {
  
  // 1. Ordenar los datos: De mayor a menor horas jugadas
  const sortedGames = [...games].sort((a, b) => b.hoursPlayed - a.hoursPlayed);

  // 2. Preparar los datos para el formato que pide Chart.js
  const chartData = {
    // 'labels' son los nombres en el eje X (los títulos de los juegos)
    labels: sortedGames.map(game => game.title),
    datasets: [
      {
        label: 'Horas Jugadas',
        // 'data' es la información del eje Y (las horas)
        data: sortedGames.map(game => game.hoursPlayed),
        backgroundColor: 'rgba(24, 16, 16, 0.38)', 
        borderColor: 'rgba(37, 83, 31, 1)',
        borderWidth: 1,
      },
    ],
  };

  // 3. Opciones de configuración y estilo del gráfico
  const chartOptions = {
    responsive: true, // Hace que el gráfico se adapte al contenedor
    maintainAspectRatio: false, // Permite controlar mejor la altura
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Horas Totales por Juego',
        color: '#FFFFFF', // Color del título
        font: {
          size: 18,
        },
      },
    },
    // Configuración de los ejes (escalas)
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Líneas de la cuadrícula tenues
        },
        ticks: {
          color: '#E0E0E0', // Color de los números del eje Y
        },
      },
      x: {
        grid: {
          display: false, // Ocultamos la cuadrícula vertical
        },
        ticks: {
          color: '#E0E0E0', // Color de los nombres de juegos (eje X)
        },
      },
    },
  };

  return <Bar options={chartOptions} data={chartData} />;
};

export default HorasChart;