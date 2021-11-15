// скрол блокируем
const disabledScroll = () => {

    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.scrollPosition = window.scrollY;

    document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            top: -${document.body.scrollPosition}px;
            left: 0;
            height: 100vw;
            width: 100vw;
            padding-right: ${widthScroll}px;
        `;
}
    const enabledScroll = () => {
        document.body.style.cssText = 'position: relative';
        window.scroll({top: document.body.scrollPosition})
    
}


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
        const openModal = () => {
            disabledScroll();
            modal.style.opacity = opacity;            
            modal.classList.add(openSelector);

            const timer = setInterval (() => {
                opacity += 0.02;
                modal.style.opacity = opacity;
                if (opacity >= 1) clearInterval(timer)
            }, speed[sk])
        };




    
const closeModal = () => {
    enabledScroll();
    const timer = setInterval (() => {
        opacity -= 0.02;
        modal.style.opacity;
        if (opacity <= 0) {
            clearInterval(timer)
            modal.classList.remove(openSelector);
        }
    }, speed[sk])            
};

openBtn.addEventListener('click', openModal);                 

closeTrigger.addEventListener('click', closeModal);
// клик мимо модального окна
modal.addEventListener('click', () => {
    if (event.target === modal) {
        closeModal()
    }
    
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
{// галерея

const portfolioList = document.querySelector ('.portfolio__list');
const pageOverlay = document.createElement('div');
pageOverlay.classList.add('page__overlay');

portfolioList.addEventListener('click', (event) => {
    
    const card = event.target.closest('.card');

    if (card) {
        document.body.append(pageOverlay);
        const title = card.querySelector('.card__client');

        const picture = document.createElement('picture');
            
        picture.style.cssText = `
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 1440px;
            `;

        picture.innerHTML = `
            <source srcset="${card.dataset.fullImage}.webp" type="image/webp"> 
            <img src="${card.dataset.fullImage}.jpg" alt="${title.textContent}">
        `;    

        // const img = document.createElement('img');
        // img.src = card.dataset.fullImage + '.jpg';
        // img.style.cssText = `
        //     position: absolute;
        //     top: 20px;
        //     left: 50%;
        //     transform: translateX(-50%);
        // `;

        pageOverlay.append(picture)       
        }
    })

    pageOverlay.addEventListener('click', () => {
        pageOverlay.remove();
        pageOverlay.textContent = '';
    })
}
//17:50