// Импорт библиотеки React для работы с JSX
import React from "react";
// Импорт модульных стилей из файла Button.module.scss
import s from "./Button.module.scss";
// Импорт библиотеки classnames для условного применения CSS классов
// cn - общепринятое сокращение от 'classNames'
import cn from "classnames";

// Объявление функционального компонента Button (Кнопка)
// Компонент принимает пропсы (props) через деструктуризацию:
// - onClick: функция-обработчик клика по кнопке
// - border: булевый флаг для отображения кнопки с границей
// - disabled: булевый флаг для отключения кнопки
// - children: дочерние элементы (текст или другие компоненты внутри кнопки)
function Button({ onClick, border, disabled, children }) {
  // Возвращаем JSX разметку кнопки
  return (
    // HTML элемент button с атрибутами
    <button
      // Атрибут disabled: отключает кнопку если передан true
      disabled = {disabled}
      // Динамическое формирование классов с помощью библиотеки classnames
      // Базовый класс s.wrapper применяется всегда
      // Класс s.bordered применяется только если border = true
      // Класс s.disabled применяется только если disabled = true
      className={cn(s.wrapper, {
        [s.bordered]: border,
        [s.disabled]: disabled
      })}
      // Обработчик клика по кнопке
      onClick={onClick}
    >
      {/* Отображение дочерних элементов (обычно текст кнопки) */}
      {children}
    </button>
  );
}

// Экспорт компонента по умолчанию для использования в других частях приложения
export default Button;




