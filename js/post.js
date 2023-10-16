const formComentarios = document.querySelector('.container-post form');
const formComentariosTextarea = document.querySelector('.container-post form textarea');
const formComentariosSmall = document.querySelector('.container-post form small');

formComentarios.addEventListener('submit', e => {

    if(!formComentariosTextarea.value){
        e.preventDefault();
        formComentariosSmall.innerHTML = 'O campo acima não pode ficar em branco!';
    }

});