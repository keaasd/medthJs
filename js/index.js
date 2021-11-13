{ // Модальное окно
    const presentOrderBtn = document.querySelector(
    '.present__order-btn');
    const pageOverlayModal = document.querySelector('.page__overlay_modal');
    const modalClose = document.querySelector('.modal__close');

    const handlerModal = (openBtn, modal, openSelector, closeTrigger, sk = 'medium') => {
        
        let opacity = 0;
        
        const speed = {
            slow: 15,
            medium: 8,
            fast: 1,
        };

        openBtn.addEventListener('click', () => {
            modal.style.opacity = opacity;
            
            modal.classList.add(openSelector);

            const timer = setInterval (() => {
                opacity += 0.02;
                modal.style.opacity = opacity;
                if (opacity >= 1) clearInterval(timer)
            }, speed[sk] )        
        });

        closeTrigger.addEventListener('click', () => {

            const timer = setInterval (() => {
                opacity -= 0.02;
                modal.style.opacity;
                if (opacity <= 0) {
                    clearInterval(timer)
                    modal.classList.remove(openSelector)
                }
            }, speed[sk])

            
        })
    };

    handlerModal(presentOrderBtn, 
        pageOverlayModal, 
        'page__overlay_modal_open', 
        modalClose,
        'slow'
        );
}
{// Бургер меню
    const headerContactsBurger = document.querySelector('.header__contacts-burger');
    const headerContacts = document.querySelector('.header__contacts');

    const handlerBurger = (openBtn, menu, openSelector) => {
        openBtn.addEventListener('click', () => {
            menu.style.height = '';            
            if (menu.classList.contains(openSelector)) {
                menu.classList.remove(openSelector);
            } else {                
                menu.style.height = menu.scrollHeight + 'px';
                menu.classList.add(openSelector);
            }            
        })
    };


    handlerBurger(headerContactsBurger, headerContacts, 'header__contacts_open')


}
// contains - метод, возвращает булевое значение
// menu.classList.toggle(openSelector);