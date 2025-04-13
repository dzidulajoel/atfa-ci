const programmer_une_demo = document.querySelector('.programmer_une_demo');
const links = document.querySelectorAll('.nav_btn_conteneur li a');
programmer_une_demo.addEventListener('click', ()=>{
    
})
links.forEach(link => {
    console.log(link);
    link.addEventListener('click', function () {
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
    });
});