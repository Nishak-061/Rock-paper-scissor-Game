const PlayButton = document.querySelector('.playBtn');
PlayButton.addEventListener('click',function() {
        if(PlayButton){
            window.location.href = "index.html";
        }
    })


const rulesButton = document.querySelector('.rulesButton');
const rulesBox = document.querySelector('.Rules-box');
const closeButton = document.querySelector('.cross');

rulesButton.addEventListener('click', function() {
    rulesBox.style.display = "block";
})

closeButton.addEventListener('click', function() {
    rulesBox.style.display = "none";
})