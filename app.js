alert("Este é o jogo do número secreto");
let maxNumber = 5000;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let bet ;
let tryNumbers = 1;

while (bet != secretNumber) {
    bet = prompt(`Digite um número entre 1 e ${maxNumber}`);
    if (bet == secretNumber) {
        break;
    } else {
        if (bet > secretNumber) {
            alert(`O número é menor que ${bet}`);
        } else {
            alert (`O número é maior que ${bet}`);
        }
        tryNumbers++;
    }
}

let tryWord = tryNumbers > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou miserávi, era o número ${secretNumber}, só demorou ${tryNumbers} ${tryWord} `);