(function(){

    const cabecalhoNavA = document.querySelectorAll('.cabecalho-mobile nav a');
    const [a1, a2, a3, a4] = cabecalhoNavA;

    const rodapeValores = document.querySelectorAll('.rodape ul li a');

    const cookies = document.querySelector('.cookies');
    const cookiesSpan = document.querySelector('.cookies span');
    
    const popup = document.querySelector('.popup');
    const popupDiv = document.querySelector('.popup div');
    const popupSpan = document.querySelectorAll('.popup span');
    const [popupSpan1, popupSpan2] = popupSpan;

    setTimeout(function(){
        cookies.classList.toggle('cookies-desocultar');
    }, 2000)

    const cabecalhoOcultoNavA = document.querySelectorAll('.cabecalho-oculto nav>a');
    const parteOculta = document.querySelectorAll('.parte-oculta a');
    const [a8, a9, a10, a11] = parteOculta;
    // const [a6, a7, a8, a9, a10] = cabecalhoOcultoNavA;
    const [a6, a7, a5] = cabecalhoOcultoNavA;

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
            popup.classList.toggle('popup-ocultar');
        }

        if(el == a1 || el == a2|| el == a3 || el == a4 || el == a5
            || el == a7 || el == a8 || el == a9 || el == a10 || el == a11){
            e.preventDefault();
            const href = el.getAttribute('href');
            const to = document.querySelector(href).offsetTop;

            scroll({
                top: to - 80,
                behavior: 'smooth',
            })
            popup.classList.toggle('popup-ocultar');
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

                popup.classList.toggle('popup-ocultar');
                return;
            }
        }

    })

    document.addEventListener('mouseover', e => {
        const el = e.target;

        if(el == botaoMobile || el == span1 || el == span2 || el == span3){
            cabecalhoOculto.classList.add('container-oculto-desocultar');
        } else if(el == botaoOculto || el == span4 || el == span5){
            cabecalhoOculto.classList.remove('container-oculto-desocultar');
        }
    })

})();