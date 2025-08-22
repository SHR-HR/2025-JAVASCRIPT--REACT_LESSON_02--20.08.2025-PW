// Импорт необходимых хуков из React
import { useEffect, useState } from 'react'
// Импорт глобальных стилей приложения
import './styles/globals.scss'
// Импорт главного макета приложения
import MainLayout from './layoutes/MainLayout'
// Импорт компонента формы для добавления новых элементов
import MyForm from './components/MyForm/MyForm'
// Импорт компонента списка для отображения элементов
import List from './components/List/List'

// Ключ для сохранения данных в localStorage
const LS_KEY = 'items'

// Основной компонент приложения
function App() {
  // Состояние для хранения массива элементов
  // Используем ленивую инициализацию useState с функцией для загрузки из localStorage
  const [items, setItems] = useState(() => {
    try {
      // Пытаемся получить сохраненные данные из localStorage
      const saved = localStorage.getItem(LS_KEY)
      // Если данные есть - парсим JSON и возвращаем
      if (saved) return JSON.parse(saved)
    } catch (error) {
      // В случае ошибки парсинга или доступа к localStorage - игнорируем ошибку
      // и возвращаем данные по умолчанию
    }
    // Возвращаем массив элементов по умолчанию если в localStorage ничего нет или произошла ошибка
    return [
      { id: '1', title: 'Заголовок 1', text: 'Текст 1' },
      { id: '2', title: 'Заголовок 2', text: 'Текст 2' },
      { id: '3', title: 'Заголовок 3', text: 'Текст 3' },
    ]
  })

  // Эффект для сохранения элементов в localStorage при их изменении
  useEffect(() => {
    try { 
      // Сохраняем текущие элементы в localStorage в формате JSON
      localStorage.setItem(LS_KEY, JSON.stringify(items)) 
    } catch (error) {
      // Игнорируем ошибки записи в localStorage (например, если он отключен)
    }
  }, [items]) // Зависимость: эффект срабатывает при изменении items

  // Функция для добавления нового элемента в список
  const handleAdd = (item) => setItems((prev) => [item, ...prev])

  // Функция для удаления элемента из списка по ID
  const handleDelete = (id) => setItems((prev) => prev.filter((x) => x.id !== id))

  // Рендер компонента
  return (
    // Оборачиваем все в главный макет приложения
    <MainLayout>
      {/* Контейнер для формы и списка с inline стилями */}
      <div className='box' style={{ display: "grid", gap: 24, maxWidth: 600 }}>
        {/* Компонент формы для добавления новых элементов */}
        {/* Передаем функцию handleAdd как пропс onAdd */}
        <MyForm onAdd={handleAdd} />
        
        {/* Компонент списка для отображения элементов */}
        {/* Передаем массив items и функцию handleDelete как пропсы */}
        <List items={items} onDelete={handleDelete} />
      </div>
    </MainLayout>
  )
}

// Экспорт компонента по умолчанию
export default App


