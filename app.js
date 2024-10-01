alert("Este é o jogo do número secreto");
let secretNumber = 9;
let bet = prompt("Digite um número entre 1 e 10");

if (bet == secretNumber) {
    alert(`Acertou miserávi, era o número ${secretNumber}`);
} else {
    alert("Poxa... Tente de novo!")
}