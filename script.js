const initModalWindow = () => {
    const modalWindow = document.querySelector('.modal-window');
    const overlay = document.querySelector('.overlay');

    const openModalWindow = () => {
        modalWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    const closeModalWindow = () => {
        modalWindow.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    document.querySelectorAll('.show-modal-window').forEach((btn) =>
        btn.addEventListener('click', openModalWindow)
    );

    document.querySelector('.close-modal-window').addEventListener('click', closeModalWindow);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
            closeModalWindow();
        }
    })

    overlay.addEventListener('click', closeModalWindow);
};

initModalWindow();