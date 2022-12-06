document.addEventListener('DOMContentLoaded', ()=> {
    const burgerBtn = document.getElementById('burger-btn');
    const header = document.querySelector('header');
    const logo = document.getElementById('landing');
    const navigation = document.getElementById('navigation');
    const amonut0 = document.getElementById('d0');
    const amonut1 = document.getElementById('d1');
    const amonut2 = document.getElementById('d2');
    const amonut3 = document.getElementById('d3');
    const amonut4 = document.getElementById('d4');
    const amonut5 = document.getElementById('d5');
    const amonut6 = document.getElementById('d6');
    const amonut7 = document.getElementById('d7');
    const donationAmount = document.getElementById('another-amount');
    const donationAmountLabels = document.querySelectorAll('.donation-sum.wrapper span');

    highlitDefault();

    //burger menu

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

    //highlit default amount

    function highlitDefault () {
        let vieportWidth = window.innerWidth;
        if (vieportWidth < 320) {
            return;
        }
        if (vieportWidth >= 320 && vieportWidth <= 639) {            
            amonut4.classList.add('active');
            donationAmountLabels[5].classList.add('activeLabel');          
        }
        if (vieportWidth > 639 && vieportWidth <= 999) {
            amonut4.classList.add('active');
            donationAmountLabels[5].classList.add('activeLabel');
        }
        if (vieportWidth > 999 && vieportWidth <= 1599) {
            amonut5.classList.add('active');
            donationAmountLabels[5].classList.add('activeLabel');
        }
        if (vieportWidth > 1599) {
            amonut5.classList.add('active');
            donationAmountLabels[5].classList.add('activeLabel');
        }
    }

    //choose donation amount

    amonut0.addEventListener('click', chooseAmount);
    amonut1.addEventListener('click', chooseAmount);
    amonut2.addEventListener('click', chooseAmount);
    amonut3.addEventListener('click', chooseAmount);
    amonut4.addEventListener('click', chooseAmount);
    amonut5.addEventListener('click', chooseAmount);
    amonut6.addEventListener('click', chooseAmount);
    amonut7.addEventListener('click', chooseAmount);

    function chooseAmount (e) {
        let vieportWidth = window.innerWidth;
        let d0Value;
        let d1Value;
        let d2Value;
        let d3Value;
        let d4Value;
        let d5Value;
        let d6Value;
        let d7Value;
        let chooseAmountValue;

        document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
        donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));

        if (vieportWidth < 320) {
            return;
        }
        if (vieportWidth >= 320 && vieportWidth <= 639) {
            d0Value = 500;
            d2Value = 250;
            d4Value = 100;
            d6Value = 50;
            d7Value = 25;
        }
        if (vieportWidth > 639 && vieportWidth <= 999) {
            d0Value = 500;
            d2Value = 250;
            d4Value = 100;
            d6Value = 50;
            d7Value = 25;
        }
        if (vieportWidth > 999 && vieportWidth <= 1599) {
            d0Value = 2000;
            d2Value = 1000;
            d3Value = 500;
            d4Value = 250;
            d5Value = 100;
            d6Value = 50;
            d7Value = 25;
        }
        if (vieportWidth > 1599) {
            d0Value = 5000;
            d1Value = 2000;
            d2Value = 1000;
            d3Value = 500;
            d4Value = 250;
            d5Value = 100;
            d6Value = 50;
            d7Value = 25;
        }

        if(e.target.dataset.id === '0') {
            chooseAmountValue = d0Value;
        }
        if(e.target.dataset.id === '1') {
            chooseAmountValue = d1Value;
        }
        if(e.target.dataset.id === '2') {
            chooseAmountValue = d2Value;
        }
        if(e.target.dataset.id === '3') {
            chooseAmountValue = d3Value;
        }
        if(e.target.dataset.id === '4') {
            chooseAmountValue = d4Value;
        }
        if(e.target.dataset.id === '5') {
            chooseAmountValue = d5Value;
        }
        if(e.target.dataset.id === '6') {
            chooseAmountValue = d6Value;
        }
        if(e.target.dataset.id === '7') {
            chooseAmountValue = d7Value;
        }

        donationAmount.value = chooseAmountValue;
        let chosenLabel = 's' + chooseAmountValue;
        document.getElementById(chosenLabel).classList.add('activeLabel')        

    }

    //donation amount validation

    donationAmount.addEventListener('change', amountValidate);

    function amountValidate () {   
        let vieportWidth = window.innerWidth;     
        let input = parseInt(donationAmount.value);        
        if(isNaN(input)) {
            donationAmount.value = 100;
        }
        if (input > 9999) {
            donationAmount.value = 100;
        }
        if (input === 5000) {
            document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
            donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));
            let chosenLabel = 's' + 5000;
            document.getElementById(chosenLabel).classList.add('activeLabel');
            if (vieportWidth > 1599) {
                amonut0.classList.add('active')
            }
            if (vieportWidth > 999 && vieportWidth <= 1599) {                
                amonut0.classList.add('active');
            }           
        }
        if (input === 2000) {
            document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
            donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));
            let chosenLabel = 's' + 2000;
            document.getElementById(chosenLabel).classList.add('activeLabel');
            if (vieportWidth > 1599) {
                amonut1.classList.add('active');
            }
            if (vieportWidth > 999 && vieportWidth <= 1599) {                
                amonut0.classList.add('active');
            }
        }
        if (input === 1000) {
            document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
            donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));
            let chosenLabel = 's' + 1000;
            document.getElementById(chosenLabel).classList.add('activeLabel');
            if (vieportWidth > 1599) {
                amonut2.classList.add('active')
            }
            if (vieportWidth > 999 && vieportWidth <= 1599) {                
                amonut2.classList.add('active');
            }
        }
        if (input === 500) {
            document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
            donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));
            let chosenLabel = 's' + 500;
            document.getElementById(chosenLabel).classList.add('activeLabel');
            if (vieportWidth > 1599) {
                amonut3.classList.add('active')
            }
            if (vieportWidth > 999 && vieportWidth <= 1599) {                
                amonut3.classList.add('active');
            }
            if (vieportWidth > 639 && vieportWidth <= 999) {
                amonut0.classList.add('active');
            }
            if (vieportWidth >= 320 && vieportWidth <= 639) {                
                amonut0.classList.add('active');
            }
        }
        if (input === 250) {
            document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
            donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));
            let chosenLabel = 's' + 250;
            document.getElementById(chosenLabel).classList.add('activeLabel');
            if (vieportWidth > 1599) {
                amonut4.classList.add('active');
            }
            if (vieportWidth > 999 && vieportWidth <= 1599) {                
                amonut4.classList.add('active');
            }
            if (vieportWidth > 639 && vieportWidth <= 999) {
                amonut2.classList.add('active');
            }
            if (vieportWidth >= 320 && vieportWidth <= 639) {               
                amonut2.classList.add('active');
            }
        }
        if (input === 100) {
            document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
            donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));
            let chosenLabel = 's' + 100;
            document.getElementById(chosenLabel).classList.add('activeLabel');
            if (vieportWidth > 1599) {
                amonut5.classList.add('active')
            }
            if (vieportWidth > 999 && vieportWidth <= 1599) {                
                amonut5.classList.add('active');
            }
            if (vieportWidth > 639 && vieportWidth <= 999) {
                amonut4.classList.add('active');
            }
            if (vieportWidth >= 320 && vieportWidth <= 639) {                
                amonut4.classList.add('active');
            }
        }
        if (input === 50) {
            document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
            donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));
            let chosenLabel = 's' + 50;
            document.getElementById(chosenLabel).classList.add('activeLabel');
            if (vieportWidth > 1599) {
                amonut6.classList.add('active')
            }
            if (vieportWidth > 999 && vieportWidth <= 1599) {                
                amonut6.classList.add('active');
            }
            if (vieportWidth > 639 && vieportWidth <= 999) {
                amonut6.classList.add('active');
            }
            if (vieportWidth >= 320 && vieportWidth <= 639) {                
                amonut6.classList.add('active');
            }
        }
        if (input === 25) {
            document.querySelectorAll('.range-dot').forEach(el => el.classList.remove('active'));
            donationAmountLabels.forEach(el => el.classList.remove('activeLabel'));
            let chosenLabel = 's' + 25;
            document.getElementById(chosenLabel).classList.add('activeLabel');
            if (vieportWidth > 1599) {
                amonut7.classList.add('active')
            }
            if (vieportWidth > 999 && vieportWidth <= 1599) {                
                amonut7.classList.add('active');
            }
            if (vieportWidth > 639 && vieportWidth <= 999) {
                amonut7.classList.add('active');
            }
            if (vieportWidth >= 320 && vieportWidth <= 639) {               
                amonut7.classList.add('active');
            }
        }
    }
})