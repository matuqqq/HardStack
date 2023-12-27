let isScrolling = false;

window.addEventListener('wheel', (e) => {
    if (!isScrolling) {
        e.preventDefault();

        const delta = e.deltaY;
        const currentScroll = window.scrollY;
        const windowHeight = window.innerHeight;

        isScrolling = true;

        if (delta > 0) {
            window.scrollTo({ top: currentScroll + windowHeight, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: currentScroll - windowHeight, behavior: 'smooth' });
        }

        setTimeout(() => {
            isScrolling = false;
        }, 600); // Establecer el tiempo de espera según tus necesidades
    }
});