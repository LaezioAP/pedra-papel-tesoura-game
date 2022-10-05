const choices = document.querySelectorAll('.choice');
const userSpan = document.querySelector('#user-score');
const computerSpan = document.querySelector('#comp-score');
const result_p = document.querySelector(".result p");
let userScore = 0;
let computerScore = 0;

const getCompChoice = () => {
    const choicesComp = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choicesComp[randomNumber];
}

const convertWord = (letter) => {
    if(letter.charAt(0) === "r") return "Pedra"; 
    if(letter.charAt(0) === "p") return "Papel";
    return "Tesoura";
}

const win = (userChoice, computerChoice) => {
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userSpan.textContent = userScore;
    result_p.innerHTML = `${convertWord(userChoice)}<sub>user</sub> vence de ${convertWord(computerChoice)}<sub>comp</sub>. Você venceu! 🎉`;
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 400);
}

const lose = (userChoice, computerChoice) => {
    const userChoiceDiv = document.getElementById(userChoice);
    computerScore++;
    computerSpan.textContent = computerScore;
    result_p.innerHTML = `${convertWord(userChoice)}<sub>user</sub> perde para ${convertWord(computerChoice)}<sub>comp</sub>. Você perdeu... `;
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 400);
}

const draw = (userChoice, computerChoice) => {
    const userChoiceDiv = document.getElementById(userChoice);
    result_p.innerHTML = `${convertWord(userChoice)}<sub>user</sub> empate ${convertWord(computerChoice)}<sub>comp</sub>`;
    userChoiceDiv.classList.add('gray-glow');
    setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 400);
}

const game = (userChoice) => {
    const computerChoice = getCompChoice();
    switch (userChoice + computerChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break
    }
}

const main = () => {
    choices.forEach( choice => {
        choice.addEventListener('click', () => {
            game(choice.id);
        })
    })
}

main();
