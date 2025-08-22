// Импорт StrictMode из React - специальный компонент для выявления потенциальных проблем
import { StrictMode } from 'react'
// Импорт функции createRoot из react-dom/client для создания корня React приложения
import { createRoot } from 'react-dom/client'
// Импорт главного компонента приложения App
import App from './App.jsx'

// Создание корневого элемента React и его рендеринг в DOM
// document.getElementById('root') - находим HTML элемент с id="root" в index.html
createRoot(document.getElementById('root')).render(
  // Оборачиваем приложение в StrictMode для дополнительных проверок в development режиме
  // StrictMode помогает выявлять устаревшие API, небезопасные lifecycle методы и другие проблемы
  <StrictMode>
    {/* Главный компонент приложения - корневой компонент всего React дерева */}
    <App />
  </StrictMode>,
)


