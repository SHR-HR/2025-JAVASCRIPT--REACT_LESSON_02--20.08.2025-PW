// Импорт библиотеки React и функции forwardRef для работы с ref
import React, { forwardRef } from "react";
// Импорт модульных стилей из файла Input.module.scss
import s from "./Input.module.scss";
// Импорт библиотеки classnames для условного применения CSS классов
import cn from "classnames";

/**
 * Компонент Input (Поле ввода) с поддержкой ref
 * Варианты и состояния как у Button:
 * - border (boolean) — добавляет "обводочный" стиль (стиль с границей)
 * - disabled (boolean) — отключает поле ввода
 * 
 * Компонент обернут в forwardRef для передачи ref на DOM элемент input
 */
const Input = forwardRef(function Input(
  // Параметры компонента через деструктуризацию:
  { className, border, disabled, ...props }, // className - дополнительные классы, ...props - остальные пропсы
  ref // ref - ссылка на DOM элемент, передаваемая из родительского компонента
) {
  // Возвращаем JSX разметку поля ввода
  return (
    // HTML элемент input с атрибутами
    <input
      // Передача ref на DOM элемент input
      ref={ref}
      // Атрибут disabled: отключает поле ввода если передан true
      disabled={disabled}
      // Динамическое формирование классов с помощью библиотеки classnames
      // s.wrapper - базовый стиль компонента
      // className - дополнительные классы из пропсов
      // s.bordered - стиль с границей применяется если border = true
      // s.disabled - стиль отключенного состояния применяется если disabled = true
      className={cn(s.wrapper, className, {
        [s.bordered]: border,
        [s.disabled]: disabled,
      })}
      // Распаковка всех остальных пропсов в элемент input
      // (например: value, onChange, placeholder, type, etc.)
      {...props}
    />
  );
});

// Экспорт компонента по умолчанию для использования в других частях приложения
export default Input;



