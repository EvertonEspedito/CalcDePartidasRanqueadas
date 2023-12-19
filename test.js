// função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador.
function saldoRanked (vitorias, derrotas) { 
        let calcSaldo = vitorias - derrotas
        return calcSaldo //depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
 }

let totalVitorias = saldoRanked(75, 44)//Vitorias e Derrotas
let elo


if (totalVitorias<10) { //Se vitórias for menor do que 10 = Ferro
    elo ="Ferro"

} else if (totalVitorias>11 && totalVitorias < 20) { //Se vitórias for entre 11 e 20 = Bronze
    elo ="Bronze"

} else if (totalVitorias>21 && totalVitorias < 50) { //Se vitórias for entre 21 e 50 = Prata
    elo ="Prata"

}else if (totalVitorias>51 && totalVitorias < 80) { //Se vitórias for entre 51 e 80 = Ouro
    elo ="Ouro"

}else if (totalVitorias>81 && totalVitorias < 90) { //Se vitórias for entre 81 e 90 = Diamante
    elo ="Diamante"

}else if (totalVitorias>91 && totalVitorias < 100) { //Se vitórias for entre 91 e 100= Lendário
    elo ="Lendário"

}else if (totalVitorias>=101) { //Se vitórias for maior ou igual a 101 = Imortal
    elo ="Imortal"

}

//exibir uma mensagem:

console.log("O Herói tem de saldo de " + totalVitorias + " está no nível de " + elo)

