
        // click remove Bar in top navbar
const navEl = document.querySelector('.bar');
const closeBar= document.querySelector('.closeBar');

closeBar.addEventListener('click',() =>{
    navEl.parentElement.style.display='none';
})
//---------------------------------

//select countries
document.addEventListener('DOMContentLoaded', () => {
    const selectDrop = document.querySelector('.drop-countries .dropdown-menu')

    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data => {
        let output = '';
        data.forEach(country => {
            output += `<li><a>${country.cca2}<img src="${country.flags.png}"></a></li>`;

            console.log(country.name)
        })
        selectDrop.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })
})
//---------------------------------

// slids phone
fetch('https://dummyjson.com/products')
.then(function (result) {
    return result.json();
}).then(function (result) {
    displayData(result.products);
})
const dataFormal = localStorage.getItem('data')

function displayData(arr) {
arr.forEach(function (item) {

    const carouselInner = document.querySelector('.cards .carousel-inner');
    carouselInner.classList = 'carousel-inner'

    const carouselIitem = document.createElement('div');
    carouselIitem.classList = 'carousel-item';

    const card = document.createElement('div');
    card.classList = 'card';

    const imageWrapper = document.createElement('div');
    imageWrapper.classList = 'image-wrapper';

    const img = document.createElement('img');
    img.src = item.images[0]

    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';

    const h5 = document.createElement('h5')
    h5.classList = 'card-title';
    h5.innerText = item.title

    const p = document.createElement('p')
    p.classList = 'card-text';
    p.innerText = item.price + '$';


    cardBody.append(h5)
    cardBody.append(p)
    imageWrapper.append(img)
    card.append(imageWrapper)
    card.append(cardBody)
    carouselIitem.append(card)
    carouselInner.append(carouselIitem)


    const multipleItemCarousel = document.querySelector('#carouselExample')

    if (window.matchMedia("(min-width:576px)").matches) {
        const carousel = new bootstrap.Carousel(multipleItemCarousel, {
            interval: false
        })
        var caouselWidth = $('.cards .carousel-inner')[0].scrollWidth;
        var cardWidth = $('.cards .carousel-item').width();

        var scrollPosition = 0;

        $('.cards .carousel-control-next').on('click', function () {
            if (scrollPosition < (caouselWidth - (cardWidth * 4))) {
                scrollPosition = scrollPosition + cardWidth;
                $('.cards .carousel-inner').animate({ scrollLeft: scrollPosition },
                    600)
            }
        })

        $('.cards .carousel-control-prev').on('click', function () {
            if (scrollPosition > 0) {
                scrollPosition = scrollPosition - cardWidth;
                $('.cards .carousel-inner').animate({ scrollLeft: scrollPosition },
                    600)
            }
        })
    } else {
        $(multipleItemCarousel).addClass('slide');
    }
})
}
//---------------------------------