// Импорт библиотеки React для работы с JSX
import React from 'react'
// Импорт модульных стилей из файла Layout.module.scss
import s from './Layout.module.scss'

// Объявление функционального компонента Footer (Подвал сайта)
function Footer() {
  // Возвращаем JSX разметку компонента подвала
  return (
    // Семантический HTML тег footer с применением стилей из модуля
    <footer className={s.footer}>
        
        {/* Внутренний контейнер содержимого подвала */}
        {/* Используется БЭМ-нотация: footer__content (элемент content блока footer) */}
        <div className={s.footer__content}>
            
            {/* Временный текст для наполнения подвала */}
            © 2025 Все права защищены
            
        </div>
        
    </footer>
  )
}

// Экспорт компонента по умолчанию для использования в других частях приложения
export default Footer


