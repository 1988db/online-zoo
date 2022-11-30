document.addEventListener('DOMContentLoaded', ()=> {
    const burgerBtn = document.getElementById('burger-btn');
    const header = document.querySelector('header');
    const logo = document.getElementById('landing');
    const navContainer = document.getElementById('nav-container');
    const designedBy = document.getElementById('designed-by')
    burgerBtn.addEventListener('click', (e)=> {
        header.classList.toggle('visible');
        e.stopPropagation();
    });
    header.addEventListener('click', ()=> {
        header.classList.remove('visible');
    });
    logo.
    addEventListener('click', (e)=> {        
        e.stopPropagation();
    });
    navContainer.addEventListener('click', (e)=> {
        e.stopPropagation();
    });
    designedBy.addEventListener('click', (e)=> {
        e.stopPropagation();
    });
})
