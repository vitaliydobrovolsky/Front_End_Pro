import { fetchData } from './fetchData.js';

document.getElementById('swapi-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const apiUrl = document.getElementById('api-url').value.trim();
  const endpoint = document.getElementById('endpoint').value.trim();
  
  // Покажемо лоадер перед запитом
  document.getElementById('loader').style.display = 'block';
  document.getElementById('result').textContent = ''; // Очистимо попередні результати

  try {
    const data = await fetchData(apiUrl, endpoint);
    
    // Виведемо результат в форматі JSON
    const formattedResult = JSON.stringify(data, null, 2);
    document.getElementById('result').textContent = formattedResult;

    if (data.status === 'success') {
      const id = data.id || 'ID не знайдено';
      const controller = data.controller || 'Controller не знайдений';
      
      // Вивести Id та controller
      document.getElementById('result').textContent += `\nID: ${id}\nController: ${controller}`;
    }
  } catch (error) {
    document.getElementById('result').textContent = `Помилка: ${error.message}`;
  } finally {
    // Приховуємо лоадер після запиту
    document.getElementById('loader').style.display = 'none';
  }
});


// fetchData.js

export async function fetchData(apiUrl, endpoint) {
    try {
      const response = await fetch(`${apiUrl}/${endpoint}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(`Помилка запиту: ${data.message || 'Невідомий статус'}`);
      }
  
      return data;
    } catch (error) {
      throw new Error(`Не вдалося отримати дані: ${error.message}`);
    }
  }
  