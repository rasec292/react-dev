let header = document.querySelector('.collapse');

header.addEventListener('click', fnCollapse);
function fnCollapse() {
    if (header.classList.contains('collapse')) {
        header.classList.add('show');
    }else{
        header.classList.remove('show');
    }
}