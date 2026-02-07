$(document).ready(function () {

    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault();

        const nomeDaTarefa = $('#input-tarefa').val();

        if (nomeDaTarefa !== '') {
            const novaTarefa = $('<li></li>').text(nomeDaTarefa);

            $('#lista-tarefas').append(novaTarefa);

            $('#input-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('concluida');
    });

});
