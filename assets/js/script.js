
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
