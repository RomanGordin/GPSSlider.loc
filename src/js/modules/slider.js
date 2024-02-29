import Swiper from 'swiper/bundle';

export function slider(className) {
    var swiper = new Swiper(className, {
        wrapperClass: 'slider-wrapper',
        slideClass: 'slider-slide',
        slidesPerView: 'auto',
        breakpoints: {
            320: {
                autoHeight: true,
                pagination: {
                    el: ".slider-pagination",
                },
            },
            768: {
                enabled: false,
            }
          }
    });

    let slideCount = document.querySelectorAll('.slider-slide'),
        buttonActions = document.querySelector('.slider-actions').querySelector('button');

    document.querySelector('.slider-actions').querySelector('button').addEventListener('click', function(){
        this.hasAttribute('active') ? hidden() : show();
    })

    function hidden(){
        for (let index = 0; index < slideCount.length; index++) {
            if(index+1 > 8 && window.innerWidth > 1120){
                slideCount[index].style.display = 'none';
            } if(index+1 > 6 && window.innerWidth < 1120){
                slideCount[index].style.display = 'none';
            }
        }
        buttonActions.toggleAttribute('active')
        buttonActions.textContent = 'Показать все'
    }

    function show(){
        for (let index = 0; index < slideCount.length; index++) {
            slideCount[index].style.display = 'flex';
        }
        buttonActions.toggleAttribute('active')
        buttonActions.textContent = 'Скрыть'
    }

    hidden()
}