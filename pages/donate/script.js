document.addEventListener('DOMContentLoaded', ()=> {
    const burgerBtn = document.getElementById('burger-btn');
    const header = document.querySelector('header');
    const logo = document.getElementById('landing');
    const navigation = document.getElementById('navigation');    
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
    navigation.addEventListener('click', (e)=> {
        e.stopPropagation();
    });    
})