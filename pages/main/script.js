document.addEventListener('DOMContentLoaded', ()=> {
    const burgerBtn = document.getElementById('burger-btn');
    const header = document.querySelector('header');
    const logo = document.getElementById('landing');
    const navContainer = document.getElementById('nav-container');
    const designedBy = document.getElementById('designed-by');    
    const leftBtn = document.getElementById('arrow-lft-btn');
    const rightBtn = document.getElementById('arrow-rgt-btn');
    const viewportSize = document.getElementById('viewport');
  
    getViewportWidth();

    window.addEventListener('resize', getViewportWidth);

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

    

    function getViewportWidth () {
        vieportWidth = window.innerWidth;
        viewportSize.innerText = vieportWidth;
    }   


})
