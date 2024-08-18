var tabuleiro;
var board;
var aviso;
var jogador;
var lin, col;

function inicia() {
    tabuleiro = new Array(3);
    board = document.getElementById('board');
    aviso = document.getElementById('aviso');
    jogador = 1;

    for (let i = 0; i < 3; i++)
        tabuleiro[i] = new Array(3);

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            tabuleiro[i][j] = 0;

    exibe();
}

function exibe() {
    let HTML = '<table cellpadding="10" border="1">';
    for (let i = 0; i < 3; i++) {
        HTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] == 0)
                HTML += '<td>__</td>';
            else if (tabuleiro[i][j] == 1)
                HTML += '<td>X</td>';
            else
                HTML += '<td>O</td>';
        }
        HTML += '</tr>';
    }
    HTML += '</table><br />';
    board.innerHTML = HTML;
}

function jogar() {
    aviso.innerHTML = 'Vez do jogador: ' + ((jogador) % 2 + 1);
    lin = parseInt(document.getElementById("lin").value) - 1;
    col = parseInt(document.getElementById("col").value) - 1;

    if (tabuleiro[lin][col] == 0) {
        if (jogador % 2)
            tabuleiro[lin][col] = 1;
        else
            tabuleiro[lin][col] = -1;
    } else {
        aviso.innerHTML = 'Campo já foi marcado!';
        jogador--;
    }

    jogador++;
    exibe();
    checa();
}

function checa() {
    // Lógica para verificar vencedor (linhas, colunas e diagonais)
    // ...
}
