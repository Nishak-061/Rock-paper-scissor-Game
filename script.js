const rulesButton = document.querySelector('.rulesButton');
const NextButton = document.querySelector('.nextbutton');
const rulesBox = document.querySelector('.Rules-box')
const closeButton = document.querySelector('.cross');
const PlayButton = document.querySelector('.playBtn');

rulesButton.addEventListener('click', function() {
    rulesBox.style.display = "block";
})

closeButton.addEventListener('click', function() {
    rulesBox.style.display = "none";
})






const computerScoreElement = document.querySelector('.computer-zero');
const humanScoreElement = document.querySelector('.human-zero');
const rockIcons = document.querySelector('.rock-box');
const rockParagraph = document.querySelector('.rock-para');
const paperIcons = document.querySelector('.paper-box');
const paperParagraph = document.querySelector('.paper-para');
const scissorIcons = document.querySelector('.scissor-box');
const scissorParagraph = document.querySelector('.scissor-para');
const computerChoiceDiv = document.querySelector('.computer-choice');
const iconsDiv = document.querySelector('.icons');
const Line = document.querySelector('.line');
const Line1 = document.querySelector('.line-1');
const Line2 = document.querySelector('.line-2');
const winnerIcons = document.querySelector('.winner');
const userWinner = document.querySelector('.for-user');
const computerWinner = document.querySelector('.for-computer');
const tieUp = document.querySelector('.for-tie');
const computerWin = document.querySelector('.computer-win');
const playAgain = document.querySelector('.play-again');
const lostButton = document.querySelector('.lost-button');
const ReplayButton = document.querySelector('.replay-button');
// let computerScore = 0;
// let humanScore = 0;
let result;





userWinner.addEventListener('click', function() {
    window.location.reload();
})
computerWinner.addEventListener('click', function() {
    window.location.reload();
})
tieUp.addEventListener('click', function() {
    window.location.reload();
})


function saveScores(computerScore, humanScore) {
    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('humanScore', humanScore);
}

function updateScores() {
    const computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
    const humanScore = parseInt(localStorage.getItem('humanScore')) || 0;
    computerScoreElement.textContent = computerScore;
    humanScoreElement.textContent = humanScore;
  }

  window.addEventListener('load', function() {
    updateScores();
  });



/* For rock */
rockIcons.addEventListener('click', function() {
    const userChoice = 'rock';
    const computerChoice = getComputer();
    paperIcons.style.display = "none";
    scissorIcons.style.display = "none";
    Line.style.display = "none";
    Line1.style.display = "none";
    Line2.style.display = "none";
    rockParagraph.style.display = "block"
    

    if (userChoice === computerChoice) {
        console.log("its a tie")
        tieUp.style.display = "block";
        winnerIcons.style.display = "none";
        computerWin.style.display = "none";
        NextButton.style.display = "none";
        userWinner.style.display = "none";
        computerWinner.style.display = "none"
    } else if((userChoice === 'rock' && computerChoice === 'scissor') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissor' && computerChoice === 'paper')){
        console.log("you win")
        userWinner.style.display = "block";
        computerWinner.style.display = "none";
        tieUp.style.display = "none";
        winnerIcons.classList.add('winner');
        winnerIcons.style.display = 'block';
        computerWin.style.display = "none";
        NextButton.style.display = "block";
        if(NextButton) {
            NextButton.addEventListener('click', function() {
                window.location.href = "congratulation.html";
            });
        }
        let humanScore = parseInt(localStorage.getItem('humanScore')) || 0; 
        humanScore++; 
        saveScores(parseInt(localStorage.getItem('computerScore')) || 0, humanScore); 
        updateScores();
    } else {
        console.log("computer win")
        winnerIcons.style.display = "none";
        computerWin.style.display = "block";
        NextButton.style.display = "none";
        computerWinner.style.display = "block";
        userWinner.style.display = "none";
        tieUp.style.display = "none";

        let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
        computerScore++;
        saveScores(computerScore, parseInt(localStorage.getItem('humanScore')) || 0);
        updateScores();
         
    }

    computerChoiceDiv.innerHTML = `<p>PC PICKED ${computerChoice}</p><div class="design" ><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
    computerChoiceDiv.style.display = "block";

    // Set border color for computer choice div based on computer's choice
    if (computerChoice === 'rock') {
    computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%;">PC PICKED</p><div class="design" style ="background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #0074B6; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
    } else if (computerChoice === 'paper') {
    computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%;">PC PICKED</p><div class="design" style ="background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #FFA943; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
    } else if (computerChoice === 'scissor') {
    computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%;">PC PICKED</p><div class="design" style = "background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #BD00FF; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
    }

})


/* For paper */
paperIcons.addEventListener('click', function() {
    const userChoice = 'paper';
    const computerChoice = getComputer();
    rockIcons.style.display = "none";
    scissorIcons.style.display = "none";
    Line.style.display = "none";
    Line1.style.display = "none";
    Line2.style.display = "none";
    paperParagraph.style.display = "block"
    paperIcons.style.position = "absolute";
    paperIcons.style.left = "410px";
    
    
    if (userChoice === computerChoice) {
        console.log("its a tie")
        tieUp.style.display = "block";
        winnerIcons.style.display = "none";
        computerWin.style.display = "none";
        NextButton.style.display = "none";
        userWinner.style.display = "none";
        computerWinner.style.display = "none";
        
       
    } else if((userChoice === 'rock' && computerChoice === 'scissor') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissor' && computerChoice === 'paper')){
        console.log("you win")
        userWinner.style.display = "block";
        computerWinner.style.display = "none";
        tieUp.style.display = "none";
        computerWin.style.display = "none";
        winnerIcons.classList.add('winner');
        winnerIcons.style.display = 'block';
        NextButton.style.display = "block";
        if(NextButton) {
            NextButton.addEventListener('click', function() {
                window.location.href = "congratulation.html";
            });
        }
        let humanScore = parseInt(localStorage.getItem('humanScore')) || 0; 
        humanScore++; 
        saveScores(parseInt(localStorage.getItem('computerScore')) || 0, humanScore); 
        updateScores();
    } else {
        console.log("computer win")
        winnerIcons.style.display = "none";
        computerWin.style.display = "block";
        NextButton.style.display = "none";
        computerWinner.style.display = "block";
        userWinner.style.display = "none";
        tieUp.style.display = "none";
        let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
        computerScore++;
        saveScores(computerScore, parseInt(localStorage.getItem('humanScore')) || 0);
        updateScores();
    }

    computerChoiceDiv.innerHTML = `<p>PC PICKED</p><div class="design"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
    computerChoiceDiv.style.display = "block";

    // Set border color for computer choice div based on computer's choice
    if (computerChoice === 'rock') {
        computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%;">PC PICKED</p><div class="design" style ="background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #0074B6; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
        } else if (computerChoice === 'paper') {
        computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%;">PC PICKED</p><div class="design" style ="background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #FFA943; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
        } else if (computerChoice === 'scissor') {
        computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%;">PC PICKED</p><div class="design" style = "background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #BD00FF; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
        }

})




/* For scissor */
scissorIcons.addEventListener('click', function() {
    const userChoice = 'scissor';
    const computerChoice = getComputer();
    rockIcons.style.display = "none";
    paperIcons.style.display = "none";
    Line.style.display = "none";
    Line1.style.display = "none";
    Line2.style.display = "none";
    scissorParagraph.style.display = "block";
    scissorIcons.style.position = "absolute";
    scissorIcons.style.left = "415px";
    scissorIcons.style.top = "245px";
    

    if (userChoice === computerChoice) {
        console.log("its a tie")
        tieUp.style.display = "block";
        winnerIcons.style.display = "none";
        computerWin.style.display = "none";
        NextButton.style.display = "none";
        userWinner.style.display = "none";
        computerWinner.style.display = "none";
    } else if((userChoice === 'rock' && computerChoice === 'scissor') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissor' && computerChoice === 'paper')){
        console.log("you win")
        userWinner.style.display = "block";
        computerWinner.style.display = "none";
        tieUp.style.display = "none";
        computerWin.style.display = "none";
        winnerIcons.classList.add('winner');
        winnerIcons.style.display = 'block';
        NextButton.style.display = "block";
        if(NextButton) {
            NextButton.addEventListener('click', function() {
                window.location.href = "congratulation.html";
            });
        }
        let humanScore = parseInt(localStorage.getItem('humanScore')) || 0; 
        humanScore++; 
        saveScores(parseInt(localStorage.getItem('computerScore')) || 0, humanScore); 
        updateScores();
    } else {
        console.log("computer win")
        winnerIcons.style.display = "none";
        computerWin.style.display = "block";
        NextButton.style.display = "none";
        computerWinner.style.display = "block";
        userWinner.style.display = "none";
        tieUp.style.display = "none";
        let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
        computerScore++;
        saveScores(computerScore, parseInt(localStorage.getItem('humanScore')) || 0);
        updateScores();
    }

    computerChoiceDiv.innerHTML = `<p>PC PICKED: ${computerChoice}</p><div class="design"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
    computerChoiceDiv.style.display = "block";

     // Set border color for computer choice div based on computer's choice
     if (computerChoice === 'rock') {
        computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%; textColor: white;">PC PICKED</p><div class="design" style ="background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #0074B6; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
        } else if (computerChoice === 'paper') {
        computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%;">PC PICKED</p><div class="design" style ="background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #FFA943; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
        } else if (computerChoice === 'scissor') {
        computerChoiceDiv.innerHTML = `<p style = "position: absolute; top: 33.5%; left: 61.5%;">PC PICKED</p><div class="design" style = "background-color: white; width: 100px; height: 100px; text-align: center; border-radius: 50%; line-height: 9; border: 15px solid #BD00FF; position: absolute; left: 60%; top: 40%;"><img src="./${computerChoice}-removebg-preview.png" alt="${computerChoice}" /></div>`;
        }

})

function getComputer() {
    const choices = ['rock', 'paper', 'scissor']; // Assuming you have image files named 'rock-removebg-preview.png', 'paper-removebg-preview.png', and 'scissor-removebg-preview.png'
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


