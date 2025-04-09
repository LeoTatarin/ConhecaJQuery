/*
$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style = "display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href= "${enderecoDaNovaImagem}" target="_blank" title= "Ver imagem em tamanhgo real">
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn();
            $('#endereco-imagem-nova').val('')
    })
})

*/

$(document).ready(function(){
    
    let tamanhoLista = 0;

    $('#nova-tarefa').click(function() { // Quando clicar no botão nova-tarefa
        $('#form-nova-tarefa').slideDown(); // Mostra o formulário form-nova-tarefa com efeito de deslizar pra baixo
    });

    $('#cancelar').click(function() { // Quando clicar no botão cancelar
        $('#form-nova-tarefa').slideUp(); // Recolhe o formulário form-nova-tarefa no mesmo efeito
    });

    $('#adicionar').click(function(e){
        e.preventDefault();
        tamanhoLista++;
        adicionarTarefa(tamanhoLista);
    });


});

function adicionarTarefa(i){
    const inputTarefa = $('#input-tarefa').val();
    const inputData = $('#input-data').val();
    const inputHora = $('#input-hora').val();
    

    const tarefaAdicionada = $(`
        <li id="tarefa${i}">
            ${inputData} -- ${inputHora} -- ${inputTarefa}
            <button type="button" id="concluir${i}">Realizada</button>
            <br>
        </li>
        
    `);

    $('#tarefas').append(tarefaAdicionada);

    // Esconde o formulário
    $('#form-nova-tarefa').slideUp();

    // Limpa o formulário
    $('#form-nova-tarefa')[0].reset();
    
    
    $(`#concluir${i}`).click(function(){
        let textoAnterior = $(`#tarefa${i}`).contents().first().text();
        $(`#tarefa${i}`).html(`<span style="text-decoration: line-through; opacity: 0.5">${textoAnterior}</span><br>`);
    });


}

