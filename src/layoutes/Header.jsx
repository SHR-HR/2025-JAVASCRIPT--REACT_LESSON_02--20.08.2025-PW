// Импорт библиотеки React для работы с JSX
import React from 'react'
// Импорт модульных стилей из файла Layout.module.scss
import s from './Layout.module.scss'
// Импорт компонента кнопки из папки UI компонентов
import Button from '../UI/Button/Button'

// Объявление функционального компонента Header (Шапка сайта)
function Header() {
  // Возвращаем JSX разметку компонента шапки
  return (
    // Семантический HTML тег header с применением стилей из модуля
    <header className={s.header}>
        
        {/* Внутренний контейнер содержимого шапки */}
        {/* Используется БЭМ-нотация: header__content (элемент content блока header) */}
        <div className={s.header__content}>
            
            {/* Кнопка навигации "Главная" */}
            <Button border={true}>Главная</Button>
            
            {/* Кнопка навигации "Магазин" */}
            <Button border={true}>Магазин</Button>
            
            {/* Кнопка навигации "О нас" */}
            <Button border={true}>О нас</Button>
            
            {/* Кнопка навигации "Настройки" в отключенном состоянии */}
            <Button disabled={true} border={true}>Настройки</Button>
            
        </div>
        
    </header>
  )
}

// Экспорт компонента по умолчанию для использования в других частях приложения
export default Header






