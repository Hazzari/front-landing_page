function closePopup(popupSelector) {
    const modal = document.querySelector(popupSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';

}

function openPopup(popupSelector) {
    const modal = document.querySelector(popupSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    // отключаем таймер если уже открыли модалку

}

function popupWindow(triggerSelector, popupSelector) {
    // Modal WINDOW
    const popup = document.querySelector(popupSelector),
        popupTrigger = document.querySelectorAll(triggerSelector);


    // закрытие модального окна по клавише Esc и клике в пустую область
    //Escape
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape' && popup.classList.contains('show')) {
            closePopup(popupSelector);
        }
    });

    // click в пустую область и обработка закрытия окна по кнопке - X
    popup.addEventListener('click', e => {
        if (e.target === popup || e.target.getAttribute('data-close') === '') {
            closePopup(popupSelector);
        }
    });

    // Открытие модального окна
    popupTrigger.forEach((el) => {
        el.addEventListener('click', () => openPopup(popupSelector));
    });


}

export { popupWindow };
