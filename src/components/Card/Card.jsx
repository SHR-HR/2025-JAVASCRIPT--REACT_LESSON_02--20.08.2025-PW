// Импорт библиотеки React - необходима для работы с JSX
import React from 'react'
// Импорт модульных стилей из файла Card.module.scss
// Префикс 's' - общепринятое сокращение от 'styles'
import s from './Card.module.scss'
// Импорт компонента кнопки из папки UI компонентов
import Button from '../../UI/Button/Button'

// Объявление функционального компонента Card
// Компонент принимает три пропса (props) через деструктуризацию:
// - title: заголовок карточки
// - content: основное содержимое карточки
// - onClick: функция-обработчик клика по кнопке
function Card({title, content, onClick}) {
  // Возвращаем JSX разметку компонента
  return (
    // Основной контейнер карточки с применением стилей через CSS Modules
    // className={s.wrapper} - применяет стиль 'wrapper' из модуля
    <div className={s.wrapper}>
        
        {/* Заголовок карточки третьего уровня */}
        {/* className={s.wrapper_title} - применяет стиль 'wrapper_title' из модуля */}
        <h3 className={s.wrapper_title}>{title}</h3>
        
        {/* Параграф с основным содержимым карточки */}
        <p>{content}</p>
        
        {/* Компонент кнопки с обработчиком клика */}
        {/* Текст кнопки временно установлен как "test" - требует локализации */}
        <Button onClick={onClick}>test</Button>
        
    </div>
  )
}

// Экспорт компонента по умолчанию для использования в других частях приложения
export default Card


