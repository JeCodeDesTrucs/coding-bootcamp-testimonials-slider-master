const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn2 = document.querySelector('.prev-btn');
const nextBtn2 = document.querySelector('.next-btn');
const btn = document.querySelectorAll('.card__btn');
console.log(btn);
currentActive = null;
console.log(prevBtn);

if(currentActive == null){
    cards.forEach((card) => {
        if(card.classList.contains('active-card') && card === cards[0]){
            currentActive = 0;
        }else if(card.classList.contains('active-card') && card === cards[1]){
            currentActive = 1;
        }
    });
}


prevBtn.addEventListener('click', () => {
    console.log(btn[0]);
    if(currentActive > 0){
        cards[currentActive].classList.remove('active-card');
        currentActive = 0;
        cards[currentActive].classList.add('active-card');
    }else{
        console.log("cant go back");
    }
});

prevBtn2.addEventListener('click', () => {
    console.log(btn[0]);
    if(currentActive > 0){
        cards[currentActive].classList.remove('active-card');
        currentActive = 0;
        cards[currentActive].classList.add('active-card');
    }else{
        console.log("cant go back");
    }
});

nextBtn.addEventListener('click', () => {
    console.log(btn[1]);
    if(currentActive < 1){
        cards[currentActive].classList.remove('active-card');
        currentActive = 1;
        cards[currentActive].classList.add('active-card');
    }else{
        console.log("cant go next");
    }
});


nextBtn2.addEventListener('click', () => {
    console.log(btn[1]);
    if(currentActive < 1){
        cards[currentActive].classList.remove('active-card');
        currentActive = 1;
        cards[currentActive].classList.add('active-card');
    }else{
        console.log("cant go next");
    }
});

