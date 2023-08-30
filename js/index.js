(function(){

    const cabecalhoNavA = document.querySelectorAll('.cabecalho nav a');
    const [a1, a2, a3, a4, a5] = cabecalhoNavA;
    const homeA = document.querySelector('.home a');

    const rodapeValores = document.querySelectorAll('.rodape ul li a');

    const cabecalhoDropdownDiv = document.querySelectorAll('.dropdown div');
    const cabecalhoDropdownP = document.querySelectorAll('.dropdown a p');
    const cabecalhoDropdownI = document.querySelectorAll('.dropdown i');

    const cookies = document.querySelector('.cookies');
    const cookiesSpan = document.querySelector('.cookies span');
    
    const popup = document.querySelector('.popup');
    const popupDiv = document.querySelector('.popup div');
    const popupSpan = document.querySelectorAll('.popup span');
    const [popupSpan1, popupSpan2] = popupSpan;

    setTimeout(function(){
        cookies.classList.toggle('cookies-desocultar');
    }, 2000)

    const cabecalhoOcultoNavA = document.querySelectorAll('.cabecalho-oculto nav a');
    const [a6, a7, a8, a9, a10] = cabecalhoOcultoNavA;

    const cabecalhoOculto = document.querySelector('.cabecalho-oculto');

    const botaoMobile = document.querySelector('.botao-mobile');
    const botaoMobileSpan = document.querySelectorAll('.botao-mobile span');
    const [span1, span2, span3] = botaoMobileSpan;

    const botaoOculto = document.querySelector('.botao-oculto');
    const botaoOcultoSpan = document.querySelectorAll('.botao-oculto span');
    const [span4, span5] = botaoOcultoSpan;

    document.addEventListener('click', e => {

        const el = e.target;

        if(el == cookiesSpan){
            cookies.classList.toggle('cookies-desocultar');
        }
        
        if(el == popupDiv || el == popupSpan1 || el == popupSpan2){
            console.log(el);
            popup.classList.toggle('popup-ocultar');
        }

        if(el == a1 || el == a2 || el == a3|| el == a4 || el == a5 || 
            el == a6 || el == a7 || el == a8 || el == a9 || el == a10){
            e.preventDefault();
            const href = el.getAttribute('href');
            const to = document.querySelector(href).offsetTop;

            scroll({
                top: to - 80,
                behavior: 'smooth',
            })
            return;
        }

        for(let rodapeA of rodapeValores){
            if(el == rodapeA){
                e.preventDefault();
                const href = el.getAttribute('href');
                const to = document.querySelector(href).offsetTop;
    
                scroll({
                    top: to - 100,
                    behavior: 'smooth',
                })

                break;
            }
        }

        for(let dropdownDiv of cabecalhoDropdownDiv){
            if(el == dropdownDiv){
                e.preventDefault();
                const href = el.getAttribute('href');
                const to = document.querySelector(href).offsetTop;

                scroll({
                    top: to - 80,
                    behavior: 'smooth',
                })
                break;
            }
        }

        for(let dropdownP of cabecalhoDropdownP){
            if(el == dropdownP){
                e.preventDefault();
                const href = el.getAttribute('href');
                const to = document.querySelector(href).offsetTop;

                scroll({
                    top: to - 80,
                    behavior: 'smooth',
                })
                break;
            }
        }

        for(let dropdownI of cabecalhoDropdownI){
            if(el == dropdownI){
                e.preventDefault();
                const href = el.getAttribute('href');
                const to = document.querySelector(href).offsetTop;

                scroll({
                    top: to - 80,
                    behavior: 'smooth',
                })
                break;
            }
        }

        if(el == botaoMobile || el == span1 || el == span2 || el == span3){
            cabecalhoOculto.classList.add('container-oculto-desocultar');
        } else if(el == botaoOculto || el == span4 || el == span5){
            cabecalhoOculto.classList.remove('container-oculto-desocultar');
        }

    })

})();